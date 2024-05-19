import React from "react"
import { FaGithub } from "react-icons/fa"
import user from "../../../assets/user.svg"
import mail from "../../../assets/mail.svg"
import message from "../../../assets/message-2.svg"
import linkedin from "../../../assets/linkedin.svg"
import twitter from "../../../assets/twitter.svg"
import youtube from "../../../assets/youtube.svg"
import { Link } from "react-router-dom"
import stroke from "../../../assets/underline-small.svg.svg"
const Footer = () => {
  const links = [
    { title: "LinkedIn", link: "https://www.linkedin.com/", image: linkedin },
    { title: "Twitter", link: "https://www.twitter.com/", image: twitter },
    { title: "Github", link: "https://www.github.com/", image: <FaGithub /> },
    { title: "Youtube", link: "https://www.youtube.com/", image: youtube },
  ]

  return (
    <div className="flex flex-col lg:flex-row mt-[100px] font-ibm justify-evenly items-center bg-[#292524] w-full py-10 lg:py-20 border-[2px] border-[#292524] rounded-t-[14px] gap-[50px] lg:gap-[100px]">
      <div className="text-white px-[125px]">
        <p className="text-[51.3px] font-extrabold font-sora ">Contact Us</p>
        <p className="text-[19px] font-normal relative">
          Join 60k+ designers who read the UX Tools weekly newsletter. Improve your skills
          and stay ahead of industry trends and changes in 5 minutes a week.
          <img src={stroke} alt="" className="w-[31px] absolute left-10 top-6" />

        </p>
        <div className="flex items-center gap-8 mt-[33px]">
          {links.map((l, index) => (
            <div className="flex items-center gap-2">
              {l.title === "Github" ? l.image : <img src={l.image} alt="" />}
              <Link to={l.link}>{l.title}</Link>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-[20px] mr-[90px]">
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
