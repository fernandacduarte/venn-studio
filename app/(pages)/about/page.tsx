import { IconStackFront, IconTable, IconUserStar, } from "@tabler/icons-react";
import styles from './page.module.css'
// import Link from "next/link";
import { BackgrounSVG } from "./graphics";
// import { Carousel } from "react-responsive-3d-carousel";
// import Carousel from 'react-spring-3d-carousel';
import { IconBlockchain, IconAI } from "@/app/components/Icons/Icons";
import HighlightLink from "@/app/components/HighlightLink/HighlightLink";
import Carousel3D from "@/app/components/Carousel3D/Carousel3D";
// import CarouselSwipeable from "@/app/components/CarouselSwipeSlider/CarouselSwipeSlider";
import CarouselSwipeable from "@/app/components/CarouselSwipeable/CarouselSwipeable";
// import Slider from "react-slick";

// highlight color: #D3EF8A

// const ServiceItem = ({ title, text } : { title: string, text: string}) => {
//   const ref = useRef<HTMLDivElement>(null);
//   const [show, setShow] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setShow(true);
//           observer.unobserve(entry.target);
//         }
//       },
//       {
//         root: null,
//         rootMargin: '0px',
//         threshold: 0.1
//       }
//     );

//     if (ref.current) {
//       observer.observe(ref.current);
//     }

//     return () => {
//       if (ref.current) {
//         observer.unobserve(ref.current);
//       }
//     };
//   }, []);

//   return (
//     <div 
//       ref={ref} 
//       className={`${show ? 'opacity-1 translate-x-0' : 'opacity-0 translate-x-6'} transition-all duration-500 delay-300 ease-out flex flex-col gap-4 max-w-[65ch] pt-4 px-2 min-[430px]:pl-6 min-[430px]:pt-0  border-t-2 min-[430px]:border-l-2 min-[430px]:border-t-0 border-black`}
//     >
//       <span className="text-2xl leading-normal min-[375px]:text-[1.75rem] min-[375px]:leading-normal min-[500px]:text-3xl min-[500px]:leading-normal font-semibold">{title}</span>
//       <p className="text-xl min-[500px]:text-2xl leading-[2rem] min-[500px]:leading-[2.3rem] font-light">{text}</p>
//     </div>
//   );
// };


function Card ({
  icon,
  title,
  description
}:{
  icon: React.ReactNode,
  title: string,
  description: string
}) {
  return (
      <div className={`${styles.gradientBg} rounded-2xl px-6 py-6 lg:px-10 lg:py-10 flex flex-col gap-6 items-start w-full md:w-[360px] lg:w-[460px] h-[372px] lg:h-[424px] shrink-0 cursor-pointer`}>
          <div className="w-full flex justify-center">{icon}</div>
          <div className="w-full flex flex-col gap-2 items-start">
              <span className="font-bold">{title}</span>
              {/* <p className="text-base md:text-lg lg:text-xl font-light leading-[2rem] "> */}
              <p className="mb-4 text-lg md:text-[21.5px] lg:text-[24px] leading-normal">
                {description}
              </p>
          </div>
      </div>
  )
}

// const carouselItems = [
//   <Card
//     key={'card-0'}
//     icon={<div className="text-[135px] md:text-[150px] lg:text-[180px]"><IconStackFront size={'1em'}/></div>}
//     title="Full-Stack Development"
//     description="We craft end-to-end web solutions, handling everything from frontend aesthetics to backend logic."
//   />,
//   <Card
//     key={'card-1'}
//     icon={<div className="text-[72px] md:text-[80px] lg:text-[96px]"><IconTable size={'1em'} stroke={2}/></div>}
//     title="UI/UX Design"
//     description="Our design team creates user-friendly interfaces that are not only visually appealing but also intuitive and engaging, making every interaction count."
//   />,
//   <Card
//     key={'card-2'}
//     icon={<IconAI className="w-[72px] md:w-[80px] lg:w-[96px]"/>}
//     title={"AI tools"}
//     description="We integrate cutting-edge AI models to supercharge your product, with everything tailored precisely to your use case."
//   />,
//   <Card
//     key={'card-3'}
//     icon={<IconBlockchain className="w-[82px] md:w-[91px] lg:w-[110px]"/>}
//     title="Blockchain Integration"
//     description="Evaluating blockchain for your product? We help businesses make the right call, then build it right—using industry-leading Web3 tools and protocols."
//   />,
//   <Card
//     key={'card-4'}
//     icon={<div className="text-[72px] md:text-[80px] lg:text-[96px]"><IconUserStar size={'1em'}/></div>}
//     title="Customized products"
//     description="We tailor our services to your specific needs, ensuring that every project is built to fit your goals, budget, and timeline."
//   />
// ]

