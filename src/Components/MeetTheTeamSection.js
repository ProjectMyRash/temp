import React from 'react';
import chef1 from '../Images/chef1.jpg'
import chef2 from '../Images/chef2.jpg'
import chef3 from '../Images/chef3.jpg'

const MeetTheTeamSection = () => {
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center mb-4"><b>Meet the Team</b></h2>
        <div className="row">
          <div className="col-md-4 text-center img-circle">
            <img src={chef1} className="rounded-circle mb-4" alt="Team member" />
            <h5>John Doe</h5>
            <p>CEO</p>
          </div>
          <div className="col-md-4 text-center img-circle">
            <img src={chef2} className="rounded-circle mb-4" alt="Team member" />
            <h5>Jane Smith</h5>
            <p>CTO</p>
          </div>
          <div className="col-md-4 text-center img-circle">
            <img src={chef3} className="rounded-circle mb-4" alt="Team member" />
            <h5>Emily Johnson</h5>
            <p>Head of Marketing</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeamSection;