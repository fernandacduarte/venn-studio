import { IconArrowRight, IconPalette, IconStack2Filled, IconUserSquare, } from "@tabler/icons-react";
import Image from "next/image";
import styles from './page.module.css'
import Link from "next/link";

// highlight color: #D3EF8A

const ServiceItem = ({ title, text } : { title: string, text: string}) => {
  return (
    <div className="flex flex-col gap-4 max-w-[65ch] pt-4 px-2 min-[430px]:pl-6 min-[430px]:pt-0  border-t-2 min-[430px]:border-l-2 min-[430px]:border-t-0 border-black">
      <span className="text-2xl leading-normal min-[375px]:text-[1.75rem] min-[375px]:leading-normal min-[500px]:text-3xl min-[500px]:leading-normal font-semibold">{title}</span>
      <p className="text-xl min-[500px]:text-2xl leading-[2.3rem] min-[500px]:leading-[2.3rem] font-light">{text}</p>
    </div>
  );
};

const AboutPage = () => {
  return (
    <div className="animate-fadeIn w-full flex gap-6 flex-grow items-stretch">
      {/* <div className="h-full w-full flex flex-col gap-10 flex-grow rounded-3xl p-10 bg-neutralDark text-neutralLight-100"> */}
      <div className="h-full w-full max-w-screen-2xl mx-auto px-4 min-[375px]:px-6 md:px-16 lg:px-fluid-16-64 flex flex-col gap-16 flex-grow text-neutralDark mt-2">
        {/* <div> */}
          {/* <span className="text-4xl font-extrabold">About us</span> */}
          {/* <span className="text-lg font-bold tracking-[0.035em]">ABOUT US</span> */}
        {/* </div> */}
        <div className="flex flex-col gap-6 max-w-[70ch] mt-10">
          {/* <Link href="/"><div className="w-full flex gap-1 opacity-70"><IconArrowLeft strokeWidth={1.5}/><span className="font-semibold">Back</span></div></Link> */}
          <p className="text-2xl leading-normal min-[375px]:text-3xl min-[375px]:leading-normal min-[500px]:text-4xl min-[500px]:leading-normal font-semibold text-balance">
            We are a web development studio specializing in delivering tailor-made, <span className={`${styles.intro__highlight}`}>full-stack solutions</span>. 
          </p>
          <p className="text-xl leading-normal min-[375]:text-2xl min-[375]:leading-normal min-[500px]:text-3xl min-[500px]:leading-normal font-light">
            From sleek UI design to seamless backend functionality, we build digital experiences that resonate with users and drive business growth. 
          </p>
        </div>
        <div className="w-full">
          <div className="w-full relative px-8 py-28 min-[430px]:px-12 min-[430px]:py-32 flex items-center justify-end bg-neutralDark rounded-3xl text-neutralLight-100 overflow-hidden">
            <div className="w-full h-full absolute right-[50%] min-[1210px]:right-[45%] min-[1260px]:right-[40%] min-[1378px]:right-[30%] top-0 flex items-center justify-center opacity-70">
              <Image
                src="/images/about-page-image.svg" 
                alt="About section abstract image"
                // layout="fill"
                width={920}
                height={920}
                objectFit="cover"
              />
            </div>
            <div className="max-w-[60ch]">
            {/* <div className="w-full"> */}
              <p className="text-xl min-[375]:text-2xl leading-normal min-[500px]:text-3xl min-[375]:leading-normal min-[500px]:leading-normal font-light">
                Our mission is to bridge <span className="text-highlight font-semibold">creativity and technology</span>, empowering businesses with innovative web solutions that are both visually compelling and technically robust.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[6rem] items-center justify-center my-4 mt-6">
          <span className="text-4xl min-[375px]:text-[2.5rem] min-[500px]:text-5xl font-semibold">What we offer</span>
          <div className="flex flex-col gap-[6rem] items-center justify-center">
            <div className="flex flex-col min-[430px]:flex-row gap-6 items-center">
              <div className="opacity-50"><IconStack2Filled size={96} color={'hsl(77, 76%, 54%)'}/></div>       
              <ServiceItem title={"Full-Stack Development"} text={"We craft end-to-end web solutions, handling everything from frontend aesthetics to backend logic. Whether it's a fast, responsive website or a complex web application, we've got you covered."} />
            </div>
            <div className="flex flex-col min-[430px]:flex-row gap-6 items-center">
              <div className="opacity-50"><IconPalette size={96} color={'hsl(77, 76%, 54%)'} stroke={2} /></div>
              <ServiceItem title={"UI/UX Design"} text={"Our design team creates user-friendly interfaces that are not only visually appealing but also intuitive and engaging, making every interaction count."} />
            </div>
            <div className="flex flex-col min-[430px]:flex-row gap-6 items-center">
              <div className="opacity-50"><IconUserSquare size={96} color={'hsl(77, 76%, 54%)'}/></div>       
              <ServiceItem title={"Custom Development"} text={"We tailor our services to your specific needs, ensuring that every project is built to fit your goals, budget, and timeline."} />
            </div>
            {/* <ServiceItem title={"Full-Stack Development"} text={"We craft end-to-end web solutions, handling everything from frontend aesthetics to backend logic. Whether it's a fast, responsive website or a complex web application, we've got you covered."} />
            <ServiceItem title={"UI/UX Design"} text={"Our design team creates user-friendly interfaces that are not only visually appealing but also intuitive and engaging, making every interaction count."} />
            <ServiceItem title={"Custom Development"} text={"We tailor our services to your specific needs, ensuring that every project is built to fit your goals, budget, and timeline."} /> */}
          </div>
        </div>
        <div className="w-full flex justify-end items-center">
          <Link href='/contact'><div className="w-full flex gap-2 items-center"><span className={`text-2xl min-[375px]:text-3xl min-[500px]:text-4xl font-bold ${styles.contact__highlight}`}>Contact</span><IconArrowRight size={36} stroke={2.5} /></div></Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;