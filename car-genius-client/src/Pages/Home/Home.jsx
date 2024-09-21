import About from "./About/About";
import Banner from "./Banner/Banner";
import ContactUs from "./Contact/ContactUs";
import ServiceContainer from "./Services/ServiceContainer";

const Home = () => {
  return (
    <div className="space-y-4 lg:space-y-20">
      <Banner />
      <About />
      <ServiceContainer />
      <ContactUs />
    </div>
  );
};

export default Home;
