import OutlineButton from "../../../Shared/Buttons/OutlineButton";
import PrimaryButton from "../../../Shared/Buttons/PrimaryButton";
import banner1 from "../../../assets/images/banner/1.jpg";
import banner2 from "../../../assets/images/banner/2.jpg";
import banner3 from "../../../assets/images/banner/3.jpg";
import banner4 from "../../../assets/images/banner/4.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full h-[400px] lg:h-[600px]">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={banner1} className="w-full" />
        <div className="absolute flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full">
          <div className="text-white pl-2 md:pl-8 lg:pl-20 space-y-5 w-full md:w-3/4 lg:w-1/2">
            <h2 className="text-3xl lg:text-6xl font-bold ">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There are many variations of passages of available, but
              <br />
              the majority have suffered alteration in some form
            </p>
            <div className="space-x-4">
              <PrimaryButton>DISCOVER MORE</PrimaryButton>
              <OutlineButton>Latest Project</OutlineButton>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-4 transform -translate-y-1/2  right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle bg-transparent">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle bg-[#FF3811]">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={banner2} className="w-full" />
        <div className="absolute flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full">
          <div className="text-white pl-2 md:pl-8 lg:pl-20 space-y-5 w-full md:w-3/4 lg:w-1/2">
            <h2 className="text-3xl lg:text-6xl font-bold ">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There are many variations of passages of available, but
              <br />
              the majority have suffered alteration in some form
            </p>
            <div className="space-x-4">
              <PrimaryButton>DISCOVER MORE</PrimaryButton>
              <OutlineButton>Latest Project</OutlineButton>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-4 transform -translate-y-1/2  right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle bg-transparent">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle bg-[#FF3811]">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={banner3} className="w-full" />
        <div className="absolute flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full">
          <div className="text-white pl-2 md:pl-8 lg:pl-20 space-y-5 w-full md:w-3/4 lg:w-1/2">
            <h2 className="text-3xl lg:text-6xl font-bold ">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There are many variations of passages of available, but
              <br />
              the majority have suffered alteration in some form
            </p>
            <div className="space-x-4">
              <PrimaryButton>DISCOVER MORE</PrimaryButton>
              <OutlineButton>Latest Project</OutlineButton>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-4 transform -translate-y-1/2  right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle bg-transparent">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle bg-[#FF3811]">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={banner4} className="w-full" />
        <div className="absolute flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full">
          <div className="text-white pl-2 md:pl-8 lg:pl-20 space-y-5 w-full md:w-3/4 lg:w-1/2">
            <h2 className="text-3xl lg:text-6xl font-bold ">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There are many variations of passages of available, but
              <br />
              the majority have suffered alteration in some form
            </p>
            <div className="space-x-4">
              <PrimaryButton>DISCOVER MORE</PrimaryButton>
              <OutlineButton>Latest Project</OutlineButton>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-4 transform -translate-y-1/2  right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle bg-[#FF3811]">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle bg-transparent">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
