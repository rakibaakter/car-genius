import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { BiSolidCircle, BiSolidMessageDots } from "react-icons/bi";

const ContactUs = () => {
  return (
    <div className="bg-black py-12 rounded-md text-white md:flex   px-6 space-y-4 md:space-y-0 justify-around ">
      {/* time */}
      <div className="flex  gap-4 items-center">
        <div className="relative">
          <FaCalendarAlt size={36} />
          <FaClock
            color="red"
            size={20}
            className="absolute -bottom-1 -right-1"
          />
        </div>
        <div>
          <p className="text-sm">We are open monday-friday</p>
          <h3 className="font-medium lg:text-xl">7:00 am - 9:00 pm</h3>
        </div>
      </div>
      {/* Have a question? */}
      <div className="flex gap-4 items-center">
        <div className="relative">
          <IoCall size={36} />
          <BiSolidMessageDots
            color="red"
            size={24}
            className="absolute -top-1 -right-1"
          />
        </div>
        <div>
          <p className="text-sm">Have a question?</p>
          <a
            href="https://wa.me/25462512658"
            className="font-medium lg:text-xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            +2546 251 2658
          </a>
        </div>
      </div>
      {/* Need a repair? our address */}
      <div className="flex gap-4 items-center">
        <div className="relative ">
          <BiSolidCircle size={40} className="-skew-x-12 skew-y-12" />
          <FaMapMarkerAlt
            size={32}
            color="red"
            className="absolute bottom-4  right-1"
          />
        </div>
        <div>
          <p className="text-sm">Need a repair? our address</p>
          <h3 className="font-medium lg:text-xl">Liza Street, New York</h3>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
