import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Team from "./components/Team/Team";
import Contact from "./components/Contact/Contact";

export default function Home() {
  // to-do: pensar em como calcular a altura e a largura da tela para manter a proporção dos elementos
  return (
    // <main className="h-[calc(100vh-90px-24px)] w-full font-[family-name:var(--font-panamera-regular)] px-16 flex gap-6 flex-grow items-stretch">
    // <main className="animate-fadeIn h-[657px] max-h-[657px] w-full max-w-[1440px] mx-auto font-[family-name:var(--font-panamera-regular)] px-16 lg:px-fluid-16-64 flex gap-6 flex-grow items-stretch">
    <main className="animate-fadeIn h-full sm:h-[calc(100vh-90px-24px)] min-h-[820px] min-[460px]:min-h-[800px] min-[840px]:min-h-[660px] lg:min-h-[537px] w-full max-w-screen-2xl mx-auto px-4 min-[375px]:px-6 lg:px-fluid-16-64 flex flex-col lg:flex-row gap-4 sm:gap-6 flex-grow items-stretch">
      <div className="h-[40%] min-[840px]:h-[50%] lg:h-full w-full lg:w-1/2 max-[639px]:flex max-[639px]:flex-grow max-[639px]:items-stretch">
        <About />
      </div>
      <div className="h-[60%] min-[840px]:h-[50%] lg:h-full w-full lg:w-1/2 flex flex-col min-[840px]:flex-row lg:flex-col gap-4 flex-grow max-[639px]:items-stretch">
        <div className="h-full w-full min-[840px]:w-3/5 lg:w-full lg:max-h-[60%]">
          <Projects />
        </div>
        <div className="h-full w-full min-[840px]:w-2/5 lg:w-full lg:max-h-[40%] flex flex-col flex-grow items-stretch min-[460px]:flex-row min-[840px]:flex-col lg:flex-row gap-4">
          <Team />
          <Contact />
        </div>
      </div>
    </main>
  );
}

// PROX PASSO AQUI: ver como configurar as alturas dos cards quando a altura da main não está definida explicitamente (bkp < 640px)