const slides = [
  {
    key: 'card-0',
    content: 
      <Card
      key='card-0'
      icon={<div className="text-[72px] md:text-[80px] lg:text-[96px]"><IconStackFront size={'1em'}/></div>}
      title="Full-Stack Development"
      description="We craft end-to-end web solutions, handling everything from frontend aesthetics to backend logic."
      />
  },
  {
    key: 'card-1',
    content: 
      <Card
      key={'card-1'}
      icon={<div className="text-[72px] md:text-[80px] lg:text-[96px]"><IconTable size={'1em'} stroke={2}/></div>}
      title="UI/UX Design"
      description="Our design team creates user-friendly interfaces that are not only visually appealing but also intuitive and engaging, making every interaction count."
      />
  },
  {
    key: 'card-2',
    content: 
      <Card
      key={'card-2'}
      icon={<IconAI className="w-[72px] md:w-[80px] lg:w-[96px]"/>}
      title={"AI tools"}
      description="We integrate cutting-edge AI models to supercharge your product, with everything tailored precisely to your use case."
      />
  },
  {
    key: 'card-3',
    content:
      <Card
      key='card-3'
      icon={<IconBlockchain className="w-[82px] md:w-[91px] lg:w-[110px]"/>}
      title="Blockchain Integration"
      description="Evaluating blockchain for your product? We help businesses make the right call, then build it right—using industry-leading Web3 tools and protocols."
      />
  },
  {
    key: 'card-4',
    content:
      <Card
      key='card-4'
      icon={<div className="text-[72px] md:text-[80px] lg:text-[96px]"><IconUserStar size={'1em'}/></div>}
      title="Customized products"
      description="We tailor our services to your specific needs, ensuring that every project is built to fit your goals, budget, and timeline."
      />
  }
]

