import React from "react";
import ImgSlider from "../Components/ImgSlider";
import Carousel from "../Components/Carousel";
import ReverseImgSlider from "../Components/ReverseImgSlider";
import Offer1 from "../Images/Offer1.jpg";
import Offer2 from "../Images/Offer2.jpg";
import Offer3 from "../Images/Offer3.jpg";
import sliderImg from "../Images/cafeImg.jpg";
import reverseSliderImg from "../Images/cafeImg.jpg";

function HomePage() {
  const imgSliderHeading = "Welcome to Myrash Cafe";
  const imgSliderText = `At MyRash Cafe, we invite you to embark on a delightful culinary journey that celebrates the joy of good food and great company. From the moment you step through our doors, you'll be embraced by a warm and inviting atmosphere designed to make you feel right at home.

Our cafe is more than just a place to grab a bite—it's a community hub where friends and families gather to create lasting memories. We take pride in serving a diverse menu that features a delightful array of dishes, each crafted with the freshest ingredients and a sprinkle of love. Whether you’re in the mood for a comforting cup of coffee, a mouthwatering meal, or a decadent dessert, we have something to satisfy every palate.

Join us for breakfast, lunch, or dinner, and let our friendly staff take care of you as you relax and unwind. At MyRash Cafe, we are committed to providing an exceptional dining experience that will leave you eager to return. We can't wait to serve you!`;

  const aboutSilderText = `Welcome to MyRash Cafe, your go-to destination for delicious food and exceptional service! Founded with a passion for culinary excellence, our cafe aims to bring together a diverse menu that caters to all tastes and preferences.

Our team is dedicated to creating a unique dining experience by offering a variety of freshly prepared dishes made from locally sourced ingredients. From savory snacks to indulgent desserts, we have something for everyone.

At MyRash Cafe, we also believe in fostering a community spirit. We strive to provide a welcoming environment where friends and family can gather to enjoy good food and great company.

Come visit us today, and let us make your day a little brighter with our delicious offerings!`;

  const reverseImgSliderHeading = "About Us";

  return (
    <>
      <ImgSlider
        img={sliderImg}
        heading={imgSliderHeading}
        text={imgSliderText}
      />
      <Carousel img1={Offer1} img2={Offer2} img3={Offer3} />
      <ReverseImgSlider
        img={reverseSliderImg}
        heading={reverseImgSliderHeading}
        text={aboutSilderText}
      />
    </>
  );
}

export default HomePage;
