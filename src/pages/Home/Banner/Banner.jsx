import { Link } from "react-router-dom";
import NavbarHome from "../../../components/NavbarHome.jsx/NavbarHome";
import banner_web from "../../../assets/9e3a75071998ea09779c31a36f01a4ce.gif";
import "./Banner.css";

const Banner = () => {

  return (
    <div className="w-full h-screen">
      <div className="text-center banner pt-8 px-2">
        <div className="flex rounded-e-xl h-8 lg:h-10">
          <div className="bg-slate-900 w-16 lg:w-24 flex justify-center items-center rounded-s-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#15802a"
              className="bi bi-megaphone-fill w-6 h-6 lg:w-8 lg:h-8"
              viewBox="0 0 16 16"
            >
              <path d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-11zm-1 .724c-2.067.95-4.539 1.481-7 1.656v6.237a25.222 25.222 0 0 1 1.088.085c2.053.204 4.038.668 5.912 1.56V3.224zm-8 7.841V4.934c-.68.027-1.399.043-2.008.053A2.02 2.02 0 0 0 0 7v2c0 1.106.896 1.996 1.994 2.009a68.14 68.14 0 0 1 .496.008 64 64 0 0 1 1.51.048zm1.39 1.081c.285.021.569.047.85.078l.253 1.69a1 1 0 0 1-.983 1.187h-.548a1 1 0 0 1-.916-.599l-1.314-2.48a65.81 65.81 0 0 1 1.692.064c.327.017.65.037.966.06z" />
            </svg>
          </div>
          <div className="marquees w-full">
            <p className="text-lg lg:text-xl text-white bg-slate-900 rounded-3xl px-4 md:pt-1">
              Pendler is coming soon to Hyderabad. Stay tuned for the official
              launch and Be among the first to enjoy the benefits of our
              innovative ride-sharing platform
            </p>
          </div>
        </div>

        <div className="flex flex-col-reverse lg:flex-row gap-8 justify-center items-center h-full -mt-12 lg:px-10">
          <div className="">
            <img
              className="w-full lg:h-[30rem] rounded-full shadow-lg shadow-orange-500"
              src={banner_web}
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="">
              <h1 className="text-5xl lg:text-6xl font-bold uppercase mb-14 mt-8 lg:mt-0 drop-shadow-2xl">
                <span className="text-[#001c52]">Welcome to PENDLER</span>
              </h1>
              <p className="text-2xl lg:text-4xl font-medium mb-10 text-[#001c52]">
                A <span className="font-bold text-primary">Zero Commission</span>{" "}
                Ride-Hailing Experience
              </p>
              <div className="flex gap-5 justify-center">
                <Link to="/drivers">
                  <button className="btn btn-primary rounded-3xl px-8">
                    Sign Up As Driver
                  </button>
                </Link>
                <Link to="/users">
                  <button className="btn btn-primary rounded-3xl px-8">
                    Sign Up as User
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NavbarHome></NavbarHome>
    </div>
  );
};

export default Banner;
