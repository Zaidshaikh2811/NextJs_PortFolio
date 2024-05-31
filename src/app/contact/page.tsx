"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa"


const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+91 8356980473"
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "zaidshaikh2811@gmail.com"
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Solapur"
  },

]

import { motion } from "framer-motion"

const Contact = () => {
  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }} className="py-6">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl ">
              <h3 className="text-4xl text-accent ">Let's Work Together</h3>
              <p className="text-white/60">Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="FirstName" />
                <Input type="lastname" placeholder="LastName" />
                <Input type="email" placeholder="Email" />
                <Input type="phone" placeholder="Phone" />
              </div>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service"></SelectValue>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel> Select a Services</SelectLabel>
                      <SelectItem value="web">Web Development</SelectItem>
                      <SelectItem value="app">App Development</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </SelectTrigger>
              </Select>
              <Textarea className="h-[200px]" placeholder="Type Your Message Here."></Textarea>
              <Button size="md" className="max-w-40">Send Message</Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-center order-1 xl:order-none  mb-8 xl:mb-0"><ul className="flex flex-col gap-10">
            {info.map((item, index) => {
              return <li key={index}>
                <div className="w-[52px] h-[52px] xl:2-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center" >
                  <div>{item.icon}</div>
                </div>
                <div>
                  <p className="text-white/60 ">{item.title}</p>
                  <h3 className="text-xl">{item.description}</h3>
                </div>
              </li>
            })}</ul>
          </div>
        </div>
      </div>
      Contact
    </motion.section>
  )
}

export default Contact
