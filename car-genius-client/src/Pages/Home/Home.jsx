import About from "./About/About";
import Banner from "./Banner/Banner";
import ServiceContainer from "./Services/ServiceContainer";

const Home = () => {
  return (
    <div className="space-y-6 lg:space-y-20">
      <Banner />
      <About />
      <ServiceContainer />
    </div>
  );
};

export default Home;
