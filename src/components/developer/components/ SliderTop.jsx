import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image from "../../../assets/images.jpeg"

const SliderTop = () => {


  var settings = {

    infinite: true,
    speed: 3000,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    // autoplaySpeed: 0,
    pauseOnHover: true
  };

  const slideImg = [
    image,
    image,
    image,
    image,
    image,
    image,
    image,
    image
  ]

  return (
    <div className="bg-gradient-to-r from-[#1861D9] to-[#28C0EF] p-5 my-[145px]">

        <Slider {...settings}>
        {slideImg?.map((img, index) => (
          
          <img className="h-[150px] p-3 " src={img} key={index} alt=""  />
        
      ))}
        </Slider>
      
    </div>
  )
}

export default SliderTop
