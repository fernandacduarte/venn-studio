import { TwoColumnMarkdown } from "@/app/components/TwoColumnMarkdown/TwoColumnMarkdown";
import styles from "../../about/page.module.css";
import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";
import ProjectDescription from "@/app/components/ProjectDescription/ProjectDescription";
import { projects } from "@/app/lib/projects";
import { notFound } from "next/navigation";

// Generate static params at build time
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }: { params: { slug: string }}) {
    const project = projects.find(p => p.slug === params.slug);
  
    if (!project) {
        notFound();
    }

    return (
        <main className="animate-fadeIn w-full flex gap-6 flex-grow items-stretch text-xl md:text-2xl lg:text-[30px]">
            <ProjectDescription {...project}/>
        </main>
    )
}

