import { TwoColumnMarkdown } from "../TwoColumnMarkdown/TwoColumnMarkdown";
import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";
import styles from "./ProjectDescription.module.css";
import ReactMarkdown from 'react-markdown';
import Markdown from "../Markdown/Markdown";
import { quantity, ProjectMetadata, resolveProjectsPathname } from "@/app/lib/projects";
import SlowMotion from "../SlowMotion/SlowMotion";

interface ProjectDescriptionProps extends ProjectMetadata {
    index: number
}

export default function ProjectDescription ({
    index,
    title,
    subtitle,
    description,
    images,
    additionalInfo
}: ProjectDescriptionProps) {

    return (
        <div className="h-full w-full max-w-screen-2xl mx-auto md:px-16 min-[375px]:px-6 px-4 lg:px-fluid-16-64 flex flex-col gap-16 flex-grow mt-12">
                <h1>{title}</h1>
                <img
                src="/images/Frame321.png"
                alt="img"
                className="w-full max-w-[830px] mx-auto"
                />
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
                <TwoColumnMarkdown text={description} />
                <div className="mx-auto bg-current opacity-30 h-px w-[75%] max-w-[490px]"></div>
                {additionalInfo &&
                    <div>
                        <Markdown>
                            {additionalInfo}
                        </Markdown>                    
                    </div>
                }
                <div className="w-full flex justify-between items-center mt-20">
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