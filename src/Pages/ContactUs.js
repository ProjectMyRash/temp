import React from "react";
import ContactInfoSection from "../Components/ContactInfoSection";
import SendMsgForm from "../Components/SendMsgForm";
import ContactUsHeader from "../Components/ContactUsHeader";

function ContactUs() {
  return (
    <div className="bg-light">
      <div className="container">
        <div className="container my-3 px-5">
          <div className="container my-3 px-5">
            <div className="container my-3 px-5">
              <div className="container my-3 px-5">
                <ContactUsHeader />
                <ContactInfoSection />
                <SendMsgForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
