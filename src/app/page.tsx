import Photo from "@/components/Photo"
import Socials from "@/components/Socials"
import Stats from "@/components/Stats"
import { Button } from "@/components/ui/button"
import { FiDownload } from "react-icons/fi"


const page = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full ">
        <div className="flex flex-col xl:flex-row items-center justify-between 
      xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none"><span>Software Developer</span>
            <h1 className="h1">Hello Im <br /><span className="text-accent">Zaid Shaikh</span></h1>
            <p className="max-w-[500px] mb-9 text-white/80">Hi, Im Zaid Shaikh, a Full Stack Developer dedicated to crafting seamless and innovative web solutions.</p>
            <div className="flex flex-col xl:flex-row items-center gap-8">

              <Button className="uppercase flex items-center gap-2" variant="outline" size="lg" ><span>Download CV</span><FiDownload className="text-xl"> </FiDownload></Button>
              <div className="mb-8 xl:mb-0">
                <Socials containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"></Socials>
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats ></Stats>
    </section>
  )
}

export default page
