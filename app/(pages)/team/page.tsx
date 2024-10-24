// import { IconArrowLeft } from "@tabler/icons-react";
// import Link from "next/link";
import { IconArrowRight } from '@tabler/icons-react';
import styles from './page.module.css'
import Link from 'next/link';

const TeamsPage = () => {
  return (
    <div className="animate-fadeIn w-full flex gap-6 flex-grow items-stretch">
      <div className="h-full w-full flex flex-col gap-10 md:gap-14 flex-grow text-neutralDark mt-12">
        {/* <Link href="/"><div className="w-full flex gap-2 opacity-70"><IconArrowLeft strokeWidth={1.2}/><span className="">Home</span></div></Link> */}
        {/* <div>
          <span className="text-6xl font-[family-name:var(--font-panamera-bold)] ">Projects</span>
        </div> */}
        <div>
          <span className="text-4xl font-extrabold px-4 min-[375px]:px-6 md:px-16 lg:px-fluid-16-64">Our team</span>
        </div>
        <div className="w-full h-full flex flex-col lg:flex-row justify-center items-center">
          <div className="w-full lg:w-1/3 flex flex-col justify-center items-center">
            <div className='w-full px-2 py-10 sm:py-16 md:py-24 bg-neutralDark flex justify-center items-center'>
              <div className="bg-neutralLight-100 rounded-[50%] w-[25rem] " style={{ aspectRatio: 1 }} ></div>
            </div>
            <div className="w-full flex justify-center py-10 px-4 min-[375px]:px-6 md:p-10 bg-neutralDark lg:bg-neutralLight-100 text-neutralLight-100 lg:text-neutralDark text-base leading-loose min-[375px]:text-lg min-[375px]:leading-loose">
              <p className='max-w-[60ch]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam molestias laborum provident fuga repellendus in officia aperiam a unde soluta. Laboriosam odio veritatis illo nulla iure officiis perspiciatis voluptates. Provident voluptatibus repellat dignissimos aliquid dolor. Dolore temporibus accusantium quisquam provident repellendus, fuga, repudiandae dolor iure aliquam sunt accusamus praesentium ullam.</p>
            </div>
          </div>
          <div className="w-full lg:w-1/3 flex flex-col justify-center items-center">
            <div className='w-full px-2 py-10 sm:py-16 md:py-24 bg-neutralLight-100 flex justify-center items-center'>
              <div className="bg-neutralDark rounded-[50%] w-[25rem] " style={{ aspectRatio: 1 }} ></div>
            </div>
            <div className="w-full flex justify-center py-10 px-4 min-[375px]:px-6 md:p-10 bg-neutralLight-100 lg:bg-neutralDark text-neutralDark lg:text-neutralLight-100 text-base leading-loose min-[375px]:text-lg min-[375px]:leading-loose">
              <p className='max-w-[60ch]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam molestias laborum provident fuga repellendus in officia aperiam a unde soluta. Laboriosam odio veritatis illo nulla iure officiis perspiciatis voluptates. Provident voluptatibus repellat dignissimos aliquid dolor. Dolore temporibus accusantium quisquam provident repellendus, fuga, repudiandae dolor iure aliquam sunt accusamus praesentium ullam.</p>
            </div>
          </div>
          <div className="w-full lg:w-1/3 flex flex-col justify-center items-center">
            <div className='w-full px-2 py-10 sm:py-16 md:py-24 bg-neutralDark flex justify-center items-center'>
              <div className="bg-neutralLight-100 rounded-[50%] w-[25rem] " style={{ aspectRatio: 1 }} ></div>
            </div>
            <div className="w-full flex justify-center py-10 px-4 min-[375px]:px-6 md:p-10 bg-neutralDark text-neutralLight-100 lg:bg-neutralLight-100 lg:text-neutralDark text-base leading-loose min-[375px]:text-lg min-[375px]:leading-loose">
              <p className='max-w-[60ch]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam molestias laborum provident fuga repellendus in officia aperiam a unde soluta. Laboriosam odio veritatis illo nulla iure officiis perspiciatis voluptates. Provident voluptatibus repellat dignissimos aliquid dolor. Dolore temporibus accusantium quisquam provident repellendus, fuga, repudiandae dolor iure aliquam sunt accusamus praesentium ullam.</p>
            </div>
          </div>
        </div>
        <div className="w-full px-4 min-[375px]:px-6 md:px-16 lg:px-fluid-16-64 flex gap-2 justify-end items-center mt-4">
          <Link href='/contact'><div className="w-full flex gap-2 items-center"><span className={`text-2xl min-[375px]:text-3xl min-[500px]:text-4xl font-bold ${styles.contact__highlight}`}>Contact</span><IconArrowRight size={36} stroke={2.5} /></div></Link>
        </div>
      </div>
    </div>
  );
};

export default TeamsPage;