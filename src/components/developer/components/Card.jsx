import React from "react"

const Card = ({title, content}) => {
  return (
    <div>
      <div className="flex flex-col mx-[20px] my-[20px] bg-[#F4F7FE] rounded-[14px] w-[350px] h-[400px] p-[20px] relative  hover:bg-gradient-to-r from-[#1861D9] to-[#28C0EF] hover:text-white ">
        <div className="flex flex-col items-center">
          <p className="text-[27px] font-bold leading-[37.2px]  ">{title}</p>
          <p className="text-[13.83px] font-medium ">{content}</p>
          <div className="flex items-center gap-[19.64px] ">
            <p className="text-[#0982AE] text-[16px] font-semibold ">Newest</p>
            <p className="text-[#0982AE] text-[16px] font-semibold  ">View</p>
          </div>
        </div>
        <div
          className="flex justify-center bg-[#C4C4C4] absolute bottom-0 w-[300px] h-[160px] cursor-pointer rounded-t-[10px] shadow-black
        shadow-xl  hover:h-[230px] hover:transition-all ease-linear duration-200"
        >
          <div className="bg-[#7E6363] border-[3px] rounded-full w-[65px] h-[65px] absolute -top-8"></div>
        </div>
      </div>
    </div>
  )
}

export default Card
