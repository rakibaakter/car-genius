import bannerImg from "../../assets/images/banner/4.jpg";
const SharedBanner = ({ title, nav }) => {
  return (
    <div
      style={{ backgroundImage: `url(${bannerImg})` }}
      className="h-[220px] md:h-[400px] w-full bg-no-repeat bg-center bg-cover bg-black bg-blend-overlay bg-opacity-50 text-white"
    >
      <div className="h-1/2 flex items-end px-4 md:px-16">
        <h2 className="text-4xl font-medium">{title}</h2>
      </div>
      <div className="h-1/2 flex items-end justify-center">
        <div className="bg-[#FF3811] px-8 py-2 ">
          <h3>{nav}</h3>
        </div>
      </div>
    </div>
  );
};

export default SharedBanner;
