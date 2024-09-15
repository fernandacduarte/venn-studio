import { IconArrowUpRight } from "@tabler/icons-react";

const Projects = () => {
  return (
    <div className="relative overflow-hidden h-full w-full rounded-3xl p-10 flex flex-col justify-between bg-pattern-stripes  hover:scale-[1.03] active:scale-95 transition-transform duration-300 cursor-pointer">
      <div className="w-full flex justify-end  mt-[-16px]">
        <div className="flex justify-center items-center rounded-full bg-neutralLight-100/70">
          <IconArrowUpRight size={80} strokeWidth={1.5} color={'#121717'}/>
        </div>
      </div>
      <div className="absolute top-[73%] left-1/2 right-1/2 ml-[-50%] mr-[-50%] w-full bg-neutralLight-100/70 px-10 py-4">
        <div className="font-[family-name:var(--font-panamera-medium)] flex justify-between items-center">
          <span className="text-neutralDark tracking-[0.07em]">KNOW OUR PROJECTS</span>
          <span className="text-5xl leading-[2.5rem]">Projects</span>
        </div>
      </div>
    </div>
  );
};

export default Projects;