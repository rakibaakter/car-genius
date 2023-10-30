import { useState } from "react";
import SectionHeading from "../../../Shared/Section/SectionHeading";
import SectionTitle from "../../../Shared/Section/SectionTitle";
import { useEffect } from "react";
import ServiceCard from "./ServiceCard";
import OutlineButton from "../../../Shared/Buttons/OutlineButton";

const ServiceContainer = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="text-center space-y-5">
      <SectionTitle>Service</SectionTitle>
      <SectionHeading>Our Service Area</SectionHeading>
      <p className="max-w-lg mx-auto">
        The majority have suffered alteration in some form, by injected humour,
        or randomised words which dont look even slightly believable.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
      <OutlineButton>More Services</OutlineButton>
    </div>
  );
};

export default ServiceContainer;
