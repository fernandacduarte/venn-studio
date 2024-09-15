import { IconArrowUpRight } from "@tabler/icons-react";

const Team = () => {
  return (
    <div className="font-[family-name:var(--font-panamera-medium)] w-full rounded-3xl p-10 py-7 bg-neutralLight-300 flex flex-col justify-between hover:scale-[1.03] active:scale-95 transition-transform duration-300 cursor-pointer">
      <div className="w-full flex justify-between items-center">
        <span className="tracking-[0.05em] max-w-[13ch]">
          MEET OUR TEAM MEMBERS
        </span>
        <div className="mr-[-16px]">
          <IconArrowUpRight size={72} strokeWidth={1.5} />
        </div>
      </div>
      <div className="w-full flex justify-end items-center">
        <span className="text-5xl leading-[2.5rem]">Team</span>
      </div>
    </div>
  );
};

export default Team;