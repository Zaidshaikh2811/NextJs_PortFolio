"use client"

import { Description } from "@radix-ui/react-dialog"
import Link from "next/link"
import { BsArrowDownRight } from "react-icons/bs"


const metadata = {
  title: "Services",
  description: "Provided Services",
};


const services = [
  {
    num: "01",
    title: "Web Developer",
    href: "",
    Description: "I'm Zaid, a Full Stack Developer passionate about crafting dynamic, responsive, and efficient web applications with a robust foundation in both front-end and back-end technologies."
  },
  {
    num: "02",
    title: "App Developer",
    href: "",
    Description: "I'm Zaid, a Full Stack App Developer dedicated to creating dynamic, responsive, and efficient mobile and web applications with expertise in both front-end and back-end technologies."
  },
]
import { motion } from "framer-motion"


const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className=" container mx-auto">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]
          ">
          {services.map((data, index) => {
            return <div key={index} className="flex-1 flex flex-col justify-center
            gap-6 group">
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold  text-outline
                text-transparent group-hover:text-outline-hover transition-all 
                duration-500">{data.num}</div>
                <Link className="w-[70px] h-[70px] rounded-full 
                bg-white group-hover:bg-accent transition-all duration-500
                flex justify-center items-center hover:-rotate-45"  href={data.href}>
                  <BsArrowDownRight className="text-primary text-3xl"></BsArrowDownRight>
                </Link>
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white 
              group-hover:text-accent  transition-all duration-500">{data.title}</h2>
              <p className="text-white/60">{data.Description}</p>
              <div className="border-b border-white/20 w-full"></div>
            </div>
          })}

        </motion.div>
      </div>
    </section>
  )
}

export default Services
