import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import lines from "../../../assets/lines.svg fill.svg"
import experience from "../../../assets/Exp.svg"
import share from "../../../assets/share.svg"
import comments from "../../../assets/comments.svg"
import sorting from "../../../assets/sorting.svg"
import teams from "../../../assets/teams.svg"
import testing from "../../../assets/testing.svg"

const Experience = () => {
  const sliderData = [
    {
      role: "Role",
      title: "Name of the Industry",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae velit eget diam feugiat dignissim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam vel posuere est.",
      things: [
        { icon: share, thing: "Thing 1" },
        { icon: comments, thing: "Thing 2" },
        { icon: sorting, thing: "Thing 3" },
        { icon: teams, thing: "Thing 4" },
        { icon: testing, thing: "Thing 5" },
      ],
      image: experience,
    },
    {
      role: "Role",
      title: "Name of the Industry",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae velit eget diam feugiat dignissim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam vel posuere est.",
      things: [
        { icon: share, thing: "Thing 1" },
        { icon: comments, thing: "Thing 2" },
        { icon: sorting, thing: "Thing 3" },
        { icon: teams, thing: "Thing 4" },
        { icon: testing, thing: "Thing 5" },
      ],
      image: experience,
    },

    {
      role: "Role",
      title: "Name of the Industry",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae velit eget diam feugiat dignissim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam vel posuere est.",
      things: [
        { icon: share, thing: "Thing 1" },
        { icon: comments, thing: "Thing 2" },
        { icon: sorting, thing: "Thing 3" },
        { icon: teams, thing: "Thing 4" },
        { icon: testing, thing: "Thing 5" },
      ],
      image: experience,
    },
  ]

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className="mt-[100px] py-[50px]" id="Main">
      <div className="flex items-center justify-center flex-col">
        <div className="relative">
          <img
            src={lines}
            alt=""
            className="absolute h-[80px] w-[80px] -top-[30px] -left-[50px] z-30"
          />

          <p className="text-[51.3px] font-extrabold">Experience</p>
        </div>
        <p className="text-[19px]">Some random Stuff</p>
      </div>

      <Slider {...settings} className="bg-[#292524] mt-[50px] py-[35px] rounded-l-[105px] ml-40">
        {sliderData?.map((sd, index) => (
          <div className="makeFlex justify-center items-center gap-[100px]">
            <div className="flex flex-col justify-center items-start gap-[20px]">
              <div className="bg-[#E7FFFE] py-[10px] px-[30px] rounded-[8px] text-[#0B8981]">
                {sd.role}
              </div>
              <div className="font-bold text-[#FFFFFF] text-[29.75px] ">
                {sd.title}
              </div>
              <div className="w-[418px] text-[#FFFFFF] ">{sd.description}</div>
              <div className="grid grid-cols-[auto,auto] justify-center items-center gap-5">
                {sd.things?.map((t) => (
                  <div className="flex justify-center items-center gap-2 text-[#FFFFFF]">
                    <img src={t.icon} alt="" />
                    <p>{t.thing}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img src={experience} alt="" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Experience