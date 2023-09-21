import Navbar from "../../components/Navbar/Navbar";
import illustration from "../../assets/undraw_referral_re_0aji.svg";
import illustration2 from "../../assets/Taxi Driver_Flatline.svg";
import illustration3 from "../../assets/undraw_access_account_re_8spm.svg";
import illustration4 from "../../assets/Money motivation _Outline.svg";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import LazyLoad from "react-lazy-load";
import Swal from "sweetalert2";

// function onChange(e){
//   setValue(e.target.value);
//   value = value.replace(/[^A-Za-z]/gi, "");
//    console.log(e.target.value.charCodeAt(s+1));
//   //  if()
// }
const Users = () => {
  const [value, setvalue] = useState("");
  const [value1, setvalue1] = useState("");
  const [value2, setvalue2] = useState("");
  // const [value3, setvalue3] = useState("");
  const [error, setError] = useState("");
  const [num, setnum] = useState("");
  const [cit, setcit] = useState("");

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

  const onChange3 = (e) => {
    const re = /^[A-Za-z]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      setvalue2(e.target.value);
      setcit("");
    } else setcit("Only characters allowed");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const city = form.city.value;
    const comment = form.comment.value;

    const userinfo = {
      fullName: name,
      email: email,
      phone: phone,
      city: city,
      comment: comment,
    };
    console.log(userinfo);

    fetch("https://pendler-server-jirimon39.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userinfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "User Registration Successful",
            text: "Our team will review your application and get in touch with you soon. Thank you for choosing Pendler! We look forward to revolutionizing the ride-sharing experience together.",
          });
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <Helmet>
        <title>Pendler | Users</title>
      </Helmet>
      <Navbar></Navbar>
      <div>
        <div className="bg-slate-900">
          <div className="max-w-6xl w-full mx-auto text-center">
            <h1 className="text-4xl font-bold text-center pt-2 text-white mb-6">
              Sign Up As User (Early Access)
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
                <img src={illustration3} alt="" />
              </LazyLoad>
            </div>
            <div>
              {
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
                        onChange={onChange1}
                        value={value}
                        required
                      />
                    </div>
                    <p className="text-warning">{error}</p>
                    <div>
                      <label>
                        <p className="text-md font-semibold text-white">
                          Email
                        </p>
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
                        value={value1}
                        name="phone"
                        placeholder="Phone Number"
                        className="input input-bordered input-primary w-full"
                        onChange={onChange2}
                        required
                      />
                    </div>
                    <p className="text-warning">{num}</p>
                    <div>
                      <label>
                        <p className="text-md font-semibold text-white">City</p>
                      </label>
                      <input
                        type="text"
                        name="city"
                        placeholder="City"
                        className="input input-bordered input-primary w-full"
                        value={value2}
                        onChange={onChange3}
                        required
                      />
                    </div>
                    <p className="text-warning">{cit}</p>
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
                    {/* <p className="text-warning">{comm}</p> */}
                    <label>
                      <input
                        className="btn btn-primary text-white btn-block mt-4"
                        type="submit"
                        value="Submit"
                      />
                    </label>
                  </div>
                </form>
              }
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-5 justify-center items-center max-w-6xl mx-auto lg:h-screen py-7 px-4 lg:p-0 gap-6">
          <div className="col-span-3">
            <h1 className="text-4xl font-bold mb-3">
              Fair and Transparent Pricing: <br /> Unlock the Best Value for
              Your Rides
            </h1>
            <hr className="h-2.5 w-36 bg-primary mb-12" />
            <p className="text-2xl break-words mb-5 text-[#666d7c] font-normal">
              Our innovative pricing model ensures that drivers earn more while
              riders enjoy competitive fares, creating a win-win situation for
              everyone. By eliminating high commissions and implementing a
              subscription-based approach, we prioritize your savings without
              compromising on the quality of your ride experience.
            </p>
          </div>
          <div className="col-span-2">
            <LazyLoad>
              <img
                className="w-[39rem] lg:max-w-xl"
                src={illustration4}
                alt=""
              />
            </LazyLoad>
          </div>
        </div>
      </div>
      <div className="bg-slate-900">
        <div className="grid grid-cols-1 lg:grid-cols-5 justify-center items-center lg:h-screen py-7 px-4 lg:p-0 max-w-6xl mx-auto gap-6">
          <div className="col-span-2 order-2 lg:order-1">
            <LazyLoad>
              <img className="w-[39rem]" src={illustration2} alt="" />
            </LazyLoad>
          </div>
          <div className="col-span-3 order-1 lg:order-2">
            <h1 className="text-4xl font-bold mb-3 text-white">
              Choose Pendler, Support Drivers: Drive with Purpose and Make a
              Difference
            </h1>
            <hr className="h-2.5 w-36 bg-primary mb-12" />
            <p className="text-2xl break-words mb-5 text-base-300 font-normal">
              By riding with us, you not only save on fares but also contribute
              to the success of our dedicated drivers. Our unique model ensures
              that drivers earn more, creating a happy medium where you enjoy
              cost-effective transportation while supporting the hardworking
              individuals who make it possible.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-5 justify-center items-center max-w-6xl mx-auto lg:h-screen py-7 px-4 lg:p-0 gap-6">
          <div className="col-span-3">
            <h1 className="text-4xl font-bold mb-3">
              Earn Rewards with Pendler&apos;s Referral Program
            </h1>
            <hr className="h-2.5 w-36 bg-primary mb-12" />
            <p className="text-2xl break-words mb-5 text-[#666d7c] font-normal">
              With Pendler&apos;s referral program, everyone wins! As a driver
              or user, when you refer someone to join Pendler, you both enjoy
              the benefits. For every ride that your referral takes, you receive
              a percentage of the fare as a reward. This means that the more
              referrals you make, the more you earn with every ride they take.
              It&apos;s a fantastic opportunity to boost your earnings while
              promoting Pendler to your network. Start referring today and watch
              your rewards grow with every ride!
            </p>
          </div>
          <div className="col-span-2">
            <LazyLoad>
              <img className="w-[39rem]" src={illustration} alt="" />
            </LazyLoad>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
