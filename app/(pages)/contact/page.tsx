// import { IconArrowLeft } from "@tabler/icons-react";
// import Link from "next/link";
import { IconCalendar } from '@tabler/icons-react';
import styles from './page.module.css'
import { AvailableNowIcon } from '@/app/components/Icons/Icons';

const ContactPage = () => {
  return (
    <div className="animate-fadeIn w-full max-w-screen-2xl mx-auto p-4 min-[375px]:p-6 md:px-16 lg:px-fluid-16-64 flex gap-6 flex-grow items-stretch text-xl md:text-2xl lg:text-[30px]">
      <div className="w-full flex flex-col gap-10 md:gap-14 xl:gap-20 flex-grow md:mt-8 xl:mt-12">
        {/* <Link href="/"><div className="w-full flex gap-2 opacity-70"><IconArrowLeft strokeWidth={1.2}/><span className="">Home</span></div></Link> */}
        {/* <div>
          <span className="text-6xl font-[family-name:var(--font-panamera-bold)] ">Projects</span>
        </div> */}
        <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12 max-w-[30ch]">
          <h1>Contact us!</h1>
          {/* <p className='leading-normal'>Ready to discuss your next project? Let's connect for a no-obligation consultation.</p> */}
        </div>
        <div className='w-full flex flex-col flex-1 gap-10 justify-center items-center md:mt-6'>
          <p className='leading-normal max-w-[30ch] text-center'>Ready to discuss your next project? Let's connect for a no-obligation consultation.</p>
          <div className='flex flex-col gap-6 items-center'>
            <div className='flex gap-2 items-center'><AvailableNowIcon/><span className='text-xs md:text-sm lg:text-base font-semibold opacity-70'>Slots availabe</span></div>
            <a className={`flex gap-5 justify-center items-start px-10 py-6 bg-foreground text-background rounded-2xl ${styles.button}`}
            href='https://vennstudio.zohobookings.com/#/4748907000000045134'
            target='_blank'
            rel='noopener noreferrer'
            >
              <div className='text-[28px] sm:text-[32px] md:text-[38px]'><IconCalendar size={'1em'} stroke={2} /></div>
              <h2>Book a call</h2>
              {/* <span className='text-2xl font-semibold min-[500px]:hidden'>Send a message</span> */}
            </a>
          </div>
          {/* <h2 >or</h2>
          <p className='text-2xl md:text-3xl lg:text-4xl'>
            e-mail us at&nbsp;<span className={`font-bold ${styles.email__highlight}`}>contact@vennstudio.dev</span>
          </p> */}
        </div>
        <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 max-w-[30ch]">
          <a 
          className={`font-bold w-fit ${styles.email__highlight}`}
          href='mailto:contact@vennstudio.dev'
          >
            contact@vennstudio.dev
          </a>
          <span className='text-lg md:text-xl lg:text-2xl'>
            CNPJ: 56.056.578/0001-14
            <br/>
            Tel: +55 21 96461 4862
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;