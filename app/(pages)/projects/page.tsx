// import { IconArrowLeft } from "@tabler/icons-react";
// import Link from "next/link";

const ProjectsPage = () => {
  return (
    <div className="animate-fadeIn h-screen w-full font-[family-name:var(--font-panamera-medium)] px-16 flex gap-6 flex-grow items-stretch">
      <div 
        className="h-full w-full flex flex-col gap-10 flex-grow rounded-3xl p-10 text-neutralDark"
      >
        {/* <Link href="/"><div className="w-full flex gap-2 opacity-70"><IconArrowLeft strokeWidth={1.2}/><span className="">Home</span></div></Link> */}
        <div>
          <span className="text-6xl font-[family-name:var(--font-panamera-bold)] ">Projects</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;