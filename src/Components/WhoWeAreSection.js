import React from 'react';
import AboutImg from '../Images/aboutUsImage.jpg'

const WhoWeAreSection = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2>Who We Are</h2>
            <p>
              Welcome to Myrash Café, where every cup tells a story and every meal is crafted with love. 
              Nestled in the heart of our community, Myrash Café is more than just a place to grab a bite—it's 
              a warm, inviting space where friends gather, ideas flourish, and delicious experiences are shared.

              At Myrash Café, we are passionate about creating an atmosphere that feels like home. Our team of dedicated 
              baristas and chefs carefully select the finest ingredients to bring you flavorful dishes and aromatic coffees 
              that delight the senses. Whether you're here for a quick coffee, a leisurely brunch, or an afternoon treat, 
              we strive to make every visit a memorable one.

              We believe in sustainability, quality, and connection. That’s why we source locally whenever possible, 
              support small businesses, and aim to reduce our environmental footprint. Our goal is to nourish not just your 
              body, but also your spirit, through food and fellowship.
            </p>
          </div>
          <div className="col-md-6">
            <img src={AboutImg} className="img-fluid rounded" alt="About us" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;