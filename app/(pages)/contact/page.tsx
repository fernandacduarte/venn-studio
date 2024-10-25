// import { IconArrowLeft } from "@tabler/icons-react";
// import Link from "next/link";
import { IconMail } from '@tabler/icons-react';
import styles from './page.module.css'

const ProjectsPage = () => {
  return (
    <div className="animate-fadeIn w-full p-4 min-[375px]:p-6 md:px-16 lg:px-fluid-16-64 flex gap-6 flex-grow items-stretch">
      <div className="h-full w-full flex flex-col gap-14 flex-grow text-neutralDark mt-12">
        {/* <Link href="/"><div className="w-full flex gap-2 opacity-70"><IconArrowLeft strokeWidth={1.2}/><span className="">Home</span></div></Link> */}
        {/* <div>
          <span className="text-6xl font-[family-name:var(--font-panamera-bold)] ">Projects</span>
        </div> */}
        <div>
          <span className="text-2xl min-[430px]:text-3xl md:text-4xl font-extrabold">Contact us!</span>
        </div>
        <div className='w-full flex flex-col gap-10 justify-center items-center mt-6'>
          <div className={`flex gap-3 justify-center items-center px-6 py-6 bg-neutralDark text-neutralLight-100 rounded-2xl ${styles.button}`}>
            <span className='hidden min-[500px]:block text-2xl sm:text-3xl md:text-4xl font-semibold '>Click here to send a message</span>
            <span className='text-2xl font-semibold min-[500px]:hidden'>Send a message</span>
            <div className='text-[28px] ms:text-[32px] md:text-[38px]'><IconMail size={'1em'} stroke={2} style={{ marginTop: '4px' }} /></div>
          </div>
          <span className='text-2xl min-[430px]:text-3xl md:text-4xl font-bold'>or</span>
          <div className="flex flex-wrap justify-center items-center text-2xl min-[430px]:text-3xl md:text-4xl font-semibold">
            e-mail us at&nbsp;<span className={`text-2xl min-[430px]:text-3xl md:text-4xl font-bold ${styles.email__highlight}`}>contact@vennstudio.xyz</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;