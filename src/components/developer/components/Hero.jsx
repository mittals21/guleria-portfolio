import React from "react"

const Hero = () => {
  return (
    <div>
      <div className="flex justify-center items-center flex-col my-[85px] ">
        <div className="text-center">
          <p className="text-[52.17px] font-bold ">
            Hey, I am Abhishek Guleria
          </p>
          <p className="text-[52.17px] font-bold ">
            and I am a <span className="text-[#0568FD]">Frontend Developer</span>
          </p>
        </div>
        <p className="text-[22.69px] font-normal w-[758px] text-center mt-5 p-5">
        I am a third year student pursuing Computer science at Parul University. My interest fields are machine learning, artificial intelligence and Software systems. Which I'm learning through my pursuing course.
        </p>
        <p className="text-center text-[17.69px] font-semibold mt-5 ">Me as a </p>
        <div className="flex justify-center items-center gap-7 mt-6 ">
          
          <button className="flex justify-center items-center border-[2px] border-black rounded-[8px] font-semibold text-[15.13px] px-[26px] py-[15px] w-[192.77px]">Designer</button>
          <button className="border-[2px] border-[#0568FD] bg-[#0568FD] rounded-[8px] py-[15px] px-[26px] text-[15px] text-[#FFFFFF] font-semibold w-[169.39px] ">Developer</button>
        </div>
      </div>
    </div>
  )
}

export default Hero
