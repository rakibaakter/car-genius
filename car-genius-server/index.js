const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();
const app = express();
const port = process.env.port || 5000;

// middlewares
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
app.use(express.json());

// custom middleware
// const verifyToken = async (req, res, next) => {
//   const token = req.cookies.token;
//   console.log(token);
//   if (!token) {
//     return res.status(401).send({ message: "unauthorized" });
//   }
//   jwt.verify(token, process.env.ACCESS_SECRET_TOKEN, (err, decoded) => {
//     if (err) {
//       return res.status(401).send({ message: "unauthorized" });
//     }
//     req.user = decoded;
//     next();
//   });
// };

// mongodb setup

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.bysunmk.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    // token
    app.post("/jwt", async (req, res) => {
      const user = req.body;
      console.log(user);

      const token = jwt.sign(user, process.env.ACCESS_SECRET_TOKEN, {
        expiresIn: "1h",
      });

      res
        .cookie("token", token, {
          httpOnly: true,
          secure: true,
          sameSite: "none",
        })
        .send({ success: true });
    });

    app.post("/logout", async (req, res) => {
      const user = req.body;
      console.log("logging out ", user);

      res.clearCookie("token", { maxAge: 0 }).send({ success: true });
    });

    // access data of services from carGenius database
    const serviceCollection = client.db("carGenius").collection("services");
    const bookingsCollection = client.db("carGenius").collection("bookings");

    app.get("/services", async (req, res) => {
      const cursor = serviceCollection.find();
      const result = await cursor.toArray();

      res.send(result);
    });

    app.get("/services/:id", async (req, res) => {
      const id = req.params.id;
      //   console.log(id);
      const query = { _id: new ObjectId(id) };
      const options = {
        projection: { title: 1, price: 1, img: 1 },
      };

      const result = await serviceCollection.findOne(query, options);

      res.send(result);
    });

    // bookings info
    app.get("/bookings", async (req, res) => {
      console.log(req.query.email);

      let query = {};
      if (req.query?.email) {
        query = { email: req.query.email };
      }

      const result = await bookingsCollection.find(query).toArray();

      // console.log(req.cookies.token);
      res.send(result);
    });

    app.post("/bookings", async (req, res) => {
      const booking = req.body;
      console.log(booking);
      const result = await bookingsCollection.insertOne(booking);

      res.send(result);
    });

    app.patch("/bookings/:id", async (req, res) => {
      const id = req.params.id;
      const updateBooking = req.body;
      console.log(updateBooking);

      const filter = { _id: id };
      const updateDoc = {
        $set: {
          status: updateBooking.status,
        },
      };

      const result = await bookingsCollection.updateOne(filter, updateDoc);

      res.send(result);
    });

    app.delete("/bookings/:id", async (req, res) => {
      const id = req.params.id;
      console.log(id);
      const query = { _id: id };
      const result = await bookingsCollection.deleteOne(query);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

// initial
app.get("/", (req, res) => {
  res.send("Car Genius On The Way...!");
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
