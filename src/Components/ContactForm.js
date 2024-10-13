import React from 'react';

function ContactForm() {
    return (
        <section className="bg-light py-8">
            <div className="container">
                <h2 className="text-center mb-4"><b>Fill for Contact Us</b></h2>
                <form>
                    <div className="form-floating mb-4">
                        <input
                            type="text"
                            className="form-control border-black"
                            id="floatingInputName"
                            placeholder="Your Name"
                        />
                        <label htmlFor="floatingInputName" className="text-dark">Your Name</label>
                    </div>

                    <div className="form-floating mb-4">
                        <input
                            type="password"
                            className="form-control border-black"
                            id="floatingInputPassword"
                            placeholder="Enter password"
                        />
                        <label htmlFor="floatingInputPassword" className="text-dark">Enter Password</label>
                    </div>

                    <div className="form-floating mb-4">
                        <input
                            type="email"
                            className="form-control border-black"
                            id="floatingInputEmail"
                            placeholder="Enter Your Email"
                        />
                        <label htmlFor="floatingInputEmail" className="text-dark">Enter Your Email</label>
                    </div>

                    <div className="form-floating mb-4">
                        <input
                            type="text"
                            className="form-control border-black"
                            id="floatingInputSubject"
                            placeholder="Enter Subject in brief"
                        />
                        <label htmlFor="floatingInputSubject" className="text-dark">Enter Subject in brief</label>
                    </div>

                    <div className="form-floating mb-4">
                        <textarea className="form-control border-black" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "175px" }}></textarea>
                        <label htmlFor="floatingTextarea2">Comments</label>
                    </div>

                    <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-md btn-outline-primary">Send Message</button>
                    </div>
                </form>
                <br />
            </div>
        </section>
    );
}

export default ContactForm;
