"use client";

import { motion } from "framer-motion"
import React, { useState } from "react";
import WorkSLiderBtn from "@/components/WorkSLiderBtn"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"

import { BsArrowUpRight, BsGithub } from "react-icons/bs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: '01',
    category: "Full Stack",
    title: "JobBoard",
    description: "JobBoard is a full-stack job portal built with Next.js, allowing candidates to apply for jobs and recruiters to manage listings. It uses MongoDB and Supabase for real-time data handling, integrates Stripe for subscription payments, and Clerk for secure authentication. The platform features a responsive UI built with Tailwind CSS, optimized for performance and SEO.",
    stack: [{ name: "Next.js" }, { name: "MongoDB" }, { name: "Supabase" }, { name: "Clerk" }, { name: "Stripe" }, { name: "React" }, { name: "Tailwind CSS" }],
    image: "https://res.cloudinary.com/dhyczd7jv/image/upload/v1729409259/qfe1nj6pt9zlwqckmlx1.png",
    live: "https://eclectic-kleicha-4b0968.netlify.app/",
    github: "https://github.com/Zaidshaikh2811/JobBoard"

  },
  {
    num: '01',
    category: "React Native App",
    title: "Expense Tracker",
    description: "Expense Tracker is a React Native app designed to help users efficiently manage their finances. The app allows users to create custom categories, set budgets, and track expenses. It uses Kinde for secure user authentication, ensuring that personal financial data is protected. With a user-friendly interface, the app provides a seamless experience for monitoring spending habits and staying within budget.",
    stack: [{ name: "React Native" }, { name: "Supabase" }, { name: "Kinde" }, { name: "Tailwind CSS" }],
    image: "https://res.cloudinary.com/dhyczd7jv/image/upload/v1729410536/s6kbj6quswuv1tbn0bfh.jpg",
    live: "https://eclectic-kleicha-4b0968.netlify.app/",
    github: "https://github.com/Zaidshaikh2811/ExpenseTracker"

  },
  {
    num: '01',
    category: "Full Stack",
    title: "EcoHarvest",
    description: "EcoHarvest is an innovative tool designed to empower farmers by providing precise fertilizer recommendations, accurate crop predictions, and early disease detection using advanced machine learning techniques. By leveraging soil NPK values and environmental data, EcoHarvest optimizes agricultural productivity and sustainability",
    stack: [{ name: "React" }, { name: "CSS " }, { name: "Redux" }],
    image: "https://res.cloudinary.com/dhyczd7jv/image/upload/v1717176822/Screenshot_2024-05-31_225628_ie5xsn.png",
    live: "https://silly-crepe-f44fe9.netlify.app/",
    github: "https://github.com/Zaidshaikh2811/EcoHarvest"

  },
  {
    num: '02',
    category: "Full Stack",
    title: "AirBnc",
    description: "A Full Stack Booking App ",
    stack: [{ name: "React" }, { name: "CSS " }, { name: "JavaScirpt" }, { name: "NodeJS" }, { name: "MongoDB" }]
    , image: "https://res.cloudinary.com/dhyczd7jv/image/upload/v1717179454/Screenshot_2024-05-31_234613_p2av1r.png",
    live: "",
    github: "https://github.com/Zaidshaikh2811/AirBnc"

  },
  {
    num: '03',
    category: "Full Stack",
    title: "Social Community App",
    description: "A full Stack Social App for User's to Share their Thoughts and put Their Comments",
    stack: [{ name: "NextJS" }, { name: "Tailwind" }, { name: "NodeJS" }, { name: "MongoDB" }]
    , image: "/portfolio/public/next.svg",
    live: "",
    github: "https://github.com/Zaidshaikh2811/Social-Community"

  },
  {
    num: '04',
    category: "frontend",
    title: "Comfy Sloth",
    description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus totam, enim optio magnam pariatur alias vitae qui. Nihil, sunt ducimus?",
    stack: [{ name: "React" }, { name: "CSS " }, { name: "Redux" }]
    , image: "/portfolio/public/next.svg",
    live: "",
    github: "https://github.com/Zaidshaikh2811/Comfy-Sloth"

  },
  {
    num: '05',
    category: "frontend",
    title: "React-Cocktail",
    description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus totam, enim optio magnam pariatur alias vitae qui. Nihil, sunt ducimus?",
    stack: [{ name: "React" }, { name: "CSS " }, { name: "Redux" }]
    , image: "/portfolio/public/next.svg",
    live: "",
    github: "https://github.com/Zaidshaikh2811/React-Cocktail"

  },
]


const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: any) => {
    const currIndex = swiper.activeIndex;

    setProject(projects[currIndex])
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{
      opacity: 1, transition: {
        delay: 2.4, duration: 0.4,
        ease: "easeInOut"
      }
    }} className="
    min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px] h-[50%]" >
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col 
          xl:justify-between order-2 xl:order-none ">
            <div className="flex flex-col gap-[30px] ">

              <div className="text-8xl leading-none font-extrabold text-transparent
            text-outline ">

                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category} Project</h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex flex-wrap gap-4">
                {
                  project.stack.map((item, index) => {
                    return <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  })
                }
              </ul>
              <div className=" ">
                <div className="flex items center gap-4">
                  <Link href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full 
                      bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"></BsArrowUpRight>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live Project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                  <Link href={project.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full 
                      bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent"></BsGithub>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github Repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>

                </div>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}>{
                projects.map((project, index) => {
                  return (<SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center
                    bg-pink-50/20">

                      <div className="absolute top-0 bottom-0 bg-black/10 z-10 w-full h-full">

                      </div>

                      <div className="relative w-full h-[450px]">

                        <Image
                          src={project.image}
                          alt={project.title}
                          layout="fill"  // Fill the container
                          className="object-cover" // Cover the container
                          style={{ borderRadius: '10px' }} // Optional: for rounded corners
                        />
                      </div>
                    </div>
                  </SwiperSlide>)
                })}
              <WorkSLiderBtn containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover 
              text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all" iconsStyles="" />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Work