const AboutPage = () => {
  return (
    <div className="animate-fadeIn w-full flex gap-6 flex-grow items-stretch text-xl md:text-2xl lg:text-[30px]">
      {/* <div className="h-full w-full flex flex-col gap-10 flex-grow rounded-3xl p-10 bg-neutralDark text-neutralLight-100"> */}
      <div className="h-full w-full max-w-screen-2xl mx-auto flex flex-col gap-16 flex-grow mt-2">
        {/* <div> */}
          {/* <span className="text-4xl font-extrabold">About us</span> */}
          {/* <span className="text-lg font-bold tracking-[0.035em]">ABOUT US</span> */}
        {/* </div> */}
        <div className="flex flex-col gap-6 max-w-[30ch] mt-10 md:px-16 min-[375px]:px-6 px-4 lg:px-fluid-16-64">
          {/* <Link href="/"><div className="w-full flex gap-1 opacity-70"><IconArrowLeft strokeWidth={1.5}/><span className="font-semibold">Back</span></div></Link> */}
          <h2 className="leading-normal">
            We turn startup visions into <span className={`${styles.intro__highlight}`}>market-ready MVPs</span> in weeks, not months. 
          </h2>
          <p className="leading-normal leading-normal font-light">
            Our agile and highly skilled team specializes in helping founders validate their ideas and secure early traction through rapid, production-grade prototypes. From concept to launch, we deliver scalable full-stack solutions that grow with your business. 
          </p>
        </div>
        <div className="w-full md:px-16 min-[375px]:px-6 px-4 lg:px-fluid-16-64">
          <div className="w-full relative px-8 py-20 md:py-28 min-[430px]:px-12 flex items-center justify-end bg-neutralDark rounded-3xl text-background overflow-hidden">
            <div className="w-full h-full absolute right-[50%] lg:right-[55%] xl:right-[50%] top-0 flex items-center justify-center opacity-70 animate-swingX">
              <div className="w-full h-full flex items-center justify-center animate-slowRotate opacity-30 lg:opacity-100">
                {/* <Image
                  src="/images/about-page-image.svg" 
                  alt="About section abstract image"
                  // layout="fill"
                  width={920}
                  height={920}
                  objectFit="cover"
                /> */}
                <BackgrounSVG/>
              </div>
            </div>
            <div className="lg:w-[65%] xl:w-1/2">
            {/* <div className="w-full"> */}
              <p className="leading-normal">
                Our mission is to bridge <span className="text-highlight font-semibold">creativity and technology</span>, empowering starting businesses with innovative solutions that are both visually compelling and technically robust.
              </p>
            </div>
          </div>          
        </div>
        <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12 lg:mt-6 max-w-[40ch] md:px-16 min-[375px]:px-6 px-4 lg:px-fluid-16-64">
          <h2 className="leading-normal">Have a game-changing idea? Skip the big agencies</h2>
          <p className="leading-normal">
            Our lean team works directly with founders to validate concepts and ship MVPs fast. Through rapid iteration and ruthless prioritization, we deliver products that users love and investors notice—without the overhead and complexity of large agencies. We're built for startups who need beautiful, functional products—without burning runway.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center my-4 mt-6">
          <h1>What we offer</h1>
          {/* <Carousel
          items={carouselItems}
          startIndex={0}
          containerHeight="700px"
          height="500px"
          showStatus={false}
          /> */}

          {/* tablet desktop slide */}
          <Carousel3D 
          className="w-full max-w-[1024px] h-[400px] md:h-[500px] lg:h-[600px] mx-auto hidden md:block"
          slides={slides}
          showArrows
          />

          {/* mobile slide */}
          <div className="mt-10 w-full overflow-hidden md:hidden">
            <CarouselSwipeable showNavigation>
              <div className="px-2">
                <Card
                  key={'card-0'}
                  icon={<div className="text-[96px]"><IconStackFront size={'1em'}/></div>}
                  title="Full-Stack Development"
                  description="We craft end-to-end web solutions, handling everything from frontend aesthetics to backend logic."
                />
              </div>
              <div className="px-2">
              <Card
                key={'card-1'}
                icon={<div className="text-[96px]"><IconTable size={'1em'} stroke={2}/></div>}
                title="UI/UX Design"
                description="Our design team creates user-friendly interfaces that are not only visually appealing but also intuitive and engaging, making every interaction count."
              />
              </div>
              <div className="px-2">
              <Card
                key={'card-2'}
                icon={<IconAI className="w-[96px]"/>}
                title={"AI tools"}
                description="We integrate cutting-edge AI models to supercharge your product, with everything tailored precisely to your use case."
              />
              </div>
              <div className="px-2">
              <Card
                key={'card-3'}
                icon={<IconBlockchain className="w-[110px]"/>}
                title="Blockchain Integration"
                description="Evaluating blockchain for your product? We help businesses make the right call, then build it right—using industry-leading Web3 tools and protocols."
              />
              </div>
              <div className="px-2">
              <Card
                key={'card-4'}
                icon={<div className="text-[96px]"><IconUserStar size={'1em'}/></div>}
                title="Customized products"
                description="We tailor our services to your specific needs, ensuring that every project is built to fit your goals, budget, and timeline."
              />   
              </div>         
            </CarouselSwipeable>
          </div>
          {/* <div className="flex flex-col gap-[6rem] items-center justify-center">
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
          </div> */}
          {/* <Card 
              icon={<div className="text-[135px] md:text-[150px] lg:text-[180px]"><IconStackFront size={'1em'}/></div>}
              title="Full-Stack Development"
              description="We craft end-to-end web solutions, handling everything from frontend aesthetics to backend logic."
          /> */}
          {/* <div className="mt-8 md:mt-10 xl:mt-12 flex flex-col gap-6 md:gap-8 xl:gap-12">
            <div className="w-full flex flex-wrap justify-center gap-6 md:gap-8 xl:gap-12">
              <Card 
              icon={<div className="text-[72px] md:text-[80px] lg:text-[96px]"><IconStackFront size={'1em'}/></div>}
              title="Full-Stack Development"
              description="We craft end-to-end web solutions, handling everything from frontend aesthetics to backend logic."
              />
              <Card
              icon={<div className="text-[72px] md:text-[80px] lg:text-[96px]"><IconTable size={'1em'} stroke={2}/></div>}
              title="UI/UX Design"
              description="Our design team creates user-friendly interfaces that are not only visually appealing but also intuitive and engaging, making every interaction count."
              />
            </div>
            <div className="w-full flex flex-wrap justify-center gap-6 md:gap-8 xl:gap-12">
              <Card
              icon={<IconAI className="w-[72px] md:w-[80px] lg:w-[96px]"/>}
              title={"AI tools"}
              description="We integrate cutting-edge AI models to supercharge your product, with everything tailored precisely to your use case."
              />
              <Card
              icon={<IconBlockchain className="w-[82px] md:w-[91px] lg:w-[110px]"/>}
              title="Blockchain Integration"
              description="Evaluating blockchain for your product? We help businesses make the right call, then build it right—using industry-leading Web3 tools and protocols."
              />
            </div>
            <div className="w-full flex flex-wrap justify-center gap-6 md:gap-8 xl:gap-12">
              <Card
              icon={<div className="text-[72px] md:text-[80px] lg:text-[96px]"><IconUserStar size={'1em'}/></div>}
              title="Customized products"
              description="We tailor our services to your specific needs, ensuring that every project is built to fit your goals, budget, and timeline."
              />
            </div>

          </div> */}
        </div>
        <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12 lg:mt-6 max-w-[40ch] md:px-16 min-[375px]:px-6 px-4 lg:px-fluid-16-64">
          <h2 className="leading-normal">We partner with businesses at every stage.</h2>
          <p className="leading-normal">          
            Whether you're a startup exploring innovative possibilities or an established enterprise looking to expand your market reach, we have the expertise to bring your vision to life. Our team combines technical excellence with genuine passion for transforming ideas into impactful solutions. 
            <br/><br/>
            Ready to discuss your next project? Let's connect for a no-obligation consultation.
          </p>
        </div>
        <div className="w-full flex justify-end items-center mt-10 md:mt-16 xl:mt-20 md:px-16 min-[375px]:px-6 px-4 lg:px-fluid-16-64">
          <HighlightLink name="Contact" href="/contact"/>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;