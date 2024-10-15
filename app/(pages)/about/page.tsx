import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";
import styles from './page.module.css'
import Link from "next/link";

// highlight color: #D3EF8A

const ServiceItem = ({ title, text } : { title: string, text: string}) => {
  return (
    <div className="flex flex-col gap-4 max-w-[65ch] pl-6 border-l-2 border-black">
      <span className="text-3xl leading-normal font-semibold">{title}</span>
      <p className="text-2xl leading-[2.1rem] font-light">{text}</p>
    </div>
  );
};

const AboutPage = () => {
  return (
    <div className="animate-fadeIn w-full px-16 flex gap-6 flex-grow items-stretch">
      {/* <div className="h-full w-full flex flex-col gap-10 flex-grow rounded-3xl p-10 bg-neutralDark text-neutralLight-100"> */}
      <div className="h-full w-full flex flex-col gap-16 flex-grow text-neutralDark mt-2">
        {/* <div> */}
          {/* <span className="text-4xl font-extrabold">About us</span> */}
          {/* <span className="text-lg font-bold tracking-[0.035em]">ABOUT US</span> */}
        {/* </div> */}
        <div className="flex flex-col gap-6 max-w-[70ch] mt-10">
          {/* <Link href="/"><div className="w-full flex gap-1 opacity-70"><IconArrowLeft strokeWidth={1.5}/><span className="font-semibold">Back</span></div></Link> */}
          <p className="text-4xl leading-normal font-semibold">
            We are a web development studio specializing in delivering tailor-made, <span className={`${styles.intro__highlight}`}>full-stack solutions</span>. 
          </p>
          <p className="text-3xl leading-normal font-light">
            From sleek UI design to seamless backend functionality, we build digital experiences that resonate with users and drive business growth. 
          </p>
        </div>
        <div className="w-full">
          <div className="w-full relative px-12 py-32 flex items-center justify-end bg-neutralDark rounded-3xl text-neutralLight-100 overflow-hidden">
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
              <p className="text-3xl leading-normal font-light">
                Our mission is to bridge <span className="text-highlight font-semibold">creativity and technology</span>, empowering businesses with innovative web solutions that are both visually compelling and technically robust.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[64px] items-center justify-center my-4">
          <span className="text-5xl font-semibold">What we offer</span>
          <div className="flex flex-col gap-[80px] items-center justify-center">
            <ServiceItem title={"Full-Stack Development"} text={"We craft end-to-end web solutions, handling everything from frontend aesthetics to backend logic. Whether it's a fast, responsive website or a complex web application, we've got you covered."} />
            <ServiceItem title={"UI/UX Design"} text={"Our design team creates user-friendly interfaces that are not only visually appealing but also intuitive and engaging, making every interaction count."} />
            <ServiceItem title={"Custom Development"} text={"We tailor our services to your specific needs, ensuring that every project is built to fit your goals, budget, and timeline."} />
          </div>
        </div>
        <div className="w-full flex gap-2 justify-end items-center">
          <span className={`text-4xl font-bold ${styles.contact__highlight}`}>Contact</span><IconArrowRight size={36} stroke={2.5} />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;