import { useEffect, useState } from "react";
import { useAuthHook } from "../../providers/Hooks/useAuthHook";
import OrderItem from "./OrderItem";
import axios from "axios";

const Orders = () => {
  const { user } = useAuthHook();
  const [orders, setOrders] = useState([]);

  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  useEffect(() => {
    axios.get(url, { withCredentials: true }).then((res) => {
      console.log(res.data);
      setOrders(res.data);
    });
  }, [url]);

  // useEffect(() => {
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // console.log(data);
  //       setOrders(data);
  //     });
  // }, [url]);

  // for delete an item
  const handleDeleteItem = (id) => {
    console.log(id);
    const proceed = confirm("Are you want to delete?");
    if (proceed) {
      fetch(`http://localhost:5000/bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Deleted");
            const remaining = orders.filter((order) => order._id !== id);
            setOrders(remaining);
          }
        });
    }
  };

  // for update an item
  const handlePendingToConfirm = (id) => {
    console.log(id);
    const proceed = confirm("Are you want to confirm?");
    if (proceed) {
      fetch(`http://localhost:5000/bookings/${id}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ status: "confirm" }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.modifiedCount > 0) {
            alert("confirm");
            const remaining = orders.filter((order) => order._id !== id);
            const update = orders.find((order) => order._id === id);
            update.status = "confirm";
            const newOrders = [update, ...remaining];
            setOrders(newOrders);
          }
        });
    }
  };

  return (
    <div>
      <h2>my order list {orders.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <button className="btn btn-circle btn-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#FF3811"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </th>
              <th>Name</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <OrderItem
                key={order._id}
                order={order}
                handleDeleteItem={handleDeleteItem}
                handlePendingToConfirm={handlePendingToConfirm}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
