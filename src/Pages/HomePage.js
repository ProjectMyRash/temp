import React from 'react';
import ImgSlider from '../Components/ImgSlider';
import Carousel from '../Components/Carousel';
import ReverseImgSlider from '../Components/ReverseImgSlider';
import Offer1 from "../Images/Offer1.jpg";
import Offer2 from "../Images/Offer2.jpg";
import Offer3 from "../Images/Offer3.jpg";
import sliderImg from "../Images/cafeImg.jpg";
import reverseSliderImg from "../Images/cafeImg.jpg";

function HomePage() {
  
    const imgSliderHeading = "Welcome to Myrash Cafe";
    const imgSliderText = `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Explicabo neque ducimus odit incidunt consequatur, dolore
                quibusdam beatae impedit facere unde. Nemo laboriosam illo
                atque, voluptate iusto facere ipsum eius amet veniam ratione
                tenetur aut? Nisi minus neque ab aliquam iure in voluptas quam
                odio ullam?`;

  const reverseImgSliderHeading = "About Us";

  return (
    <>
      <ImgSlider img={sliderImg} heading={imgSliderHeading} text={imgSliderText} />
      <Carousel img1={Offer1} img2={Offer2} img3={Offer3} />
      <ReverseImgSlider
        img={reverseSliderImg}
        heading={reverseImgSliderHeading}
        text={imgSliderText}
      />
    </>
  )
}

export default HomePage
