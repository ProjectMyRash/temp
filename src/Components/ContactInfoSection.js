import React from "react";

const ContactInfoSection = () => {
  return (
    <div className="card mb-5" style={{ border: "3px solid #000", borderRadius: "10px" }}>
      <div className="card-body">
        <h2 className="card-title text-center"><b>Contact Information</b></h2>
        <div className="row text-center">
          <div className="col-md-4 p-4">
            <p><strong><h5>Contact</h5></strong></p>
            <p>+91 1234567891</p>
          </div>
          <div className="col-md-4 p-4">
            <p><strong><h5>Email</h5></strong></p>
            <p><a href="mailto:myrashcafe999@gmail.com">myrashproject@gmail.com</a></p>
          </div>
          <div className="col-md-4 p-4">
            <p><strong><h5>Address</h5></strong></p>
            <p>Udhna Citizen College,<br /> Udhna, Surat 394210</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoSection;