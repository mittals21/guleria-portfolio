import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import image from "../../../assets/images.jpeg"

const SliderTop = () => {
  var settings = {
    dots: false,
    infinite: true,
    // speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    // autoplaySpeed: 2000,
    speed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          // infinite: true,
          // dots: true
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          // initialSlide: 2
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  const slideImg = [image, image, image, image, image, image, image, image]

  return (
    <div className=" bg-gradient-to-r from-[#1861D9] to-[#28C0EF] py-4 my-[145px]">
      <Slider {...settings}>
        {slideImg?.map((img, index) => (
          <img className="h-[150px] px-1.5" src={img} key={index} alt="" />
        ))}
      </Slider>
    </div>
  )
}

export default SliderTop
