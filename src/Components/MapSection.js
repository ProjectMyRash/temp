import React from 'react';

function MapSection() {
    return (
        <section className="py-5">
            <div className="container">
                <h3 className="text-center mb-5"><b>Find Us on Map</b></h3>
                <div className="text-center">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345098516!2d144.9537363153168!3d-37.81627997975198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f1e5dcb%3A0x5045675218ceed63!2sMyrash%20Caf%C3%A9!5e0!3m2!1sen!2sau!4v1618375886153!5m2!1sen!2sau" 
                        width="60%" 
                        height="300"
                        title='Map' 
                        style={{ border: '10 solid black' }} 
                        allowFullScreen 
                        loading="eager">
                    </iframe>
                </div>
            </div>
        </section>
    );
}

export default MapSection;
