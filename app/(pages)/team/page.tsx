// import { IconArrowLeft } from "@tabler/icons-react";
// import Link from "next/link";
import { IconArrowRight } from '@tabler/icons-react';
import styles from './page.module.css'

const TeamsPage = () => {
  return (
    <div className="animate-fadeIn w-full flex gap-6 flex-grow items-stretch">
      <div className="h-full w-full flex flex-col gap-14 flex-grow text-neutralDark mt-12">
        {/* <Link href="/"><div className="w-full flex gap-2 opacity-70"><IconArrowLeft strokeWidth={1.2}/><span className="">Home</span></div></Link> */}
        {/* <div>
          <span className="text-6xl font-[family-name:var(--font-panamera-bold)] ">Projects</span>
        </div> */}
        <div>
          <span className="text-4xl font-extrabold px-16 lg:px-fluid-16-64">Our team</span>
        </div>
        <div className="w-full h-full flex flex-col justify-center items-center flex-wrap gap-[96px]">
          <div className="w-full flex flex-col gap-10 justify-center items-center">
            <div className="bg-neutralDark rounded-3xl w-[25rem] h-[25rem] rounded-full "></div>
            <div className="p-10 rounded-xl bg-neutralDark text-neutralLight-100 text-lg max-w-[60ch] leading-loose"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam molestias laborum provident fuga repellendus in officia aperiam a unde soluta. Laboriosam odio veritatis illo nulla iure officiis perspiciatis voluptates. Provident voluptatibus repellat dignissimos aliquid dolor. Dolore temporibus accusantium quisquam provident repellendus, fuga, repudiandae dolor iure aliquam sunt accusamus praesentium ullam.</p></div>
          </div>
          <div className="py-24 w-full flex flex-col gap-10 justify-center items-center bg-neutralDark ">
            <div className="bg-neutralLight-100 rounded-3xl w-[25rem] h-[25rem] rounded-full "></div>
            <div className="p-10 rounded-xl bg-neutralLight-100 text-neutralDark text-lg max-w-[60ch] leading-loose"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam molestias laborum provident fuga repellendus in officia aperiam a unde soluta. Laboriosam odio veritatis illo nulla iure officiis perspiciatis voluptates. Provident voluptatibus repellat dignissimos aliquid dolor. Dolore temporibus accusantium quisquam provident repellendus, fuga, repudiandae dolor iure aliquam sunt accusamus praesentium ullam.</p></div>
          </div>
          <div className="w-full flex flex-col gap-10 justify-center items-center">
            <div className="bg-neutralDark rounded-3xl w-[25rem] h-[25rem] rounded-full "></div>
            <div className="p-10 rounded-xl bg-neutralDark text-neutralLight-100 text-lg max-w-[60ch] leading-loose"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam molestias laborum provident fuga repellendus in officia aperiam a unde soluta. Laboriosam odio veritatis illo nulla iure officiis perspiciatis voluptates. Provident voluptatibus repellat dignissimos aliquid dolor. Dolore temporibus accusantium quisquam provident repellendus, fuga, repudiandae dolor iure aliquam sunt accusamus praesentium ullam.</p></div>
          </div>
          {/* <div className="bg-neutralDark rounded-3xl w-[24rem] h-[24rem]"></div> */}
        </div>
        <div className="w-full px-16 lg:px-fluid-16-64 flex gap-2 justify-end items-center mt-4">
          <span className={`text-4xl font-bold ${styles.contact__highlight}`}>Contact</span><IconArrowRight size={36} stroke={2.5} />
        </div>
      </div>
    </div>
  );
};

export default TeamsPage;