import { useState } from "react";
import illustration from "../../../assets/undraw_access_account_re_8spm.svg";
import LazyLoad from "react-lazy-load";

const EarlyBirdForm = () => {
  const [drive, setDrive] = useState(true);
  const [ride, setRide] = useState(false);

  const handleDrive = () => {
    setDrive(true);
    setRide(false);
  };
  const handleRide = () => {
    setDrive(false);
    setRide(true);
  };

  return (
    <div className="bg-slate-900">
      <h1 className="text-4xl font-bold text-center pt-2 text-white">
        Apply For Early Bird
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 justify-center items-center max-w-6xl mx-auto mt-3 py-8">
        <div>
          <LazyLoad>
            <img src={illustration} alt="" />
          </LazyLoad>
        </div>
        <div>
          <div className="flex justify-center mt-5 text-white">
            <button
              onClick={handleDrive}
              className={`btn rounded-3xl ${
                drive ? "btn-primary" : "btn-ghost"
              }`}
            >
              Apply To Drive
            </button>
            <button
              onClick={handleRide}
              className={`btn rounded-3xl ${
                ride ? "btn-primary" : "btn-ghost"
              }`}
            >
              Sign Up to Ride
            </button>
          </div>
          {drive && (
            <form className="max-w-xl mx-auto px-5">
              <div className=" mt-2 mb-3">
                <p className="text-lg font-medium text-primary text-center">
                  Personal Info
                </p>
                <div>
                  <label>
                    <p className="text-md font-semibold text-white">
                      Full Name
                    </p>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    className="input input-bordered input-primary w-full"
                  />
                </div>
                <div>
                  <label>
                    <p className="text-md font-semibold text-white">Email</p>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="input input-bordered input-primary w-full"
                  />
                </div>
                <div>
                  <label>
                    <p className="text-md font-semibold text-white">
                      Phone Number
                    </p>
                  </label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    className="input input-bordered input-primary w-full"
                  />
                </div>
                <p className="text-lg font-medium text-primary text-center mt-3">
                  Vehicle Details
                </p>
                <div>
                  <label>
                    <p className="text-md font-semibold text-white">
                      Car Model
                    </p>
                  </label>
                  <input
                    type="text"
                    name="model"
                    placeholder="Car Model"
                    className="input input-bordered input-primary w-full"
                  />
                </div>
                <div>
                  <label>
                    <p className="text-md font-semibold text-white">
                      Plate Number
                    </p>
                  </label>
                  <input
                    type="text"
                    name="plateNumber"
                    placeholder="Plate Number"
                    className="input input-bordered input-primary w-full"
                  />
                </div>
                <label>
                  <input
                    className="btn btn-primary text-white btn-block mt-4"
                    type="submit"
                    value="Submit"
                  />
                </label>
              </div>
            </form>
          )}
          {ride && (
            <form className="max-w-xl mx-auto px-5">
              <div className=" mt-2 mb-3">
                <p className="text-lg font-medium text-primary text-center">
                  Personal Info
                </p>
                <div>
                  <label>
                    <p className="text-md font-semibold text-white">
                      Full Name
                    </p>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    className="input input-bordered input-primary w-full"
                  />
                </div>
                <div>
                  <label>
                    <p className="text-md font-semibold text-white">Email</p>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="input input-bordered input-primary w-full"
                  />
                </div>
                <div>
                  <label>
                    <p className="text-md font-semibold text-white">
                      Phone Number
                    </p>
                  </label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    className="input input-bordered input-primary w-full"
                  />
                </div>
                <div>
                  <label>
                    <p className="text-md font-semibold text-white">City</p>
                  </label>
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    className="input input-bordered input-primary w-full"
                  />
                </div>
                <label>
                  <input
                    className="btn btn-primary text-white btn-block mt-4"
                    type="submit"
                    value="Submit"
                  />
                </label>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default EarlyBirdForm;
