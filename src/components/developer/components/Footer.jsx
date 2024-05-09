import React from "react"

const Footer = () => {
  return (
    <div className="flex justify-evenly items-center bg-black w-full h-[534px] border-[2px] border-[#292524] rounded-[14px] gap-[100px]">
      <div className="text-white">
        <p className="text-[51.3px] font-extrabold ">Contact Us</p>
        <p className="text-[19px] font-normal w-[655px] ">
          Join 60k+ designers who read the UX Tools weekly newsletter. Improve
          your skills and stay ahead of industry trends and changes in 5 minutes
          a week.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center bg-black gap-8 mr-[90px]">
        <input
          type="text"
          placeholder="Name"
          className="border-[2px] border-white rounded-[5px] w-[400px] h-[45px] "
        />
        <input
          type="text"
          placeholder="Email"
          className="border-[2px] border-white rounded-[5px] w-[400px] h-[45px] "
        />
        <input
          type="text"
          placeholder="Message"
          className=" border-[2px] border-white rounded-[5px] w-[400px] h-[120px]"
        />
        <button className="border-white border-[2px] text-white ">
          Subscribe
        </button>
      </div>
    </div>
  )
}

export default Footer
