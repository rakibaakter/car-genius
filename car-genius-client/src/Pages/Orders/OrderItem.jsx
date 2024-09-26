import axios from "axios";
import OutlineButton from "../../Shared/Buttons/OutlineButton";
import PrimaryButton from "../../Shared/Buttons/PrimaryButton";
import { useEffect, useState } from "react";

const OrderItem = ({ order, handleDeleteItem, handlePendingToConfirm }) => {
  const { _id, date, serviceId } = order;
  const [service, setService] = useState();

  useEffect(() => {
    axios.get(`http://localhost:5000/services/${serviceId}`).then((res) => {
      console.log(res.data);
      setService(res.data);
    });
  }, [serviceId]);

  console.log(service);

  return (
    <tr>
      <th>
        <button
          onClick={() => handleDeleteItem(_id)}
          className="btn btn-circle btn-sm"
        >
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
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar w-32 h-24">
            <img src={service?.img} alt={service?.title} />
          </div>
          <div>
            <div className="font-bold">{service?.title}</div>
            <div className="text-sm opacity-50">{date}</div>
          </div>
        </div>
      </td>
      <td>${service?.price}</td>
      <th>
        {status === "confirm" ? (
          <OutlineButton>Confirmed</OutlineButton>
        ) : (
          <button
            onClick={() => {
              handlePendingToConfirm(_id);
            }}
          >
            <PrimaryButton>Pending</PrimaryButton>
          </button>
        )}
      </th>
    </tr>
  );
};

export default OrderItem;
