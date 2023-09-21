import "./VideoPlayer.css"

const VideoPlayer = () => {
    return (
        <div className="video-responsive">
            <iframe
            width="610"
            height="345"
            src="https://www.youtube.com/embed/tNGx-lF4C-8"
            title="YouTube video player"
            frameBorder="5"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
    );
};

export default VideoPlayer;