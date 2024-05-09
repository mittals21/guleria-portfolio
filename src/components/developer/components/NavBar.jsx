import React from "react"
import Logo from "../../../assets/OIG 1 (1).svg"

const NavBar = () => {
  return (
    <div className="flex justify-evenly items-center gap-20 mt-[64px]">
      <div className="flex justify-center bg-black w-[168px] h-[45px] rounded-[30px]">
        <img src={Logo} alt="" />
      </div>
      <div className="flex justify-center items-center gap-[54px] text-[15.38px] font-normal ">
        <button>About Me</button>
        <button>Skills</button>
        <button>Projects</button>
        <button>Experience</button>
      </div>
      <div className="flex justify-center gap-4">
        <button className="flex justify-center items-center border-[2px] border-[#D4E6FF] bg-[#D4E6FF] rounded-[8px] py-[14px] px-[28px] w-[142px] h-[41px] text-[13.25px] font-semibold text-[#0568FD]">
          Contact Me
        </button>
        <button className="flex justify-center items-center border-[2px] border-[#0568FD] bg-[#0568FD] rounded-[8px] py-[14px] px-[27px] w-[142px] h-[41px] text-[13.25px] text-[#FFFFFF] font-semibold ">
          Resume
        </button>
      </div>
    </div>
  )
}

export default NavBar
