import Navbar from "../../components/Navbar/Navbar";
import illustration2 from "../../assets/undraw_personal_opinions_re_qw29.svg";
import { useEffect, useState } from "react";
import LazyLoad from "react-lazy-load";
import Swal from "sweetalert2";

const JoinUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [value, setvalue] = useState("");
  const [value1, setvalue1] = useState("");

  const [error, setError] = useState("");
  const [num, setnum] = useState("");

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

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const message = form.message.value;

    const driverinfo = {
      fullName: name,
      email: email,
      phone: phone,
      message: message,
    };

    fetch("https://pendler-server-jirimon39.vercel.app/queries", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(driverinfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title:
              "Thank you for connecting with us and choosing Pendler! We look forward to revolutionizing the ride-sharing experience together",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="text-center mt-10 space-y-5 max-w-6xl w-full mx-auto">
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="text-4xl font-bold text-center">Contact Our Firm</h1>
          <hr className="h-2.5 w-36 bg-primary mb-10" />
        </div>
        <p className="text-lg">
          We are a tight-knit team of changemakers on a mission to radically
          transform the ride-sharing sector. For any discussions or business
          proposals, you can drop us a mail to pendlerofficial1@gmail.com. Any
          queries / feedback, feel free to reach out to us through this form. We
          would love to hear from you.
        </p>
      </div>
      <div className="mt-14 bg-slate-900 grid justify-center items-center">
        <h1 className="text-4xl font-bold text-center pt-5 text-white">
          Drop Your Queries / Inputs
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 justify-center items-center max-w-6xl mx-auto mt-3 py-8">
          <div className="px-4 order-1 lg:order-2">
            <LazyLoad>
              <img className="w-[39rem]" src={illustration2} alt="" />
            </LazyLoad>
          </div>
          <div className="order-2 lg:order-1">
            <form onSubmit={handleFormSubmit} className="max-w-xl mx-auto px-5">
              <div className="mt-2 mb-3 space-y-2">
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
                    value={value}
                    onChange={onChange1}
                    name="name"
                    placeholder="Your Name"
                    className="input input-bordered input-primary w-full"
                    required
                  />
                </div>
                <p className="text-warning">{error}</p>
                <div>
                  <label>
                    <p className="text-md font-semibold text-white">
                      Email Address
                    </p>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
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
                    name="phone"
                    value={value1}
                    onChange={onChange2}
                    placeholder="Phone Number"
                    className="input input-bordered input-primary w-full"
                    required
                  />
                </div>
                <p className="text-warning">{num}</p>
                <div>
                  <label>
                    <p className="text-md font-semibold text-white">
                      Your Message
                    </p>
                  </label>
                  <textarea
                    name="message"
                    className="textarea textarea-secondary textarea-lg w-full max-w-lg"
                    placeholder="Your Message"
                    required
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
  );
};

export default JoinUs;
