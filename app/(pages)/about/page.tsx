'use client'
import { IconArrowRight, IconPalette, IconStack2Filled, IconUserSquare, } from "@tabler/icons-react";
import Image from "next/image";
import styles from './page.module.css'
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { AIIcon, BlockchainIcon } from "@/app/components/Icons/Icons";

// highlight color: #D3EF8A

const ServiceItem = ({ title, text } : { title: string, text: string}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div 
      ref={ref} 
      className={`${show ? 'opacity-1 translate-x-0' : 'opacity-0 translate-x-6'} transition-all duration-500 delay-300 ease-out flex flex-col gap-4 max-w-[65ch] pt-4 px-2 min-[430px]:pl-6 min-[430px]:pt-0  border-t-2 min-[430px]:border-l-2 min-[430px]:border-t-0 border-black`}
    >
      <span className="text-2xl leading-normal min-[375px]:text-[1.75rem] min-[375px]:leading-normal min-[500px]:text-3xl min-[500px]:leading-normal font-semibold">{title}</span>
      <p className="text-xl min-[500px]:text-2xl leading-[2rem] min-[500px]:leading-[2.3rem] font-light">{text}</p>
    </div>
  );
};


const AboutPage = () => {
  return (
    <div className="animate-fadeIn w-full flex gap-6 flex-grow items-stretch">
      {/* <div className="h-full w-full flex flex-col gap-10 flex-grow rounded-3xl p-10 bg-neutralDark text-neutralLight-100"> */}
      <div className="h-full w-full max-w-screen-2xl mx-auto md:px-16 min-[375px]:px-6 px-4 lg:px-fluid-16-64 flex flex-col gap-16 flex-grow text-neutralDark mt-2">
        {/* <div> */}
          {/* <span className="text-4xl font-extrabold">About us</span> */}
          {/* <span className="text-lg font-bold tracking-[0.035em]">ABOUT US</span> */}
        {/* </div> */}
        <div className="flex flex-col gap-6 max-w-[70ch] mt-10">
          {/* <Link href="/"><div className="w-full flex gap-1 opacity-70"><IconArrowLeft strokeWidth={1.5}/><span className="font-semibold">Back</span></div></Link> */}
          <p className="text-2xl leading-normal min-[375px]:text-3xl min-[375px]:leading-normal min-[500px]:text-4xl min-[500px]:leading-normal font-semibold text-balance">
            We turn startup visions into <span className={`${styles.intro__highlight}`}>market-ready MVPs</span> in weeks, not months. 
          </p>
          <p className="text-xl leading-normal min-[375px]:text-2xl min-[375px]:leading-normal min-[500px]:text-3xl min-[500px]:leading-normal font-light">
            Our agile and highly skilled team specializes in helping founders validate their ideas and secure early traction through rapid, production-grade prototypes. From concept to launch, we deliver scalable full-stack solutions that grow with your business. 
          </p>
        </div>
        <div className="w-full">
          <div className="w-full relative px-8 py-28 min-[430px]:px-12 min-[430px]:py-32 flex items-center justify-end bg-neutralDark rounded-3xl text-neutralLight-100 overflow-hidden">
            <div className="w-full h-full absolute right-[50%] min-[1210px]:right-[45%] min-[1260px]:right-[40%] min-[1378px]:right-[30%] top-0 flex items-center justify-center opacity-70 animate-swingX">
              <div className="w-full h-full flex items-center justify-center animate-slowRotate">
                <Image
                  src="/images/about-page-image.svg" 
                  alt="About section abstract image"
                  // layout="fill"
                  width={920}
                  height={920}
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="max-w-[64ch]">
            {/* <div className="w-full"> */}
              <p className="text-xl min-[375px]:text-2xl leading-normal min-[500px]:text-3xl min-[375px]:leading-normal min-[500px]:leading-normal font-light">
                Our mission is to bridge <span className="text-highlight font-semibold">creativity and technology</span>, empowering starting businesses with innovative solutions that are both visually compelling and technically robust.
              </p>
            </div>
          </div>          
        </div>
        <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center lg:mt-6 ">
          <span className="md:text-center max-w-[26ch] text-2xl leading-normal min-[375px]:text-3xl min-[375px]:leading-normal min-[500px]:text-4xl min-[500px]:leading-normal font-semibold">Have a game-changing idea? Skip the big agencies</span>
          <span className="max-w-[53ch] md:text-center text-xl  leading-normal min-[500px]:text-2xl min-[375px]:leading-normal min-[500px]:leading-normal font-light">
            Our lean team works directly with founders to validate concepts and ship MVPs fast. Through rapid iteration and ruthless prioritization, we deliver products that users love and investors notice—without the overhead and complexity of large agencies. We're built for startups who need beautiful, functional products—without burning runway.
          </span>
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
            <div className="flex flex-col min-[430px]:flex-row gap-6 items-center">
              <div className="opacity-50"><AIIcon size={96} color={'hsl(77, 76%, 54%)'} stroke={6}/></div>       
              <ServiceItem title={"AI Integration"} text={"We integrate cutting-edge AI models to supercharge your product, with everything tailored precisely to your use case."} />
            </div>
            <div className="flex flex-col min-[430px]:flex-row gap-6 items-center">
              <div className="opacity-50 w-[96px] ml-[-14px] mr-[14px]"><BlockchainIcon size={124} color={'hsl(77, 76%, 54%)'} stroke={3}/></div>       
              <ServiceItem title={"Blockchain Integration"} text={"Evaluating blockchain for your product? We help businesses make the right call, then build it right—using industry-leading Web3 tools and protocols."} />
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