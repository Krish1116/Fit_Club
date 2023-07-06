import React from "react";
import "./Testimonials.css";
import { testimonialsData } from "../../data/testimonialsData";
import { useState } from "react";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";
import { motion } from "framer-motion";

const Testimonials = () => {
  const [selected, setSelected] = useState(0);
  const tLength = testimonialsData.length;
  const transition = { type: "spring", duration: 3 };

  const leftHandler = () => {
    if (selected === 0) {
      setSelected(tLength - 1);
    } else {
      setSelected((prev) => prev - 1);
    }
  };

  const rigthHandler = () => {
    if (selected === tLength - 1) {
      setSelected(0);
    } else {
      setSelected((prev) => prev + 1);
    }
  };
  return (
    <div className="testimonials" id="testimonials">
      <div className="left-t">
        <span>Testimonials</span>
        <span className="stroke-text">What they</span>
        <span>say about us</span>
        <motion.span
          key={selected}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={transition}
        >
          {testimonialsData[selected].review}
        </motion.span>
        <span>
          <span style={{ color: "#ef8282" }}>
            {testimonialsData[selected].name}
          </span>{" "}
          -<span>{testimonialsData[selected].status}</span>
        </span>
      </div>

      <div className="rigth-t">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>
        <motion.img
          src={testimonialsData[selected].image}
          key={selected}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={transition}
          alt=""
        />
        <div className="arrows">
          <img src={leftArrow} alt="" onClick={leftHandler} />
          <img src={rightArrow} alt="" onClick={rigthHandler} />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
