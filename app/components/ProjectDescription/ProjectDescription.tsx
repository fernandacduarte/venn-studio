import { TwoColumnMarkdown } from "../TwoColumnMarkdown/TwoColumnMarkdown";
import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";
import styles from "./ProjectDescription.module.css";
import Markdown from "../Markdown/Markdown";
import { quantity, ProjectMetadata, resolveProjectsPathname } from "@/app/lib/projects";
import SlowMotion from "../SlowMotion/SlowMotion";
import Image from "next/image";
import Carousel3D, { Carousel3DSlide } from "../Carousel3D/Carousel3D";
import CarouselSwipeable from "../CarouselSwipeable/CarouselSwipeable";


interface ProjectDescriptionProps extends ProjectMetadata {
    index: number
}

const carouselSwipeableSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    responsive: [
        {
          breakpoint: 436,
          settings: {
            centerMode: false
          }
        }
    ]
  };
  

export default function ProjectDescription ({
    index,
    title,
    subtitle,
    description,
    images,
    additionalInfo
}: ProjectDescriptionProps) {

    return (
        <div className="h-full w-full max-w-screen-2xl mx-auto flex flex-col gap-16 flex-grow mt-12 animate-fade-in">
                <h1 className="px-4 md:px-16 min-[375px]:px-6 lg:px-fluid-16-64 ">{title}</h1>
                {/* <img
                src="/images/Frame321.png"
                alt="img"
                className="w-full max-w-[830px] mx-auto"
                /> */}
                <Carousel3D 
                className="w-full px-16 lg:px-0 max-w-[800px] h-[500px] mx-auto hidden md:block"
                slides={get3dCarouselItems(images)} 
                offset={1.5}
                />
                <div className="w-full overflow-hidden md:hidden">
                    <CarouselSwipeable settings={carouselSwipeableSettings} showNavigation>
                        {images.map((item, index) => (
                            <div key={index} className="px-4">
                                <Image
                                className="mx-auto"
                                src={item}
                                alt={`image-${index}`}
                                width={400}
                                height={400}
                                />
                            </div>
                        ))}
                    </CarouselSwipeable>
                </div>
                <div className="px-4 md:px-16 min-[375px]:px-6 lg:px-fluid-16-64">
                    <div className="relative w-full rounded-xl p-10 bg-gray-300 overflow-hidden"
                    style={{ boxShadow: 'rgba(149, 157, 165, 0.3) 0px 4px 24px' }}
                    >
                        <div className="absolute w-[500px] md:w-[800px] right-0 top-[50%] -translate-y-1/2 translate-x-1/2 lg:translate-x-1/3 opacity-30">
                            <SlowMotion className="w-full">
                                <img
                                src="/images/uuundulate9-dark.svg"
                                alt="background"
                                className="w-full"
                                />
                            </SlowMotion>
                        </div>
                        <h2 className="text-balance leading-normal">{subtitle}</h2>
                    </div>
                </div>
                <div className="w-full px-4 md:px-16 min-[375px]:px-6 lg:px-fluid-16-64">
                    <TwoColumnMarkdown text={description} />
                </div>
                <div className="mx-auto bg-current opacity-30 h-px w-[75%] max-w-[490px]"></div>
                {additionalInfo &&
                    <div className="w-full px-4 md:px-16 min-[375px]:px-6 lg:px-fluid-16-64">
                        <Markdown>
                            {additionalInfo}
                        </Markdown>                    
                    </div>
                }
                <div className="w-full px-4 md:px-16 min-[375px]:px-6 lg:px-fluid-16-64 flex justify-between items-center mt-20">
                    <Link href={index === 0 ? '/projects' : resolveProjectsPathname(index - 1)}>
                        <div className="w-full flex max-[360px]:gap-1 gap-2 items-center">
                            <h2 className="scale-[-1]"><IconArrowRight size={'1em'} stroke={2} /></h2>
                            <h2 className={`${styles.contact__highlight}`}>{index === 0 ? "Projects" : "Previous"}</h2>
                        </div>
                    </Link>
                    <Link href={index === quantity - 1 ? "/contact" : resolveProjectsPathname(index + 1)}>
                        <div className="w-full flex max-[360px]:gap-1 gap-2 items-center">
                            <h2 className={`${styles.contact__highlight}`}>{index === quantity - 1 ? "Contact" : "Next"}</h2>
                            <h2><IconArrowRight size={'1em'} stroke={2} /></h2>
                        </div>
                    </Link>
                </div>
        </div>
    )
}

const get3dCarouselItems = (images: string[]) => {
    const carouselItems : Carousel3DSlide[] = [];
    images.map((item, index) => {
        carouselItems.push({
            key: `image-${index}`,
            content:
                <div className="w-[400px] h-[400px] flex">
                    <Image
                    alt={`image-${index}`}
                    src={item}
                    // fill
                    width={400}
                    height={400}
                    className="object-contain"
                    />
                </div>                
        })
    })
    return carouselItems;
}
