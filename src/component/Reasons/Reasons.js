import React from "react";
import "./Reason.css";
import image1 from "../../assets/img.png";
import image2 from "../../assets/img2.jpg";
import image3 from "../../assets/img3.jpg";
import image4 from "../../assets/img4.jpg";
// import tick from "../../assets/tick.png";
import { TiTickOutline } from "react-icons/ti";
import tick from "../../assets/tick1.jpg";
import nb from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";

const Reasons = () => {
  return (
    <div className="Resons">
      <div className="left-r">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image4} alt="" />
        <img src={image3} alt="" />
      </div>
      <div className="right-r" id="resons">
        <span>Some Reasons </span>
        <div>
          <span className="stroke-text">why</span>
          <span> choose us?</span>
        </div>

        <div className="details-r">
          <div>
            {/* <img src={tick} alt=""></img> */}
            <TiTickOutline className="icon" />
            <span>over 140+ expert coaches</span>
          </div>
          <div>
            {/* <img src={tick} alt="" /> */}
            <TiTickOutline className="icon" />
            <span>train smater and faster than before</span>
          </div>
          <div>
            {/* <img src={tick} alt="" /> */}
            <TiTickOutline className="icon" />
            <span>1 free program for new member</span>
          </div>
          <div>
            {/* <img src={tick} alt="" /> */}
            <TiTickOutline className="icon" />
            <span>reliable partners</span>
          </div>
        </div>
        <span>our partners</span>
        <div className="patners">
          <img src={nb} alt="" />
          <img src={adidas} alt="" />
          <img src={nike} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Reasons;
