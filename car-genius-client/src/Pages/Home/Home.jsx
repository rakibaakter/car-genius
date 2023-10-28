import About from "./About/About";
import Banner from "./Banner/Banner";

const Home = () => {
  return (
    <div className="space-y-6 lg:space-y-20">
      <Banner />
      <About />
    </div>
  );
};

export default Home;
