import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, title, img, price } = service;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt={title} className="rounded-xl" />
      </figure>
      <div className="p-10 space-y-2">
        <h2 className="card-title">{title}</h2>
        <div className="flex items-center justify-between text-[#FF3811]">
          <h4>Price : ${price}</h4>
          <Link to={`/checkout/${_id}`}>
            <AiOutlineArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
