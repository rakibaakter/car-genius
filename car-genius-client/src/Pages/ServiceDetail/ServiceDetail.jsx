import { Link, useLoaderData } from "react-router-dom";
import SharedBanner from "../../Shared/Headers/SharedBanner";
import { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import PrimaryButton from "../../Shared/Buttons/PrimaryButton";

const ServiceDetail = () => {
  const { img, title, description, facility, _id, price } = useLoaderData();
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <SharedBanner title={"Service Details"} nav={"Home/Service"} />
      <div className="mt-8 md:mt-20 flex flex-col-reverse md:flex-row gap-4">
        {/* service detail */}
        <div className="w-full md:w-2/3 space-y-8">
          <img src={img} alt={title} className="rounded-lg image-full w-full" />
          <p className="mt-16 text-justify text-gray-500">{description}</p>
          {/* facility */}
          <div className="grid md:grid-cols-2 gap-6">
            {facility.map((item, ind) => (
              <div
                key={ind}
                className="border-t border-[#FF3811] rounded-md bg-gray-100 p-8"
              >
                <h3 className="lg:text-xl text-gray-600 font-medium mb-4">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-500 ">{item.details}</p>
              </div>
            ))}
          </div>
          {/* 3 way to process */}
          <div>
            <h3 className="text-3xl font-semibold mb-4">
              3 Simple Steps to Process
            </h3>
            <p className="text-gray-500 ">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don&apos;t look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn&apos;t anything embarrassing
              hidden in the middle of text
            </p>
            <div className="grid md:grid-cols-3 md:gap-8">
              <div className="space-y-4 mt-4 lg:mt-10 text-center border py-4 lg:py-8 px-4 lg:px-12 rounded-lg">
                <div className="bg-[#FF3811] text-white font-semibold text-center text-xl lg:text-2xl p-2 w-16 m-auto rounded-full border-8 border-red-300 ">
                  01
                </div>
                <h3 className="lg:text-xl font-semibold uppercase">Step One</h3>
                <p className="text-gray-500">
                  It uses a dictionary of over 200 .
                </p>
              </div>
              <div className="space-y-4 mt-4 lg:mt-10 text-center border py-4 lg:py-8 px-4 lg:px-12 rounded-lg">
                <div className="bg-[#FF3811] text-white font-semibold text-center text-xl lg:text-2xl p-2 w-16 m-auto rounded-full border-8 border-red-300 ">
                  02
                </div>
                <h3 className="lg:text-xl font-semibold uppercase">Step two</h3>
                <p className="text-gray-500">
                  It uses a dictionary of over 200 .
                </p>
              </div>
              <div className="space-y-4 mt-4 lg:mt-10 text-center border py-4 lg:py-8 px-4 lg:px-12 rounded-lg">
                <div className="bg-[#FF3811] text-white font-semibold text-center text-xl lg:text-2xl p-2 w-16 m-auto rounded-full border-8 border-red-300 ">
                  03
                </div>
                <h3 className="lg:text-xl font-semibold uppercase">
                  Step three
                </h3>
                <p className="text-gray-500">
                  It uses a dictionary of over 200 .
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* checkout side  */}
        <div className="md:w-1/3">
          {/* services */}
          <div className="bg-gray-100 md:py-8 px-6 hidden md:block">
            <h3 className="text-3xl font-bold mb-4">Services</h3>
            {services.map((service) => (
              <div
                key={service._id}
                className={`w-full mb-4 px-2 lg:px-6 py-4 font-medium rounded-md ${
                  _id === service._id ? "bg-[#FF3811] text-white" : "bg-white"
                }`}
              >
                <Link
                  to={`/service/${service._id}`}
                  className="flex justify-between items-center"
                >
                  <span>{service.title}</span>
                  <FaArrowRightLong />
                </Link>
              </div>
            ))}
          </div>
          {/* price and checkout */}

          <div className="md:px-6 md:mt-8">
            <h2 className="text-2xl font-bold md:hidden">{title}</h2>
            <h2 className="text-3xl font-bold my-4 ">Price ${price}</h2>
            <PrimaryButton>
              <Link to={`/checkout/${_id}`}>
                <span className="lg:px-6">Proceed Checkout</span>
              </Link>
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
