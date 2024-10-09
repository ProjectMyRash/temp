import React from 'react';

const ValuesSection = () => {
  return (
    <section className="bg-light py-8">
      <div className="container">
        <h2 className="text-center mb-4"><b>Our Values</b></h2>
        <div className="row text-center">
          <div className="col-md-4">
            <div className="p-4">
              <i className="bi bi-heart-fill fs-1 text-primary"></i>
              <h4>Integrity</h4>
              <p>We believe in doing what is right and uphold the highest standards of integrity in all our actions.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4">
              <i className="bi bi-lightbulb-fill fs-1 text-primary"></i>
              <h4>Innovation</h4>
              <p>We foster a culture of innovation, constantly seeking better solutions for our customers and our company.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4">
              <i className="bi bi-people-fill fs-1 text-primary"></i>
              <h4>Teamwork</h4>
              <p>Collaboration is at the heart of everything we do. We work together, across boundaries, to meet the needs of our customers.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;