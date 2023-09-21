import { Fade } from "react-awesome-reveal";
import CEO from "../../../assets/CEO.jpg";
import COO from "../../../assets/COO.jpg";
import CTO from "../../../assets/CTO.jpg";
import Co_Founder1 from "../../../assets/Co_Founder1.jpg";
import Co_Founder2 from "../../../assets/Co_Founder2.jpeg";
import HR from "../../../assets/HR.jpg";
import LazyLoad from "react-lazy-load";

const OurTeam = ({ title }) => {
  return (
    <div className="mt-12 lg:mt-6 mb-28">
      <h1 className="text-xl lg:text-4xl font-bold mb-3 text-center">
        <span className="bg-primary text-white px-5 py-2 rounded-3xl">
          {title}
        </span>
      </h1>
      <div className="flex flex-col gap-10 mt-16">
        <div className="flex flex-col lg:flex-row justify-center gap-16">
          <Fade direction="left">
            <div className="flex flex-col items-center">
              <LazyLoad>
                <img
                  className="rounded-full w-32 h-32 lg:w-60 lg:h-60 shadow-xl hover:shadow-2xl"
                  src={CEO}
                  alt=""
                />
              </LazyLoad>
              <h2 className="text-xl font-bold mt-3">Vishnu Vardhan</h2>
              <p>Chief Executive Officer & Founder</p>
            </div>
          </Fade>
          <Fade direction="left">
            <div className="flex flex-col items-center">
              <LazyLoad>
                <img
                  className="rounded-full w-32 h-32 lg:w-60 lg:h-60 shadow-xl hover:shadow-2xl"
                  src={COO}
                  alt=""
                />
              </LazyLoad>
              <h2 className="text-xl font-bold mt-3">Likhith Ram</h2>
              <p>Chief Operating Officer & Co-Founder</p>
            </div>
          </Fade>
          <Fade direction="left">
            <div className="flex flex-col items-center">
              <LazyLoad>
                <img
                  className="rounded-full w-32 h-32 lg:w-60 lg:h-60 shadow-xl hover:shadow-2xl"
                  src={Co_Founder2}
                  alt=""
                />
              </LazyLoad>
              <h2 className="text-xl font-bold mt-3">Krishna Vaibhav</h2>
              <p> Co-Founder</p>
            </div>
          </Fade>
          <Fade direction="left">
            <div className="flex flex-col items-center">
              <LazyLoad>
                <img
                  className="rounded-full w-32 h-32 lg:w-60 lg:h-60 shadow-xl hover:shadow-2xl"
                  src={Co_Founder1}
                  alt=""
                />
              </LazyLoad>
              <h2 className="text-xl font-bold mt-3">Sampath Raghavan</h2>
              <p> Co-Founder</p>
            </div>
          </Fade>
        </div>
      
        <div className="flex flex-col lg:flex-row justify-center gap-16">
         
          <Fade direction="right">
            <div className="flex flex-col items-center">
              <LazyLoad>
                <img
                  className="rounded-full w-32 h-32 lg:w-60 lg:h-60 shadow-xl hover:shadow-2xl"
                  src={HR}
                  alt=""
                />
              </LazyLoad>
              <h2 className="text-xl font-bold mt-3">Chakrawarthy Sreenivas</h2>
              <p> Human Resource Cordinator & TL</p>
            </div>
          </Fade>
          
          
          <Fade direction="right">
            <div className="flex flex-col items-center">
              <LazyLoad>
                <img
                  className="rounded-full w-32 h-32 lg:w-60 lg:h-60 shadow-xl hover:shadow-2xl"
                  src={CTO}
                  alt=""
                />
              </LazyLoad>
              <h2 className="text-xl font-bold mt-3">Prathima Kadari</h2>
              <p>Chief Technology Officer </p>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
