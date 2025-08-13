import React from "react";
import "./Video.css";
import VideoBanner from "/videos/Services.mp4";
const Video = () => {
  return (
    <>
      <div className="carousel-inner" id="Banner">
        <div className="carousel-item active ">
          <div className="Banner-caption text-center ">
            <h2 className="display-5" style={{ color: "var(--color-bg)" }}>
              “Diiktiraf secara klinikal dan berdaftar dengan Persatuan
              Prostetik dan Ortotik Antarabangsa (ISPO), IAAT, IPA serta Majlis
              Pemulihan India (RCI).”
            </h2>
          </div>

          <video className="slideBanner" autoPlay loop muted playsInline>
            <source src={VideoBanner} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </>
  );
};

export default Video;
