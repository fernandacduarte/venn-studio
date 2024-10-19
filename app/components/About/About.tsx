import { IconArrowUpRight } from '@tabler/icons-react';
// import Image from 'next/image';
import SimpleCard from '../SimpleCard/SimpleCard';
import Image from 'next/image';
import Link from 'next/link';

// PROX PASSO: testar para varias resoluções de tela e ver se fica bom do jeito que estar. Se não ficar, tentar alternativas abaixo:
// alternativa 1: colocar posição relative no header do container de About e posicionar a imagem de forma
// que fica sempre a uma mesma distância abaixo do header.
// alternativa 2: usar javascript para posicionar a imagem
// sempre a uma distancia x do header em funçao do evento de resize da janela
// --> colocar um estado de loading inicial da página para ter certeza de que a imagem está 
// no lugar certo

// const computeImageWidth = (width: number, height: number) => {
//   const aspectRatio = width / height;
//   const maxWidth = aspectRatio > 1 ? width : height;
//   return `clamp(200%, ${maxWidth}px, 250%)`;
// };

// PROX PASSO AQUI: continuar melhorando a responsividade da imagem

const About = () => {
  return (
    // <BlurCard backgroundColor="#121717">
      <SimpleCard backgroundColor="linear-gradient(340deg, #121717 50%, #1a2424 100%)">
        <Link href="/about">
          <div className="flex justify-between items-start text-neutralLight-100">
            {/* <div className="font-[family-name:var(--font-panamera-medium)] flex flex-col gap-2"> */}
            <div className="font-medium flex flex-col gap-2">
              <span className="tracking-[0.07em]">ABOUT US</span>
              {/* <span className="text-[3.5rem] leading-[4rem] w-full max-w-[20ch] tracking-[0.04em]">We are a <br />Web Development Studio</span> */}
              <span className="text-[3.75rem] font-medium leading-[4.5rem] w-full max-w-[20ch] tracking-[0.03em]">We are a Web Development Studio</span>
            </div>
            <div className="h-full mt-[-16px]">
              <IconArrowUpRight size={80} strokeWidth={1} />
            </div>
          </div>
          {/* <div className='absolute top-0 left-0 object-fill w-full h-full'>
            <div 
              // className="absolute top-fluid-200-300 left-fluid-90-120 opacity-70 transform-about-image" 
              className=" absolute opacity-70 overflow-hidden" 
              style={{ 
                // width: '200%', 
                // width: '250%',
                // width: `clamp(200%, ${-550 + 52.0833*1440}%, 250%)`,
                // width: `clamp(200%, 200%, 200%)`,
                //width: '963.41px',
                //top: '30px',
                //left: '-80px',
                // width: `1343.41px`,
                // top: '-280px',
                // top: '-90px',
                // left: '-380px',
                // left: '-270px',
                // top: 'clamp(-120px, -120px, -120px)',
                // transform: 'rotate(10deg)',
                // transformOrigin: 'center center', 
                // transformOrigin: 'top left', 
                position: 'absolute',
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <AboutOndulate />
            </div>
          </div> */}
          {/* <div 
            // className="absolute top-fluid-200-300 left-fluid-90-120 opacity-70 transform-about-image" 
            className="absolute top-[-120px] left-[-190px] opacity-70" 
            style={{ 
              // width: '200%', 
              // width: '250%',
              // width: `clamp(200%, ${-550 + 52.0833*1440}%, 250%)`,
              // width: `clamp(200%, 200%, 200%)`,
              width: `clamp(1523.41px, -6596.99px + 563.9167vw, 2064.77px)`,
              // top: '-280px',
              // left: '-380px',
              top: 'clamp(-280px, 2280px + -166.6667vw, -120px)',
              // top: 'clamp(-120px, -120px, -120px)',
              left: 'clamp(-380px, 2660px + -197.9167vw, -190px)',
              transform: 'rotate(10deg)',
              transformOrigin: 'center center', 
            }}
          >
            <Image
              // className="absolute top-[200px] left-[120px] opacity-70"
              // className="absolute top-[300px] left-[90px] opacity-70"
              // style={{ transform: 'scale(2) rotate(10deg)' }}
              // style={{ transform: 'scale(2.2) rotate(10deg)' }}
              // style={{
              //   height: 'auto',
              //   objectFit: 'contain',
              //   transform: 'rotate(10deg)',
              //   transformOrigin: 'center center',
              //   maxWidth: '200%',
              //   width: '2000px !important',
              // }}
              src="images/uuundulate9.svg"
              alt="About us"
              width={800}
              height={800}
              layout="responsive"
              priority
            />
          </div> */}
          {/* <div 
            className="w-full h-full absolute top-0 left-0 opacity-70 flex justify-center items-center" 
          >
            <Image
              style={{
                maxWidth: '200%',
                width: '200%',
                height: '200%',
                objectFit: 'cover',
                objectPosition: 'top 200px left 100px',
                rotate: '10deg',
              }}
              src="images/uuundulate9.svg"
              alt="About us"
              width={800}
              height={800}
              priority
            />
          </div> */}
          <div 
            className="w-[120%] h-[180%] absolute top-[-5%] left-0 opacity-70 flex justify-center items-center" 
            style={{  }}
          >
            <Image
              style={{
                maxWidth: '200%',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
              src="images/uuundulate9-2.svg"
              alt="About us"
              width={800}
              height={800}
              priority
            />
          </div>
      </Link>
    </SimpleCard>
  );
};

export default About;