import VideoPlayer from "./VideoPlayer";

const VideoSection = () => {
  return (
    <div className="bg-slate-900">
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center lg:h-screen py-7 px-4 lg:p-0 gap-6 max-w-6xl mx-auto">
        <div>
          <h1 className="text-5xl font-bold mb-3 text-white">
            See Pendler in <br /> Action
          </h1>
          <hr className="h-2.5 w-36 bg-primary mb-12" />
          <p className="text-2xl break-words mb-5 text-base-300 font-normal">
            Watch videos showcasing Pendler&apos;s features, user testimonials,
            and the positive impact we&apos;re making in the ridesharing
            industry.
          </p>
        </div>
        <div className="mt-7 lg:mt-0">
          <VideoPlayer></VideoPlayer>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
