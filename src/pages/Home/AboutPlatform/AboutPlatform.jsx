import { AttentionSeeker, Slide } from "react-awesome-reveal";
// import illustration from "../../../assets/"
import illustration from "../../../assets/undraw_savings_re_eq4w.svg";
import LazyLoad from "react-lazy-load";

const AboutPlatform = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center max-w-6xl mx-auto lg:h-screen py-7 px-4 lg:p-0 gap-6">
        <div>
          <Slide direction="left">
            <h1 className="text-5xl font-bold mb-3">
              The Most Cost-Effective <br /> Commuting Solution
            </h1>
          </Slide>
          <hr className="h-2.5 w-36 bg-primary mb-12" />
          <AttentionSeeker effect="pulse">
            <p className="text-2xl break-words mb-5 text-[#666d7c] font-normal">
              With Our <span className="font-bold text-primary">0% Commission System</span>, Pendler has the most
              cost-effective pricing mechanism which benefits both the rider
              and the driver.
            </p>
          </AttentionSeeker>
          {/* <Link>
            <button className="btn btn-primary px-10">Learn More</button>
          </Link> */}
        </div>
        <div>
          <LazyLoad>
            <img className="w-[39rem]" src={illustration} alt="" />
          </LazyLoad>
        </div>
      </div>
    </div>
  );
};

export default AboutPlatform;
