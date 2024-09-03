import React from "react";
import "./VedioSection.css";
import videoSource from "../../Assets/images/vedio.mp4";

const VedioSection = () => {
  return (
    <div className="vediosection">
      <video width="100%" height="auto" autoPlay loop muted>
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VedioSection;
