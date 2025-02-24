import { ReactNode } from "react";
import styles from "./ProjectCard.module.css";
import { IconArrowUpRight } from "@tabler/icons-react";
import Link from "next/link";

interface ProjectCardProps {
    title: string;
    org: string
    logo: ReactNode;
    image: ReactNode;
    href: string
}

const ProjectCard = ({
    title,
    org,
    logo,
    image,
    href
}: ProjectCardProps) => {
    return (
        <div className={`${styles.card} w-full max-w-[532px] h-[380px]`}>
            <div className={`${styles.content} rounded-xl flex`}>
                <div className={`${styles.front} flex flex-col items-center justify-between rounded-xl py-16 px-14 drop-shadow`}>
                    {logo}
                    <div className="w-full text-center gap-2">
                        <span className="text-2xl md:text-3xl xl:text-4xl font-bold">{title}</span>
                        <p>{org}</p>
                    </div>
                </div>
                <div className={`${styles.back} border border-foreground drop-shadow flex flex-col rounded-xl py-8 px-14`}>
                    <Link href={href} className="w-full flex-1" >{image}</Link>
                    <Link href={href} className="w-full flex justify-center items-center gap-1">
                        <p>Open</p>
                        <p><IconArrowUpRight size={'1em'} stroke={1} /></p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;