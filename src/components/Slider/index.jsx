import React from "react";
import ReactSlidy from "react-slidy";
import image1 from "../../img/1.png";
import image2 from "../../img/2.png";
import image3 from "../../img/3.png";
import image4 from "../../img/4.png";
import image45 from "../../img/4.5.png";
import image5 from "../../img/5.jpg";
import image6 from "../../img/6.jpg";
import image7 from "../../img/7.jpg";
import image8 from "../../img/8.jpg";
import image9 from "../../img/9.jpg";
import "react-slidy/lib/styles.css";
import "./Slider.styles.css";

function Slider() {
  return (
    <div className="slider-container">
      <ReactSlidy
        itemsToPreload={10}
        infiniteLoop
        slidespeed={1200}
        keyboardNavigation={true}
        navigateByKeyboard={true}
      >
        <img
          src={image1}
          style={{ maxWidth: "80%", maxHeight: "80vh" }}
          alt="slider-bi1"
        />
        <img
          src={image2}
          style={{ maxWidth: "80%", maxHeight: "80vh" }}
          alt="slider-bi2"
        />
        <img
          src={image3}
          style={{ maxWidth: "80%", maxHeight: "80vh" }}
          alt="slider-bi3"
        />
        <img
          src={image4}
          style={{ maxWidth: "80%", maxHeight: "80vh" }}
          alt="slider-bi4"
        />
        <img
          src={image45}
          style={{ maxWidth: "80%", maxHeight: "80vh" }}
          alt="slider-bi4.5"
        />
        <img
          src={image5}
          style={{ maxWidth: "80%", maxHeight: "80vh" }}
          alt="slider-bi5"
        />
        <img
          src={image6}
          style={{ maxWidth: "80%", maxHeight: "80vh" }}
          alt="slider-bi6"
        />
        <img
          src={image7}
          style={{ maxWidth: "80%", maxHeight: "80vh" }}
          alt="slider-bi7"
        />
        <img
          src={image8}
          style={{ maxWidth: "80%", maxHeight: "80vh" }}
          alt="slider-bi8"
        />
        <img
          src={image9}
          style={{ maxWidth: "80%", maxHeight: "80vh" }}
          alt="slider-bi9"
        />
      </ReactSlidy>
      <p className="slider-text">Use arrow keys to navigate between slides</p>
    </div>
  );
}

export default Slider;
