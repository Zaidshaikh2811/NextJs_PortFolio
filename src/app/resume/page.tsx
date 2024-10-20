"use client";
import { FaHtml5, FaCss3, FaJs, FaReact } from "react-icons/fa"
import { SiTailwindcss, SiNextdotjs } from "react-icons/si"
import { RiNextjsLine } from "react-icons/ri";

const about = {
  title: "About Me",
  description: "I'm Zaid, a Full Stack App Developer passionate about building dynamic and efficient mobile and web applications.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Mohammad Zaid Shaikh",
    },
    {
      fieldName: "Phone",
      fieldValue: "+91 8356980473",
    },
    {
      fieldName: "Nationality",
      fieldValue: "India",
    },
    {
      fieldName: "Email",
      fieldValue: "zaidshaikh2811@gmail.com",
    },
    {
      fieldName: "FreeLance",
      fieldValue: "Available",
    },

  ]
}

const experience = {
  title: "My Experience",
  description: "I developed a comprehensive Student and Fees Management System using React.js and Tailwind CSS to streamline the administrative processes for a college. The project focuses on efficiently managing student data, tracking fee payments, and generating detailed reports.",


  items: [
    {
      company: "Maulana Azad Polytechnic",
      position: "Front End Developer",
      duration: "AUG 2024",
    }
  ]
}
const education = {
  title: "My Education",
  description: "",
  items: [

    {
      institution: "Orchid College of Engineering Solapur",
      degree: "Bachelor Degree",
      duration: "2025"

    },
    {
      institution: "St.Xaviers High School and Junior College Bhandup ",
      degree: "High School",
      duration: "2021"

    },
    {
      institution: "St.Xaviers High School Airoli ",
      degree: "School",
      duration: "2019"
    },
  ]
}


const skills = {
  title: "My Skills",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas sit laudantium eligendi, corrupti quis assumenda similique earum cupiditate minus enim?",

  skillList: [
    {
      icon: <FaHtml5></FaHtml5>,
      name: "HTML"
    },
    {
      icon: <FaCss3></FaCss3>,
      name: "CSS"
    },
    {
      icon: <FaJs></FaJs>,
      name: "JAVA SCRIPT"
    },
    {
      icon: <FaReact></FaReact>,
      name: "REACT"
    },
    {
      icon: <SiTailwindcss></SiTailwindcss>,
      name: "TAILWIND"
    },
    {
      icon: <SiNextdotjs></SiNextdotjs>,
      name: "NEXT JS"
    },
  ]

}

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion"

const Resume = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{
      opacity: 1,
      transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
    }} className="min-h-[80vh] flex items-center justify-center py-12 xl:12
    xlpy-0">
      <div className="container mx-auto">

        <Tabs defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] 
          mx-auto xl:mx-0
          gap-6">
            <TabsTrigger value="Experience">Experience</TabsTrigger>
            <TabsTrigger value="Education">Education</TabsTrigger>
            <TabsTrigger value="Skills">Skills</TabsTrigger>
            <TabsTrigger value="About">About Me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="Experience" className="">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">
                  {experience.title}
                </h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0
                "> {experience.description}</p>
                <ScrollArea className="h-[400px]" >
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {
                      experience.items.map((data, index) => {
                        return <li key={index} className="bg-[#232329] 
                        h-[148px] py-6 px-10 rounded-xl flex flex-col  justify-center items-center lg:items-start gap-1
                        ">
                          <span className="text-accent">{data.duration}</span>
                          <h3 className="text-xl max-2-[260px] min-h-[60px] text-center lg:text-left">{data.position}</h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{data.company}</p>
                          </div>
                        </li>
                      })
                    }
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="Education" className="">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">
                  {education.title}
                </h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0
                "> {education.description}</p>
                <ScrollArea className="h-[400px]" >
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {
                      education.items.map((data, index) => {
                        return <li key={index} className="bg-[#232329] 
                        h-[184px] py-6 px-10 rounded-xl flex flex-col  justify-center items-center lg:items-start gap-1
                        ">
                          <span className="text-accent">{data.degree}</span>
                          {/* <h3 className="text-xl max-2-[260px] min-h-[60px] text-center lg:text-left">{data.position}</h3> */}
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{data.institution}</p>
                          </div>
                        </li>
                      })
                    }
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="Skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div>

                  <h3 className="text-4xl font-bold">
                    {skills.title}
                  </h3>
                  <p className="max-w-[600px] text-white/60
                   mx-auto xl:mx-0"> {skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 
                xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] 
                           bg-[#232329]  rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>

                    </li>
                  })}
                </ul>




              </div>
            </TabsContent>

            <TabsContent value="About" className="w-full text-center xl:text-left">
              <div>
                <h3>{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 
                ">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2
                    gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                      <span className="text-white/60">{item.fieldName}:</span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>

      </div>
    </motion.div>
  )
}

export default Resume
