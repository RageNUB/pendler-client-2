import Navbar from "../../components/Navbar/Navbar";
import illustration from "../../assets/Sending emails_Isometric.svg";
import illustration2 from "../../assets/Checklist_Two Color.svg";
import img1 from "../../assets/Startup _Outline.svg";
import img3 from "../../assets/Motivation_Flatline.svg";
import img2 from "../../assets/Smiley face_Two Color.svg";
import OurTeam from "../Home/OurTeam/OurTeam";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import LazyLoad from "react-lazy-load";

const OurStory = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Helmet>
        <title>Pendler | Our Story</title>
      </Helmet>
      <Navbar></Navbar>
      <div className="text-center mt-10 space-y-5">
        <h1 className="text-4xl font-bold uppercase text-primary">
          Revolutionizing Ride-Sharing
        </h1>
        <p className="text-xl">
          Our mission is to provide a socially responsible and cost-effective
          ride-sharing platform <br />
          that prioritizes customer satisfaction and empowers drivers to grow
          their business.
        </p>
      </div>
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-5 justify-center items-center max-w-6xl mx-auto lg:h-screen py-7 px-4 lg:p-0 gap-6">
          <div className="col-span-3">
            <h1 className="text-5xl font-bold mb-3">
              Why Pendler is Different?
            </h1>
            <hr className="h-2.5 w-36 bg-primary mb-12" />
            <p className="text-2xl break-words mb-5 text-[#666d7c] font-normal">
              Our startup offers drivers a reliable and affordable way to share
              rides with passengers through a subscription-based ride-sharing
              platform. Our platform is built to run on a subscription model
              rather than charging a commission, so drivers keep every penny of
              the ride-sharing money they make.
            </p>
          </div>
          <div className="col-span-2">
            <LazyLoad>
              <img className="w-[39rem]" src={illustration} alt="" />
            </LazyLoad>
          </div>
        </div>
      </div>
      <div className="bg-slate-900 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 justify-center items-center lg:h-screen py-7 px-4 lg:p-0 gap-6 max-w-6xl mx-auto">
          <div className="col-span-2 order-2 lg:order-1">
            <LazyLoad>
              <img className="w-[39rem]" src={illustration2} alt="" />
            </LazyLoad>
          </div>
          <div className="col-span-3 order-1 lg:order-2">
            <h1 className="text-5xl font-bold mb-3 text-white">
              Future of the Pendler
            </h1>
            <hr className="h-2.5 w-36 bg-primary mb-12" />
            <p className="text-2xl break-words mb-5 text-base-300 font-normal">
              Our ride-sharing business has a promising future filled with
              possibilities. We want to reach out to new markets and
              geographical areas. In order to meet changing needs, we will
              create new features and services. Our top priorities are keeping
              customers happy and building a strong driver community. We are
              devoted to improving our platform to its highest potential. We
              anticipate further expansion and achievement in the years to come.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-14 max-w-6xl mx-auto px-4">
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="text-5xl font-bold text-center">Know Our Story</h1>
          <hr className="h-2.5 w-36 bg-primary mb-12" />
        </div>
        <h3 className="text-3xl font-bold mt-10">
          How Pendler&apos;s Journey Took Its Shape
        </h3>
        <div className="space-y-5 text-lg mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 justify-center items-center ">
            <div className="space-y-4 lg:col-span-3">
              <p>
                In a world where commuting had become a daily struggle, our
                founders had come together with a shared vision to revolutionize
                the ride-sharing industry. Frustrated by the challenges faced by
                both riders and drivers, we embarked on a voyage to come up with
                an application that addresses these pain points and redefines
                the way people commute.{" "}
              </p>
              <p>
                Driven by our passion for innovation and desire to make a
                meaningful impact, we had combined our expertise in technology
                and business to lay the foundation of PENDLER. This led to the
                belief of providing convenience to riders along with empowering
                the drivers to thrive by leveraging the technology and fostering
                a driver-centric approach.{" "}
              </p>
            </div>
            <div className="col-span-1 lg:col-span-2">
              <img className="w-[39rem]" src={img1} alt="" />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5 justify-center items-center ">
            <div className="space-y-4 lg:col-span-3 order-1 lg:order-2">
              <p>
                And the journey began with countless hours of brainstorming,
                conducting market research and engaging with the group of
                drivers and riders to understand their needs. This
                industrialized us to assemble a diverse team of like-minded
                individuals who shared their vision and were equally passionate
                about adding a difference.{" "}
              </p>
              <p>
                Together, we meticulously crafted a zero commission model that
                ensured drivers received their fair earnings, while riders
                enjoyed the exclusive perk of affordable and reliable rides.
                Collectively we inducted a subscription system that enables
                drivers with a dedicated subscriber base bringing a steady flow
                of customers and a sense of ownership over their business.{" "}
              </p>
            </div>
            <div className="col-span-1 lg:col-span-2 order-2 lg:order-1">
              <img className="w-[39rem]" src={img3} alt="" />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5 justify-center items-center ">
            <div className="space-y-4 lg:col-span-3">
              <p>
                In our planning process, we faced numerous challenges but with
                our unwavering determination we kept our mission going forward.
                It evolved in pushing the boundaries of innovation, embracing
                feedback from our ever-growing community folks and constantly
                iterating to improve the application.{" "}
              </p>
              <p>
                Today, PENDLER stands as a testament to the dedication and
                relentless pursuit of a better ride-hailing experience.
                It&apos;s a platform built on the foundations of driver
                empowerment, customer satisfaction, and social responsibility.{" "}
              </p>
              <p>
                As a Core-Team of PENDLER, we are committed to drive a positive
                change in the transportation industry. It would be our asset to
                form a culture of collaboration, inspire invention along with
                staying true to our goal by transforming the way we commute.{" "}
              </p>
            </div>
            <div className="col-span-1 lg:col-span-2">
              <img className="w-[39rem]" src={img2} alt="" />
            </div>
          </div>
        </div>
        <div className="pt-14">
          <OurTeam title={"CORE TEAM"}></OurTeam>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
