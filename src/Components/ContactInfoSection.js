import React from "react";
import contactImg from "../Images/ContactUs.jpg"

const ContactInfoSection = () => {
  return (
        <section className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2>Get in Touch</h2>
                        <p>
                            We'd love to hear from you! At Myrash Café, your feedback and inquiries are important to us. Whether you have questions about our menu, want to share your experience, or need assistance, feel free to reach out. Our friendly team is here to help and ensure that your visit is always enjoyable. Connect with us today!
                        </p><br />
                        <ul>
                            <li><strong>Email:</strong> myrash123@gmail.com</li>
                            <li><strong>Phone:</strong> +91 1234567891</li>
                            <li><strong>Address:</strong> Udhnra Citizen College, Udhna, Surat 394210</li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <img src={contactImg} className="img-fluid rounded" alt="Contact us" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactInfoSection;