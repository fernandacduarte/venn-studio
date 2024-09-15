import { IconArrowUpRight } from '@tabler/icons-react';
import Image from 'next/image';

const About = () => {
  return (
    <div className="h-full w-full rounded-3xl p-10 flex-grow bg-neutralDark relative hover:scale-[1.02] active:scale-95 transition-transform duration-300 cursor-pointer">
      <div className="flex justify-between items-start text-neutralLight-100">
        <div className="font-[family-name:var(--font-panamera-medium)] flex flex-col gap-2">
          <span className="tracking-[0.07em]">ABOUT US</span>
          {/* <span className="text-[3.5rem] leading-[4rem] w-full max-w-[20ch] tracking-[0.04em]">We are a <br />Web Development Studio</span> */}
          <span className="text-6xl leading-[4rem] w-full max-w-[20ch] tracking-[0.03em]">We are a Web Development Studio</span>
        </div>
        <div className="h-full mt-[-16px]">
          <IconArrowUpRight size={80} strokeWidth={1.5} />
        </div>
      </div>
      <Image
        className="absolute bottom-0 right-0 object-cover"
        src="images/circle-dot-pattern.svg"
        alt="About us"
        width={500}
        height={500}
        priority
      />
    </div>
  );
};

export default About;