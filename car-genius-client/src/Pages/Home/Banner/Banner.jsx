import OutlineButton from "../../../Shared/Buttons/OutlineButton";
import PrimaryButton from "../../../Shared/Buttons/PrimaryButton";
import banner1 from "../../../assets/images/banner/1.jpg";
import banner2 from "../../../assets/images/banner/2.jpg";
import banner3 from "../../../assets/images/banner/3.jpg";
import banner4 from "../../../assets/images/banner/4.jpg";

const Banner = () => {
  const bannerItems = [
    {
      id: "slide1",
      imgSrc: banner1,
      heading: "Affordable Price For Car Servicing",
      detail:
        "There are many variations of passages of available, but the majority have suffered alteration in some form",
      prevId: "#slide4",
      nextId: "#slide2",
    },
    {
      id: "slide2",
      imgSrc: banner2,
      heading: "Affordable Price For Car Servicing",
      detail:
        "There are many variations of passages of available, but the majority have suffered alteration in some form",
      prevId: "#slide1",
      nextId: "#slide3",
    },
    {
      id: "slide3",
      imgSrc: banner3,
      heading: "Affordable Price For Car Servicing",
      detail:
        "There are many variations of passages of available, but the majority have suffered alteration in some form",
      prevId: "#slide2",
      nextId: "#slide4",
    },
    {
      id: "slide4",
      imgSrc: banner4,
      heading: "Affordable Price For Car Servicing",
      detail:
        "There are many variations of passages of available, but the majority have suffered alteration in some form",
      prevId: "#slide3",
      nextId: "#slide1",
    },
  ];

  return (
    <div className="carousel w-full h-[400px] lg:h-[600px] rounded-xl mt-6">
      {bannerItems.map((item) => (
        <div
          key={item.id}
          id={item.id}
          className="carousel-item relative w-full"
        >
          <img src={item.imgSrc} className="w-full" />
          <div className="absolute flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full">
            <div className="text-white pl-2 md:pl-8 lg:pl-20 space-y-5 w-full md:w-3/4 lg:w-1/2">
              <h2 className="text-3xl lg:text-6xl font-bold ">
                {item.heading}
              </h2>
              <p>{item.detail}</p>
              <div className="space-x-4">
                <PrimaryButton>DISCOVER MORE</PrimaryButton>
                <OutlineButton>Latest Project</OutlineButton>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end gap-4 transform -translate-y-1/2  right-5 bottom-0">
            <a href={item.prevId} className="btn btn-circle bg-transparent">
              ❮
            </a>
            <a href={item.nextId} className="btn btn-circle bg-[#FF3811]">
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Banner;
