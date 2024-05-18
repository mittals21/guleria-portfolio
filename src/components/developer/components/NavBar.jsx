import React from "react"
import Logo from "../../../assets/OIG 1 (1).svg"

const NavBar = () => {
  return (
    <div className="flex justify-evenly items-center mt-[47px]">
      <div className="flex items-center">
        <div className="flex justify-center bg-[#1B232E] px-[61px] rounded-[30px]">
          <img
            src={Logo}
            style={{ objectFit: "cover" }}
            className="h-[45px] w-[47px]"
            alt=""
          />
        </div>
        <button className="border-[2px] invisible border-[#0568FD] bg-[#0568FD] rounded-[8px] w-[142px] h-[41px] text-[13.25px] text-[#FFFFFF] font-semibold ">
          Resume
        </button>
      </div>
      <ul className="flex -ml-10 items-center gap-[54px] text-[15.5px]">
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Experience</li>
      </ul>
      <div className="flex items-center gap-4">
        <button className="border-[2px] border-[#D4E6FF] bg-[#D4E6FF] rounded-[8px] w-[142px] h-[41px] text-[13.25px] font-semibold text-[#0568FD]">
          Contact Me
        </button>
        <button className="border-[2px] border-[#0568FD] bg-[#0568FD] rounded-[8px] w-[142px] h-[41px] text-[13.25px] text-[#FFFFFF] font-semibold ">
          Resume
        </button>
      </div>
    </div>
  )
}

export default NavBar
