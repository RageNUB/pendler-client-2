import { AttentionSeeker, Slide } from "react-awesome-reveal";

const FAQs = () => {
  return (
    <div className="bg-slate-900">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 justify-center lg:items-center lg:h-screen py-7 px-4 lg:p-0 max-w-6xl mx-auto">
        <div>
          <Slide direction="left">
            <h1 className="text-5xl font-bold mb-3 text-white">
              Solving the Problems of <br /> Traditional Ridesharing
            </h1>
          </Slide>
          <hr className="h-2.5 w-36 bg-primary mb-12" />
          <AttentionSeeker effect="pulse">
            <p className="text-2xl break-words mb-5 text-base-300 font-normal">
              Discover the common challenges faced by other platforms and how
              Pendler addresses them to provide a superior service.
            </p>
          </AttentionSeeker>
        </div>
        <div className="space-y-2 h-1/2 lg:h-3/4 lg:overflow-y-scroll no-scrollbar">
          <Slide direction="right">
            <div
              tabIndex={0}
              className="collapse collapse-arrow border border-base-300 bg-base-200"
            >
              <div className="collapse-title text-xl font-medium">
                1. How does PENDLER work?
              </div>
              <div className="collapse-content">
                <p>
                  PENDLER is a ride-sharing platform that connects customers
                  with reliable drivers. Customers can book rides through our
                  user-friendly app, and drivers can accept and complete those
                  rides ensuring a seamless experience for all.
                </p>
              </div>
            </div>
          </Slide>
          <Slide direction="right">
            <div
              tabIndex={0}
              className="collapse collapse-arrow border border-base-300 bg-base-200"
            >
              <div className="collapse-title text-xl font-medium">
                2. What makes PENDLER different from other ride-sharing
                platforms?
              </div>
              <div className="collapse-content">
                <p>
                  At PENDLER, we prioritize both customers and drivers. We offer
                  a low commission model ensuring drivers earn more while
                  customers enjoy affordable rides. Our subscription system
                  provides drivers with a steady flow of customers enhancing
                  their earning potential and work satisfaction.
                </p>
              </div>
            </div>
          </Slide>
          <Slide direction="right">
            <div
              tabIndex={0}
              className="collapse collapse-arrow border border-base-300 bg-base-200"
            >
              <div className="collapse-title text-xl font-medium">
                3. How can I become a driver on PENDLER?
              </div>
              <div className="collapse-content">
                <p>
                  To become a driver on PENDLER, simply sign up on our website
                  and complete the registration process. Our team will review
                  your application in 2-3 days. Once approved, you can start accepting
                  ride requests and earn money.
                </p>
              </div>
            </div>
          </Slide>
          <Slide direction="right">
            <div
              tabIndex={0}
              className="collapse collapse-arrow border border-base-300 bg-base-200"
            >
              <div className="collapse-title text-xl font-medium">
                4. What are the benefits of being a PENDLER driver?
              </div>
              <div className="collapse-content">
                <p>
                  As a PENDLER driver, you&apos;ll enjoy numerous benefits,
                  including higher earnings, a flexible schedule, access to our
                  exclusive driver perks / rewards and a supportive community
                  of fellow drivers. We value your success and aim to provide
                  you with the best experience in the ride-sharing industry.
                </p>
              </div>
            </div>
          </Slide>
          <Slide direction="right">
            <div
              tabIndex={0}
              className="collapse collapse-arrow border border-base-300 bg-base-200"
            >
              <div className="collapse-title text-xl font-medium">
                5. How does the subscription system for drivers work?
              </div>
              <div className="collapse-content">
                <p>
                  The subscription system for drivers provides a range of
                  benefits including a steady stream of customers, increased
                  earnings and priority access to ride requests. Drivers can
                  choose from daily, weekly or monthly plans and receive the
                  full fare amount from each ride without any commission fees
                  deducted. They can track their earnings in real-time, withdraw
                  instantly or at regular intervals and have the opportunity to
                  build a successful ride-sharing business with stability and
                  control over their earnings.
                </p>
              </div>
            </div>
          </Slide>
          <Slide direction="right">
            <div
              tabIndex={0}
              className="collapse collapse-arrow border border-base-300 bg-base-200"
            >
              <div className="collapse-title text-xl font-medium">
                6. What are the benefits of Pendler&apos;s subscription system
                for drivers?
              </div>
              <div className="collapse-content">
                <p>
                  The subscription system for drivers in Pendler offers
                  increased earnings as drivers save their full earnings
                  without any commissions deducted. It provides a steady stream
                  of customers, priority access to ride requests, flexibility in
                  choosing subscription plans, financial stability, control and
                  ownership over earnings, support & training and a
                  driver-centric model that prioritizes their success and
                  satisfaction.
                </p>
              </div>
            </div>
          </Slide>
          <Slide direction="right">
            <div
              tabIndex={0}
              className="collapse collapse-arrow border border-base-300 bg-base-200"
            >
              <div className="collapse-title text-xl font-medium">
                7. How does the referral program work?
              </div>
              <div className="collapse-content">
                <p>
                  The referral program in Pendler works by incentivizing both
                  drivers and riders to bring new users to the platform. When a
                  driver refers a new rider to Pendler, they earn a referral
                  bonus of 1% from the rider&apos;s earnings. Similarly, when a
                  rider refers a new driver to Pendler, they also earn a
                  referral bonus of 1% from the driver&apos;s earnings. This
                  creates a mutually beneficial system where both drivers and
                  riders are rewarded for promoting Pendler and helping to grow
                  the community.
                </p>
              </div>
            </div>
          </Slide>
          <Slide direction="right">
            <div
              tabIndex={0}
              className="collapse collapse-arrow border border-base-300 bg-base-200"
            >
              <div className="collapse-title text-xl font-medium">
                8. How can I book a ride on Pendler?
              </div>
              <div className="collapse-content">
                <p>
                  Pendler is coming soon to Hyderabad so stay tuned for the
                  official launch and be among the first to enjoy the benefits of
                  our innovative ride-sharing platform. Sign up for updates and
                  be part of the Pendler community as we change the way you shuttle.
                </p>
              </div>
            </div>
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
