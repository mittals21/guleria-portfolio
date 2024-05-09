import React from "react"
import SkillsImg from "../../../assets/hcjnav.png.svg"

const Skills = () => {
  return (
    <div className="flex justify-center items-center mx-[164px] ">
      <img src={SkillsImg} alt="" className="w-[540px] h-[360px] "/>
      <div className="flex justify-center items-center flex-col ">
        <p className="text-[51.3px] font-extrabold h-[65px] w-[373.31px] text-center ">Skills</p>
        <p className="text-[19px] font-normal mt-3 text center">Some random Stuff and</p>
      </div>
      <img src={SkillsImg} alt="" className="w-[540px] h-[360px] "/>
    </div>
  )
}

export default Skills
