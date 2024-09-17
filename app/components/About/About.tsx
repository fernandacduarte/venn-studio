import { IconArrowUpRight } from '@tabler/icons-react';
// import Image from 'next/image';
import SimpleCard from '../SimpleCard/SimpleCard';
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  return (
    // <BlurCard backgroundColor="#121717">
      <SimpleCard backgroundColor="linear-gradient(340deg, #121717 50%, #1a2424 100%)">
        <Link href="/about">
          <div className="flex justify-between items-start text-neutralLight-100">
            <div className="font-[family-name:var(--font-panamera-medium)] flex flex-col gap-2">
              <span className="tracking-[0.07em]">ABOUT US</span>
              {/* <span className="text-[3.5rem] leading-[4rem] w-full max-w-[20ch] tracking-[0.04em]">We are a <br />Web Development Studio</span> */}
              <span className="text-6xl leading-[4.5rem] w-full max-w-[20ch] tracking-[0.03em]">We are a Web Development Studio</span>
            </div>
            <div className="h-full mt-[-16px]">
              <IconArrowUpRight size={80} strokeWidth={1} />
            </div>
          </div>
          <Image
            className="absolute top-[200px] left-[120px] opacity-70"
            style={{ transform: 'scale(2) rotate(10deg)' }}
            src="images/uuundulate9.svg"
            alt="About us"
            width={1500}
            height={1500}
            priority
          />
      </Link>
    </SimpleCard>
  );
};

export default About;