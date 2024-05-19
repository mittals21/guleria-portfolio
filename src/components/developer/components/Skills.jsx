import React from "react"
import skill from "../../../assets/skill.png"

const Skills = () => { 
  const skillLeft = [skill, skill, skill, skill, skill]
  const skillRight = [skill, skill, skill, skill, skill]

  return (
    <div className="grid grid-flow-col gap-[40px] px-40">
      <div className="flex items-center justify-center gap-5 flex-wrap">
        {skillLeft?.map((s, index) => (
          <img className="h-[120px] " src={s} key={index} alt="" />
        ))}
      </div>
      <div className="flex justify-center items-center flex-col ">
        <p className="text-[51.3px] font-extrabold text-center ">Skills</p>
        <p className="text-[19px] font-normal text-center">
          Some random Stuff and 
        </p>
      </div>
      <div className="flex items-center justify-center gap-5 flex-wrap">
        {skillRight?.map((s, index) => (
          <img className="h-[120px]" src={s} key={index} alt="" />
        ))}
      </div>
    </div>
  )
}

export default Skills
