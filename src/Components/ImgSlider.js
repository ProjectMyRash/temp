import React from "react";
import "../CSS/imgslider.css";

function ImgSlider(props) {
  return (
    <div>
      <main className="h-100">
        <section className="row g-0">
          <div className="col-md-8">
            <img src={props.img} alt="Myrash" className="img-fluid img-bg" />
          </div>
          <div className="col-12 col-md-4  d-flex align-items-center cl-cream">
            <div className="p-4 text-center text-md-start">
              <h4>{props.heading}</h4>
              <p>{props.text}</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ImgSlider;