import Navbar from "../../components/Navbar/Navbar";
import illustration from "../../assets/Taxi Driver_Isometric.svg";
import illustration2 from "../../assets/undraw_access_account_re_8spm.svg";
import { Helmet } from "react-helmet-async";
import { useEffect, useRef, useState } from "react";
import LazyLoad from "react-lazy-load";
import "./Drivers.css";
import Swal from "sweetalert2";

const Drivers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [bike, setBike] = useState(true);
  const [car, setCar] = useState(false);
  const [auto, setAuto] = useState(false);
  const [bikeev, setBikeev] = useState(true);
  const [carev, setCarev] = useState(false);
  const [autoev, setAutoev] = useState(false);

  const [value, setvalue] = useState("");
  const [value1, setvalue1] = useState("");
  const [value2, setvalue2] = useState("");
  const [value3, setvalue3] = useState("");

  const [error, setError] = useState("");
  const [model, setModel] = useState("");
  const [num, setnum] = useState("");
  const [plat, setplate] = useState("");

  const onChange1 = (e) => {
    const re = /^[A-Za-z ]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      setvalue(e.target.value);
      setError("");
    } else setError("Only Characters allowed");
  };

  const onChange2 = (e) => {
    const re = /^[0-9]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      setvalue1(e.target.value);
      setnum("");
    } else setnum("Only numbers allowed");
  };

  const onChangeModel = (e) => {
    const re = /^[A-Za-z0-9 ]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      setvalue3(e.target.value);
      setModel("");
    } else setModel("Only characters and numbers allowed");
  };

  const onChange4 = (e) => {
    const re = /^[A-Za-z0-9]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      setvalue2(e.target.value);
      setplate("");
    } else setplate("Only characters and numbers allowed");
  };

  const vehicleRef = useRef(null);
  const handleVehicle = () => {
    if (vehicleRef.current.value === "bike") {
      setBike(true);
      setCar(false);
      setAuto(false);
      setCarev(false);
      setBikeev(false);
      setAutoev(false);
    } else if (vehicleRef.current.value === "car") {
      setBike(false);
      setCar(true);
      setAuto(false);
      setCarev(false);
      setBikeev(false);
      setAutoev(false);
    } else if (vehicleRef.current.value === "auto") {
      setBike(false);
      setCar(false);
      setAuto(true);
      setCarev(false);
      setBikeev(false);
      setAutoev(false);
    }
    else if (vehicleRef.current.value === "bikeev") {
      setBike(false);
      setCar(false);
      setAuto(false);
      setCarev(false);
      setBikeev(true);
      setAutoev(false);
    }
    else if (vehicleRef.current.value === "carev") {
      setBike(false);
      setCar(false);
      setAuto(false);
      setCarev(true);
      setBikeev(false);
      setAutoev(false);
    }
    else if (vehicleRef.current.value === "autoev") {
      setBike(false);
      setCar(false);
      setAuto(false);
      setCarev(false);
      setBikeev(false);
      setAutoev(true);
    }
  };

  const handlePostData = (info) => {
    fetch("https://pendler-server-jirimon39.vercel.app/drivers", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Driver Registration Successful",
            text: "Our team will review your application and get in touch with you soon. Thank you for choosing Pendler! We look forward to revolutionizing the ride-sharing experience together.",
          });
        }
      })
      .catch((error) => console.log(error));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const vehicle = form.vehicle.value;
    const comment = form.comment.value;

    if (vehicleRef.current.value === "bike") {
      const model = form.model.value;
      const plateNumber = form.plateNumber.value;
      const operatorInfoBike = {
        fullName: name,
        email: email,
        phone: phone,
        vehicle: vehicle,
        model: model,
        plateNumber: plateNumber,
        remarks: comment,
      };
      handlePostData(operatorInfoBike);
    } else if (vehicleRef.current.value === "auto") {
      const plateNumber = form.plateNumber.value;
      const operatorInfoAuto = {
        fullName: name,
        email: email,
        phone: phone,
        vehicle: vehicle,
        plateNumber: plateNumber,
        remarks: comment,
      };
      handlePostData(operatorInfoAuto);
    } else if (vehicleRef.current.value === "car") {
      const type = form.type.value;
      const model = form.model.value;
      const plateNumber = form.plateNumber.value;
      const operatorInfoCar = {
        fullName: name,
        email: email,
        phone: phone,
        vehicle: vehicle,
        type: type,
        model: model,
        plateNumber: plateNumber,
        remarks: comment,
      };
      handlePostData(operatorInfoCar);
    }
  };

  return (
    <div>
      <Helmet>
        <title>Pendler | Drivers</title>
      </Helmet>
      <Navbar></Navbar>
      <div>
        <div className="bg-slate-900">
          <div className="max-w-6xl w-full mx-auto text-center">
            <h1 className="text-4xl font-bold text-center pt-2 text-white mb-6">
              Sign Up As Driver ( Early Access)
            </h1>
            <p className="text-lg text-white">
              Be among the first to enjoy the benefits of our innovative
              ride-sharing platform. Sign up for updates <br /> and be part of
              the Pendler community as we transform the way you commute.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 justify-center items-center max-w-6xl mx-auto mt-3 py-8">
            <div>
              <LazyLoad>
                <img src={illustration2} alt="" />
              </LazyLoad>
            </div>
            <div>
              <form
                onSubmit={handleFormSubmit}
                className="max-w-xl mx-auto px-5"
              >
                <div className=" mt-2 mb-3 space-y-2">
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
                      value={value}
                      onChange={onChange1}
                      required
                    />
                  </div>
                  <p className="text-warning">{error}</p>
                  <div>
                    <label>
                      <p className="text-md font-semibold text-white">Email</p>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="input input-bordered input-primary w-full"
                      required
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
                      value={value1}
                      onChange={onChange2}
                      name="phone"
                      placeholder="Phone Number"
                      className="input input-bordered input-primary w-full"
                      required
                    />
                  </div>
                  <p className="text-warning">{num}</p>
                  <p className="text-lg font-medium text-primary text-center mt-3">
                    Vehicle Details
                  </p>

                  <div>
                    <label>
                      <p className="text-md font-semibold text-white">
                        Pick Your Vehicle Type
                      </p>
                    </label>
                    <select
                      onChange={handleVehicle}
                      ref={vehicleRef}
                      className="select select-bordered select-primary w-full"
                      name="vehicle"
                      required={true}
                    >
                    <option value="bike">Bike</option>
                    <option value="bikeev">Bike EV</option>
                    <option value="car">Car </option>
                    <option value="carev">Car EV</option>
                    <option value="auto">Auto</option>
                    <option value="autoev">Auto EV</option>
                    </select>
                  </div>

                  {bike && (
                    <div>
                      <div>
                        <label>
                          <p className="text-md font-semibold text-white">
                            Model Name
                          </p>
                        </label>
                        <input
                          type="text"
                          value={value3}
                          onChange={onChangeModel}
                          name="model"
                          placeholder="Model Name"
                          className="input input-bordered input-primary w-full"
                          required
                        />
                        <p className="text-warning">{model}</p>
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
                          value={value2}
                          onChange={onChange4}
                          className="input input-bordered input-primary w-full"
                          required
                        />
                      </div>
                    </div>
                  )}
                  {bikeev && (
                    <div>
                      <div>
                        <label>
                          <p className="text-md font-semibold text-white">
                            Model Name
                          </p>
                        </label>
                        <input
                          type="text"
                          value={value3}
                          onChange={onChangeModel}
                          name="model"
                          placeholder="Model Name"
                          className="input input-bordered input-primary w-full"
                          required
                        />
                        <p className="text-warning">{model}</p>
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
                          value={value2}
                          onChange={onChange4}
                          className="input input-bordered input-primary w-full"
                          required
                        />
                      </div>
                    </div>
                  )}
                  {autoev && (
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
                        value={value2}
                        onChange={onChange4}
                        className="input input-bordered input-primary w-full"
                        required
                      />
                    </div>
                  )}

                  <div>
                    <div>
                      {car && (
                        <div>
                          <div>
                            <label>
                              <p className="text-md font-semibold text-white">
                                Pick Your Car Type
                              </p>
                            </label>
                            <select
                              className="select select-bordered select-primary w-full"
                              name="type"
                            >
                              <option value="Mini (3 Passengers)">
                                Mini ( 3 Passengers)
                              </option>
                              <option value="Hatch Back (4 Passengers)">
                                Hatch Back (4 Passengers)
                              </option>
                              <option value="Sedan (4+ Passengers)">
                                Sedan (4+ Passengers)
                              </option>
                              <option value="Mini SUV (5 Passengers)">
                                Mini SUV (5 Passengers)
                              </option>
                              <option value="SUV (7 Passengers)">
                                SUV (7 Passengers)
                              </option>
                              <option value="SUV Plus (8 Passengers)">
                                SUV Plus (8 Passengers)
                              </option>
                            </select>
                          </div>
                          <div>
                            <label>
                              <p className="text-md font-semibold text-white">
                                Model Name
                              </p>
                            </label>
                            <input
                              type="text"
                              value={value3}
                              onChange={onChangeModel}
                              name="model"
                              placeholder="Model Name"
                              className="input input-bordered input-primary w-full"
                              required
                            />
                          </div>
                          <p className="text-warning">{model}</p>
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
                              value={value2}
                              onChange={onChange4}
                              className="input input-bordered input-primary w-full"
                              required
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <div>
                      {carev && (
                        <div>
                          <div>
                            <label>
                              <p className="text-md font-semibold text-white">
                                Pick Your Car Type
                              </p>
                            </label>
                            <select
                              className="select select-bordered select-primary w-full"
                              name="type"
                            >
                              <option value="Mini (3 Passengers)">
                                Mini EV( 3 Passengers)
                              </option>
                              <option value="Hatch Back (4 Passengers)">
                                Hatch Back EV(4 Passengers)
                              </option>
                              <option value="Sedan (4+ Passengers)">
                                Sedan EV(4+ Passengers)
                              </option>
                              <option value="Mini SUV (5 Passengers)">
                                Mini SUV EV(5 Passengers)
                              </option>
                              <option value="SUV (7 Passengers)">
                                SUV EV(7 Passengers)
                              </option>
                              <option value="SUV Plus (8 Passengers)">
                                SUV Plus EV(8 Passengers)
                              </option>
                            </select>
                          </div>
                          <div>
                            <label>
                              <p className="text-md font-semibold text-white">
                                Model Name
                              </p>
                            </label>
                            <input
                              type="text"
                              value={value3}
                              onChange={onChangeModel}
                              name="model"
                              placeholder="Model Name"
                              className="input input-bordered input-primary w-full"
                              required
                            />
                          </div>
                          <p className="text-warning">{model}</p>
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
                              value={value2}
                              onChange={onChange4}
                              className="input input-bordered input-primary w-full"
                              required
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <p className="text-warning">{plat}</p>
                  <div>
                    <label>
                      <p className="text-md font-semibold text-white">
                        Comments (Optional)
                      </p>
                    </label>
                    <textarea
                      name="comment"
                      className="textarea textarea-secondary textarea-lg w-full max-w-lg"
                      placeholder="Add your comments if any"
                    ></textarea>
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
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-col justify-center lg:h-screen py-7 px-4 lg:p-0 lg:mb-20">
        <h1 className="text-5xl font-bold text-center mt-14 mb-10">
          Drive with Purpose, Earn with Pride.
        </h1>
        <h3 className="text-5xl font-bold text-center mb-8 text-primary">
          0% Commission
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center max-w-6xl mx-auto  gap-6">
          <div>
            <h1 className="text-4xl font-bold mb-3">
              Empowering Drivers with our Innovative Subscription System
            </h1>
            <hr className="h-2.5 w-36 bg-primary mb-12" />
            <p className="text-2xl break-words mb-5 text-[#666d7c] font-normal">
              Our platform is built to run on a subscription model rather than
              charging a commission from drivers, so drivers keep every penny of
              the ride-sharing money they make.
            </p>
          </div>
          <div>
            <LazyLoad>
              <img className="w-[39rem]" src={illustration} alt="" />
            </LazyLoad>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto lg:-mt-8 px-4 mt-5 ">
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="text-4xl font-bold text-center">
            Unlocking Opportunities for Drivers
          </h1>
          <hr className="h-2.5 w-36 bg-primary mb-12" />
        </div>
        <div className="space-y-4 text-2xl mb-28 text-[#424754]">
          <p>
            Our platform offers drivers numerous benefits including higher
            earnings through our{" "}
            <b className="text-primary">NO commission model</b>. With our{" "}
            <b className="text-primary">driver-centric approach</b>, we aim to{" "}
            <b className="text-primary">empower drivers</b> by providing them
            with a supportive ecosystem that enables growth,{" "}
            <b className="text-primary">financial stability</b>, and enhanced
            work satisfaction. By joining our platform, drivers can experience
            improved livelihoods, increased flexibility and a rewarding
            partnership that prioritizes Driver&apos;s success.{" "}
          </p>
          <p>
            <span className="font-bold">Zero Commission Model: </span>We offer
            drivers a ZERO commission structure, allowing them to keep a larger
            portion of their earnings and maximize their income.
          </p>
          <p>
            <span className="font-bold">Subscription System : </span>Our
            subscription model empowers drivers with full control over their
            earnings. Say goodbye to unpredictable income and hello to stability
            and ownership. Customers pay less, while drivers earn what they
            deserve. Join us and be the master of your ride-sharing success.
          </p>
          <p className="text-center font-bold text-3xl text-primary pt-14">
            WORRY LESS : EARN MORE
          </p>
        </div>
      </div>
    </div>
  );
};

export default Drivers;
