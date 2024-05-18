import React from "react"
import Card from "./Card"

const Projects = () => {
  const cardData = [
    {
      id: 1,
      title: "E-Commerce Websites",
      content: "Thousands of Html, Next js themes",
    },
    {
      id: 2,
      title: "E-Commerce Websites",
      content: "Thousands of Html, Next js themes",
    },
    {
      id: 3,
      title: "E-Commerce Websites",
      content: "Thousands of Html, Next js themes",
    },
    {
      id: 4,
      title: "E-Commerce Websites",
      content: "Thousands of Html, Next js themes",
    },
  ]

  return (
    <div className="mt-[130px]">
      <div className="flex items-center justify-center flex-col">
        <p className="text-[51.3px] font-extrabold  ">Projects</p>
        <p className="text-[19px]   ">Some random Stuff</p>
      </div>
      <div className="flex items-center justify-center flex-wrap">
        {cardData.map((card) => (
          <Card key={card.id} title={card.title} content={card.content} />
        ))}
      </div>
    </div>
  )
}

export default Projects
