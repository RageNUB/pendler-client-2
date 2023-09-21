import LazyLoad from "react-lazy-load";
import illustration from "../../../assets/WhatsApp_Image_2023-07-15_at_7.36.14_PM-removebg-preview.png";
import { Slide, AttentionSeeker } from "react-awesome-reveal";

const DifferentDoing = () => {
  return (
    <div className="bg-slate-900 mt-3">
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center lg:h-screen py-7 px-4 lg:p-0 gap-6 max-w-6xl mx-auto">
        <div className="order-2 lg:order-1">
          <LazyLoad>
            <img className="w-[39rem]" src={illustration} alt="" />
          </LazyLoad>
        </div>
        <div className="order-1 lg:order-2">
          <Slide direction="right">
            <h1 className="text-5xl font-bold mb-3 text-white">
              Discover a Seamless <br /> Ride Experience
            </h1>
          </Slide>
          <hr className="h-2.5 w-36 bg-primary mb-12" />
          <AttentionSeeker effect="pulse">
            <p className="text-2xl break-words mb-5 text-base-300 font-normal">
              Welcome to Pendler - Your Go To Ride-Sharing Platform for <span className="text-primary font-bold">seamless
              travel</span>. Explore user-centric features and see why Pendler is your
              preferred choice.
            </p>
          </AttentionSeeker>
          {/* <Link>
            <button className="btn btn-primary px-10">Learn More</button>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default DifferentDoing;
