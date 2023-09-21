import { AttentionSeeker, Slide } from "react-awesome-reveal";
import illustration from "../../../assets/undraw_winners_re_wr1l.svg";
import LazyLoad from "react-lazy-load";

const DriverBenefits = () => {
  return (
    <div className="bg-slate-900">
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center lg:h-screen py-7 px-4 lg:p-0 max-w-6xl mx-auto gap-6">
        <div className="order-2 lg:order-1">
          <LazyLoad>
            <img className="w-[39rem]" src={illustration} alt="" />
          </LazyLoad>
        </div>
        <div className="order-1 lg:order-2">
          <Slide direction="right">
            <h1 className="text-5xl font-bold mb-3 text-white">
              Entering a new era of ride-sharing, where everyone wins.
            </h1>
          </Slide>
          <hr className="h-2.5 w-36 bg-primary mb-12" />
          <AttentionSeeker effect="pulse">
            <p className="text-2xl break-words mb-5 text-base-300 font-normal">
              Experience a ride-sharing revolution with Pendler, where drivers
              and riders both <span className="text-primary font-bold">gain edge</span>, creating a win-win situation for all.
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

export default DriverBenefits;
