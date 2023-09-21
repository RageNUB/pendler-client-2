import { AttentionSeeker, Slide } from "react-awesome-reveal";
import illustration from "../../../assets/Motivation_Two Color.svg";
import LazyLoad from "react-lazy-load";

const WhyPendler = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center lg:h-screen py-7 px-4 lg:p-0 gap-6 max-w-6xl mx-auto">
        <div>
          <Slide direction="left">
            <h1 className="text-5xl font-bold mb-3">
              Unlock Limitless Rewards with Pendler&apos;s Referral Program
            </h1>
          </Slide>
          <hr className="h-2.5 w-36 bg-primary mb-12" />
          <AttentionSeeker effect="pulse">
            <p className="text-2xl break-words mb-5 text-[#666d7c] font-normal">
              Spread the word and earn rewards! With Pendler&apos;s unique
              referral model, you and your friends can enjoy <span className="font-bold text-primary">Exclusive Benefits
              for a Lifetime</span> while growing our community together.
            </p>
          </AttentionSeeker>
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

export default WhyPendler;
