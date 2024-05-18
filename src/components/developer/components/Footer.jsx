import React from "react"
import { FaGithub } from "react-icons/fa"
import user from "../../../assets/user.svg"
import mail from "../../../assets/mail.svg"
import message from "../../../assets/message-2.svg"
import linkedin from "../../../assets/linkedin.svg"
import twitter from "../../../assets/twitter.svg"
import youtube from "../../../assets/youtube.svg"
const Footer = () => {
  return (
    <div className="flex font-ibm justify-evenly items-center bg-black w-full h-[400px] border-[2px] border-[#292524] rounded-[14px] gap-[100px]">
      <div className="text-white px-[125px]">
        <p className="text-[51.3px] font-extrabold font-sora ">Contact Us</p>
        <p className="text-[19px] font-normal ">
          Join 60k+ designers who read the UX Tools weekly newsletter. Improve
          your skills and stay ahead of industry trends and changes in 5 minutes
          a week.
        </p>
        <div className="flex items-center gap-8 mt-[33px]">
          <div className="flex items-center gap-2">
            <img src={linkedin} alt="" />
            <a href="https://www.linkedin.com/">LinkedIn</a>
          </div>
          <div className="flex items-center gap-2">
            <img src={twitter} alt="" />
            <a href="https://twitter.com/">Twitter</a>
          </div>
          <div className="flex items-center gap-2">
            <FaGithub />
            <a href="https://www.github.com">GitHub</a>
          </div>
          <div className="flex items-center justify-center gap-2">
            <img src={youtube} alt="" className="h-[20px]" />
            <a href="https://www.youtube.com/">Youtube</a>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-black gap-[20px] mr-[90px]">
        <div className="flex bg-white items-center gap-2 rounded-[5px] px-[17px] ">
          <img src={user} alt="" />
          <input
            type="text"
            placeholder="Name"
            className="border-[2px] border-white py-[5px] w-[400px] outline-none"
          />
        </div>

        <div className="flex bg-white items-center gap-2 rounded-[5px] px-[17px]">
          <img src={mail} alt="" className="h-[20px]" />
          <input 
            type="text"
            placeholder="Email"
            className="border-[2px] border-white  py-[5px] w-[400px] outline-none"
          />
        </div>
        <div className="flex bg-white items-start gap-2 py-[11px] rounded-[5px] px-[17px]">
          <img src={message} alt="" />
          <textarea
            placeholder="Message"
            className=" border-[2px] border-white w-[400px] -mt-0.5 outline-none"
          />
        </div>
        <button className=" rounded-[8px] py-[8px] px-[45px] ml-[300px] text-white bg-gradient-to-r from-[#1861D9] to-[#28C0EF] ">
          Subscribe
        </button>
      </div>
    </div>
  )
}

export default Footer
