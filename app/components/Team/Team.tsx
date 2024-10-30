import { IconArrowUpRight } from "@tabler/icons-react";
// import BlurCard from "../BlurCard/BlurCard";
// import Image from "next/image";
import SimpleCard from "../SimpleCard/SimpleCard";
import Link from "next/link";

const Team = () => {
  return (
    // <BlurCard>
    // <BlurCard backgroundColor="rgba(255, 255, 255, 0.1)">
    // <SimpleCard backgroundColor="rgba(0, 0, 0, 0.15)">
    <SimpleCard backgroundColor="linear-gradient(340deg, rgba(0, 0, 0, 0.15) 70%, rgba(0, 0, 0, 0.1) 100%)">
      <Link href="/team">
        <div className="h-full flex flex-col justify-between items-center font-medium">
          <div className="w-full flex justify-between items-center mt-[-12px]">
            <span className="text-[0.65rem] sm:text-xs min-[860px]:text-sm xl:text-base tracking-[0.05em] max-w-[14ch]">
              MEET OUR TEAM MEMBERS
            </span>
            <div className="mr-[-10px] rotate-45 text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem]">
              <IconArrowUpRight size={'1em'} strokeWidth={1.2} />
            </div>
          </div>
          <div className="w-full flex justify-end items-center">
            <span className="text-2xl sm:text-3xl lg:text-[2.5rem] lg:leading-[2.5rem]">Team</span>
          </div>
        </div>
      </Link>
    </SimpleCard>
  );
};

export default Team;