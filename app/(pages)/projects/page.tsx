// import { IconArrowLeft } from "@tabler/icons-react";
// import Link from "next/link";

const ProjectsPage = () => {
  return (
    <div className="relative animate-fadeIn w-full p-4 min-[375px]:p-6 md:px-16 lg:px-fluid-16-64 flex gap-6 flex-grow items-stretch">
      <div className="h-full w-full flex flex-col gap-14 flex-grow text-neutralDark mt-12">
        {/* <Link href="/"><div className="w-full flex gap-2 opacity-70"><IconArrowLeft strokeWidth={1.2}/><span className="">Home</span></div></Link> */}
        {/* <div>
          <span className="text-6xl font-[family-name:var(--font-panamera-bold)] ">Projects</span>
        </div> */}
        <div>
          <span className="text-3xl md:text-4xl font-extrabold">Latest projects</span>
        </div>
        {/* <div className="animate-pulse w-full h-full flex flex-row justify-between flex-wrap gap-14 opacity-[40%]"> */}
        <div className="animate-pulse w-full h-full flex flex-col lg:flex-row justify-between gap-10 lg:gap-14 opacity-[40%]">
          <div className="bg-neutralDark rounded-3xl w-full lg:w-1/3 h-[25rem]"></div>
          <div className="bg-neutralDark rounded-3xl w-full lg:w-1/3 h-[25rem]"></div>
          <div className="bg-neutralDark rounded-3xl w-full lg:w-1/3 h-[25rem]"></div>
          {/* <div className="bg-neutralDark rounded-3xl w-[24rem] h-[24rem]"></div> */}
        </div>
        <div className="z-20 fixed top-[50%] left-0 flex justify-center items-center text-3xl min-[375px]:text-4xl font-bold bg-highlight p-8 w-screen opacity-70">
          <span>Coming soon...</span>
        </div>
        <div className="z-10 fixed top-[50%] left-0 flex justify-center items-center text-4xl font-bold bg-highlight p-8 w-screen opacity-80" style={{ filter: 'blur(20px)' }}>
          <span className="opacity-0">Coming soon...</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;