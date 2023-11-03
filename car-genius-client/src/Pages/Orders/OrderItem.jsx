import PrimaryButton from "../../Shared/Buttons/PrimaryButton";

const OrderItem = ({ order }) => {
  const { _id, date, title, img, price } = order;

  return (
    <tr>
      <th>
        <button className="btn btn-circle btn-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
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
        <PrimaryButton>Pending</PrimaryButton>
      </th>
    </tr>
  );
};

export default OrderItem;