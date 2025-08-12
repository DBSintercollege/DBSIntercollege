import React from "react";

const Video = () => {
  // Example video sources
  const youtubeLink = "https://www.youtube.com/embed/aAsn34JOG30"; // Replace with your YouTube video
  const localVideo = "/sample-video.mp4"; // Place your video in public folder

  return (
    <section className="w-full px-4 py-30 bg-gray-100">
      <h2 className="text-2xl font-bold text-center mb-6">Our Videos</h2>

      {/* YouTube Video */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-2">YouTube Video</h3>
        <div className="relative w-full overflow-hidden rounded-lg" style={{ paddingTop: "56.25%" }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={youtubeLink}
            title="YouTube Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Local Video */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Local Video</h3>
        <video
          className="w-full rounded-lg"
          src="./src/assets/video.mp4"
          controls
          playsInline
        />
      </div>
    </section>
  );
};

export default Video;
