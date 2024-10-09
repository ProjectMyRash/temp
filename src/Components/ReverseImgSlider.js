import React from "react";
import "../CSS/reverseimgslider.css";

function ReverseImgSlider(props) {
  return (
    <div>
      <section className="row g-0 text-bg-dark">
        <div className="col-12 col-md-4 about-text text-center d-flex align-items-center">
          <div className="p-4 text-center justify-self-center text-md-start p-2">
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
          </div>
        </div>
        <div className="col-md-8">
          <img src={props.img} alt="About US" className="img-fluid img-bg" />
        </div>
      </section>
    </div>
  );
}

export default ReverseImgSlider;