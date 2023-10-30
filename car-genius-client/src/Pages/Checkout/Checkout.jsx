import { useLoaderData } from "react-router-dom";
import PrimaryButton from "../../Shared/Buttons/PrimaryButton";
import { useAuthHook } from "../../providers/Hooks/useAuthHook";

const Checkout = () => {
  const { user } = useAuthHook();
  const { _id, title, price } = useLoaderData();

  const handleCheckOut = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = user?.name || form.name.value;
    const date = form.date.value;
    const email = user?.email || form.email.value;
    // const price = form.price.value;

    const order = {
      customerName: name,
      email,
      date,
      _id,
    };
    console.log(order);
  };

  return (
    <div className="space-y-6 lg:space-y-20 text-center mt-10">
      <h2 className="text-3xl font-semibold">Check out for {title}</h2>
      <form onSubmit={handleCheckOut} className="card-body">
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              defaultValue={user?.displayName}
              name="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              name="date"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              name="price"
              defaultValue={"$" + price}
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <PrimaryButton>Check Out</PrimaryButton>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
