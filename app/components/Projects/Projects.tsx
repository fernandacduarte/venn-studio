import { IconArrowUpRight } from "@tabler/icons-react";
import SimpleCard from "../SimpleCard/SimpleCard";
import Link from "next/link";
import Carousel from "../Carousel/Carousel";

// const Line = () => {
//   return (
// <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 800 400"><path d="M138.11659240722656,206.2780303955078C149.62630716959634,196.5620346069336,195.3662109375,142.15246073404947,207.1748809814453,147.9820556640625C218.98355102539062,153.81165059407553,186.99551645914713,241.55455271402994,208.96861267089844,241.25559997558594C230.94170888264975,240.95664723714194,312.2571080525716,149.32735188802084,339.0134582519531,146.18833923339844C365.76980845133465,143.04932657877603,344.24513244628906,221.2257080078125,369.5067138671875,222.42152404785156C394.76829528808594,223.61734008789062,470.40357462565106,164.8729502360026,490.58294677734375,153.3632354736328" fill="none" stroke-width="25" stroke="url(&quot;#SvgjsLinearGradient1000&quot;)" stroke-linecap="round"></path><defs><linearGradient id="SvgjsLinearGradient1000"><stop stop-color="#fffd70" offset="0"></stop><stop stop-color="hsl(59, 77%, 61%)" offset="1"></stop></linearGradient></defs></svg>  )
// }

const carouselItems = [
  "Projects · ",
  "Apps · ",
  "Designs · ",
  "Dapps · ",
  "Protocols · "
]

const Projects = () => {
  return (
    // <BlurCard>
    // <BlurCard backgroundColor="rgba(159, 140, 170, 0.4)">
    // <BlurCard backgroundColor="linear-gradient(90deg, rgba(127, 181, 187, 1) 90%, rgba(159, 140, 170, 0.2) 100%)">
    // <SimpleCard backgroundColor="rgba(127, 181, 187, 0.7)">
    // <SimpleCard backgroundColor="linear-gradient(340deg, rgba(127, 181, 187, 0.7) 50%, rgba(127, 181, 187, 0.5) 100%)">
    // <SimpleCard backgroundColor="linear-gradient(340deg, rgba(14, 14, 14, 0.6) 50%, rgba(14, 14, 14, 0.4) 100%)">
    // <SimpleCard backgroundColor="rgba(232, 245, 113, 1)">
    // <SimpleCard backgroundColor="hsl(77, 100%, 76%)"> 
    // <SimpleCard backgroundColor="rgba(255, 253, 112, 0.9)">
    <SimpleCard backgroundColor="hsl(77, 76%, 74%)"> 
      <Link href="/projects">
        <div className="h-full flex flex-col justify-start gap-4 min-[460px]:justify-between text-neutralDark">
          <div className="flex justify-between items-start">
            {/* <div className="font-[family-name:var(--font-panamera-medium)] flex flex-col gap-3"> */}
            <div className="font-medium flex flex-col gap-3">
              <span className="text-[0.65rem] min-[500px]:text-xs md:text-sm lg:text-base tracking-[0.07em]">SEE OUR WORK</span>
              {/* <span className="text-[3.5rem] leading-[4rem] w-full max-w-[20ch] tracking-[0.04em]">We are a <br />Web Development Studio</span> */}
              <span className="text-lg min-[500px]:text-[1.25rem] md:text-2xl md:leading-[2.5rem] lg:text-3xl w-full max-w-[22ch] tracking-[0.03em] leading-[2.5rem] lg:leading-[2.7rem] pr-4">Take a look at our work in progress and latest projects</span>
            </div>
            <div className="h-full">
              <div className="rounded-full bg-neutralDark flex justify-center items-center rotate-45 text-[2.5rem] min-[500px]:text-[3rem] md:text-[4rem]">
                <IconArrowUpRight size={'1em'} strokeWidth={1} color={'hsl(77, 76%, 74%)'}/>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-end items-end">
            {/* <span className="relative font-[family-name:var(--font-panamera-medium)] text-5xl">Projects</span> */}
            {/* <span className="font-medium text-3xl min-[500px]:text-4xl lg:text-5xl">Projects</span> */}
            <div className="w-[10ch] h-[2.25rem] min-[500px]:h-[2.65rem] lg:h-[3.25rem] font-medium text-3xl min-[500px]:text-4xl lg:text-5xl">
              <Carousel items={carouselItems} />
            </div>
          </div>
        </div>
      </Link>
    </SimpleCard>
  );
};

export default Projects;