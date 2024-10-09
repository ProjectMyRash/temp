import React from "react";

const SendMsgForm = () => {
  return (
    <div className="card row-10">
      <h3 className="card-title text-center bg-dark text-light p-2" style={{ border: "2px solid #000", borderRadius: "10px" }}>
        <b>Send Us a Message</b>
      </h3>
      <div className="card-body p-4" style={{ border: "3px solid #000", borderRadius: "10px" }}>
        <form>
          <div className="form-floating mb-4">
            <input
              type="text"
              className="form-control border-black"
              id="name"
              placeholder="Your Name"
            />
            <label htmlFor="name" className="text-dark">Your Name</label>
          </div>

          <div className="form-floating mb-4">
            <input
              type="password"
              className="form-control border-black"
              id="password"
              placeholder="Enter Password"
            />
            <label htmlFor="password" className="text-dark">Enter Password</label>
          </div>

          <div className="form-floating mb-4">
            <input
              type="email"
              className="form-control border-black"
              id="email"
              placeholder="Enter Your Email"
            />
            <label htmlFor="email" className="text-dark">Enter Your Email</label>
          </div>

          <div className="form-floating mb-4">
            <input
              type="text"
              className="form-control border-black"
              id="subject"
              placeholder="Enter Subject"
            />
            <label htmlFor="subject" className="text-dark">Enter Subject in brief</label>
          </div>

          <div className="form-floating mb-4">
            <textarea
              className="form-control border-black"
              placeholder="Leave a comment here"
              id="comments"
              style={{ height: "175px" }}
            ></textarea>
            <label htmlFor="comments">Comments</label>
          </div>

          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-md btn-outline-primary">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SendMsgForm