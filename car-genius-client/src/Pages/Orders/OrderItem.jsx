import OutlineButton from "../../Shared/Buttons/OutlineButton";
import PrimaryButton from "../../Shared/Buttons/PrimaryButton";

const OrderItem = ({ order, handleDeleteItem, handlePendingToConfirm }) => {
  const { _id, date, title, img, price, status } = order;

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
            <img src={img} alt={title} />
          </div>
          <div>
            <div className="font-bold">{title}</div>
            <div className="text-sm opacity-50">{date}</div>
          </div>
        </div>
      </td>
      <td>${price}</td>
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
