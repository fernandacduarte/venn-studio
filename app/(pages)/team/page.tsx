import { IconArrowLeft } from "@tabler/icons-react";
// import Link from "next/link";
import { IconBrandLinkedin, IconBrandX } from '@tabler/icons-react';
import styles from './page.module.css'
import Link from 'next/link';
import Image from 'next/image';
import HighlightLink from '@/app/components/HighlightLink/HighlightLink';



const TeamsPage = () => {
  return (
    <div className="animate-fadeIn w-full max-w-screen-2xl mx-auto flex gap-6 flex-grow items-stretch px-4 min-[375px]:px-6 md:px-16 lg:px-fluid-16-64 overflow-hidden">
      <div className="h-full w-full flex flex-col gap-12 md:gap-14 xl:gap-20 md:gap-16 flex-grow md:mt-8 xl:mt-12">
        <h1>Meet the team</h1>
        <div className='flex flex-wrap justify-center gap-10 xl:gap-12'>

          <div className='w-full max-w-[530px] flex flex-col items-center gap-10 md:gap-12 xl:gap-16 min-[360px]:p-6 md:p-10'>
            <div className='w-full relative'>
              <div className='absolute z-0 top-0 left-0 right-0 mx-auto -translate-y-[12%] -translate-x-[12%] md:-translate-y-[20%] md:-translate-x-[20%] w-fit animate-slowGlow'>
                <div className='animate-swingY'>
                  <div className='bg-slate-400 opacity-30 rounded-full w-[300px] h-[300px] animate-swingX'></div>
                </div>
              </div>
              <div className='relative mx-auto z-10 w-full max-w-[285px] rounded-full bg-gradient-to-b from-[#121717] to-[#696969] overflow-hidden grayscale'
              style={{ aspectRatio: 1 }}
              >
                <Image
                  src='/images/mugs/be.png'
                  alt="Bernardo's mugshot"
                  fill
                  className='object-contain'
                  />
              </div>
            </div>
            <div className='flex flex-col items-start gap-2'>
              <h2>Bernardo Franceschin</h2>
              <span className='text-base md:text-lg xl:text-[22px] font-light'>Founding member, full-stack developer, smart contract engineer.</span>
              <div className='w-full flex justify-start gap-8 py-2 md:py-4'>
                <a href="" className='w-6 text-[1.5rem] md:text-[1.75rem] xl:text-[2rem] opacity-70 hover:opacity-100'>
                  <IconBrandLinkedin size={'1em'}/>
                </a>
                <a href="" className='w-6 text-[1.5rem] md:text-[1.75rem] xl:text-[2rem] opacity-70 hover:opacity-100'>
                  <IconBrandX size={'1em'}/>
                </a>
              </div>
            </div>
          </div>

          <div className='w-full max-w-[530px] flex flex-col items-center gap-10 md:gap-12 xl:gap-16 min-[360px]:p-6 md:p-10'>
            <div className='w-full relative'>
              <div className='absolute z-0 top-0 left-0 right-0 mx-auto -translate-y-[12%] translate-x-[10%] md:-translate-y-[20%] md:translate-x-[20%] w-fit animate-slowGlow'>
                <div className='animate-swingY'>
                  <div className='bg-slate-400 opacity-30 rounded-full w-[300px] h-[300px] animate-swingX'></div>
                </div>
              </div>
              <div className='relative z-10 w-full max-w-[285px] mx-auto rounded-full bg-gradient-to-b from-[#121717] to-[#696969] overflow-hidden grayscale'
              style={{ aspectRatio: 1 }}
              >
                <Image
                src='/images/mugs/pedro.png'
                alt="Pedro's mugshot"
                fill
                className='object-contain'
                />
              </div>
            </div>
            <div className='flex flex-col items-start gap-2'>
              <h2>Pedro Franceschin</h2>
              <span className='text-base md:text-lg xl:text-[22px] font-light'>Founding member, full-stack developer, smart contract engineer.</span>
              <div className='w-full flex justify-start gap-8 py-2 md:py-4'>
                <a href="" className='w-6 text-[1.5rem] md:text-[1.75rem] xl:text-[2rem] opacity-70 hover:opacity-100'>
                  <IconBrandLinkedin size={'1em'}/>
                </a>
                <a href="" className='w-6 text-[1.5rem] md:text-[1.75rem] xl:text-[2rem] opacity-70 hover:opacity-100'>
                  <IconBrandX size={'1em'}/>
                </a>
              </div>
            </div>
          </div>

          <div className='w-full max-w-[530px] flex flex-col items-center gap-10 md:gap-12 xl:gap-16 min-[360px]:p-6 md:p-10'>
            <div className='w-full relative z-0'>
              <div className='absolute z-0 top-0 left-0 right-0 mx-auto translate-y-[8%] md:translate-y-[12%] -translate-x-[12%] md:-translate-x-[20%] w-fit animate-slowGlow'>
                <div className='animate-swingY'>
                  <div className='bg-slate-400 opacity-30 rounded-full w-[300px] h-[300px] animate-swingX'></div>
                </div>
              </div>
              <div className='relative z-10 w-full max-w-[285px] mx-auto rounded-full bg-gradient-to-b from-[#121717] to-[#696969] overflow-hidden'
              style={{ aspectRatio: 1 }}
              >
                <Image
                  src='/images/mugs/fe.png'
                  alt="Fernanda's mugshot"
                  fill
                  className='object-contain'
                  />
              </div>
            </div>
            <div className='relative z-10 flex flex-col items-start gap-2'>
              <h2>Fernanda Duarte</h2>
              <span className='text-base md:text-lg xl:text-[22px] font-light'>Founding member, front-end developer, ux/ui engineer, designer.</span>
              <div className='w-full flex justify-start gap-8 py-2 md:py-4'>
                <a href="" className='w-6 text-[1.5rem] md:text-[1.75rem] xl:text-[2rem] opacity-70 hover:opacity-100'>
                  <IconBrandLinkedin size={'1em'}/>
                </a>
                <a href="" className='w-6 text-[1.5rem] md:text-[1.75rem] xl:text-[2rem] opacity-70 hover:opacity-100'>
                  <IconBrandX size={'1em'}/>
                </a>
              </div>
            </div>
          </div>

        
        </div>
        <div className="w-full flex justify-end mt-10 md:mt-16 xl:mt-20">
          <HighlightLink name="Contact" href="/contact" />
        </div>
        {/* <div className="w-full h-full flex flex-col lg:flex-row justify-center items-center relative">
          <div className="w-full lg:w-1/3 flex flex-col justify-center items-center group">
          <div className='absolute top-0 left-0 w-full h-full backdrop-grayscale pointer-events-none transition-all duration-300 group-hover:backdrop-filter-none'></div>
            <div className='w-full px-2 py-10 sm:py-16 md:py-24 bg-neutralDark flex justify-center items-center'>
              <div className="bg-neutralLight-100 rounded-[50%] w-[25rem] overflow-hidden flex items-center" style={{ aspectRatio: 1 }} >
                <Image src={'/images/pedro.jpg'} alt='pedro' height={638.47} width={500} className='w-full' />
              </div>
            </div>
            <div className="w-full flex justify-center py-10 px-6 min-[375px]:px-8 md:p-10 bg-neutralDark lg:bg-neutralLight-100 text-neutralLight-100 lg:text-neutralDark text-base leading-loose min-[375px]:text-lg min-[375px]:leading-loose">
              <div className='flex flex-col items-start gap-4 min-[375px]:gap-10'>
                <span className='text-xl italic font-bold'>Co-owner</span>
                <p className='max-w-[60ch]'>Full-stack dev, smart contract engineer. All things decentralized, explode all power structures.</p>
                <div className='flex w-2/3 justify-between font-semibold'>
                  <span className={styles.links}>Website</span>
                  <span className={styles.links}>X</span>
                  <span className={styles.links}>LikedIn</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/3 flex flex-col justify-center items-center relative">
            <div className='absolute top-0 left-0 w-full h-full backdrop-grayscale hover:backdrop-filter-none '></div>
            <div className='w-full px-2 py-10 sm:py-16 md:py-24 bg-neutralLight-100 flex justify-center items-center'>
              <div className="bg-neutralDark rounded-[50%] w-[25rem] overflow-hidden flex items-center " style={{ aspectRatio: 1 }} >
                
              </div>
            </div>
            <div className="w-full flex justify-center py-10 px-6 min-[375px]:px-8 md:p-10 bg-neutralLight-100 lg:bg-neutralDark text-neutralDark lg:text-neutralLight-100 text-base leading-loose min-[375px]:text-lg min-[375px]:leading-loose">
              <p className='max-w-[60ch]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam molestias laborum provident fuga repellendus in officia aperiam a unde soluta. Laboriosam odio veritatis illo nulla iure officiis perspiciatis voluptates. Provident voluptatibus repellat dignissimos aliquid dolor. Dolore temporibus accusantium quisquam provident repellendus, fuga, repudiandae dolor iure aliquam sunt accusamus praesentium ullam.</p>
            </div>
          </div>
          <div className="w-full lg:w-1/3 flex flex-col justify-center items-center relative">
            <div className='absolute top-0 left-0 w-full h-full backdrop-grayscale hover:backdrop-filter-none '></div>
            <div className='w-full px-2 py-10 sm:py-16 md:py-24 bg-neutralDark flex justify-center items-center'>
              <div className="bg-neutralLight-100 rounded-[50%] w-[25rem] overflow-hidden flex items-center" style={{ aspectRatio: 1 }} ></div>
            </div>
            <div className="w-full flex justify-center py-10 px-6 min-[375px]:px-8 md:p-10 bg-neutralDark text-neutralLight-100 lg:bg-neutralLight-100 lg:text-neutralDark text-base leading-loose min-[375px]:text-lg min-[375px]:leading-loose">
              <p className='max-w-[60ch]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam molestias laborum provident fuga repellendus in officia aperiam a unde soluta. Laboriosam odio veritatis illo nulla iure officiis perspiciatis voluptates. Provident voluptatibus repellat dignissimos aliquid dolor. Dolore temporibus accusantium quisquam provident repellendus, fuga, repudiandae dolor iure aliquam sunt accusamus praesentium ullam.</p>
            </div>
          </div>
        </div> */}
        {/* <div className="w-full px-4 min-[375px]:px-6 md:px-16 lg:px-fluid-16-64 flex gap-2 justify-end items-center mt-4">
          <Link href='/contact'><div className="w-full flex gap-2 items-center"><span className={`text-2xl min-[375px]:text-3xl min-[500px]:text-4xl font-bold ${styles.contact__highlight}`}>Contact</span><IconArrowRight size={36} stroke={2.5} /></div></Link>
        </div> */}
      </div>
    </div>
  );
};

export default TeamsPage;