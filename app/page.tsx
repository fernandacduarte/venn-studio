import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Team from "./components/Team/Team";
import Contact from "./components/Contact/Contact";

export default function Home() {
  // to-do: pensar em como calcular a altura e a largura da tela para manter a proporção dos elementos
  return (
    // <main className="h-[calc(100vh-90px-24px)] w-full font-[family-name:var(--font-panamera-regular)] px-16 flex gap-6 flex-grow items-stretch">
    // <main className="animate-fadeIn h-[657px] max-h-[657px] w-full max-w-[1440px] mx-auto font-[family-name:var(--font-panamera-regular)] px-16 lg:px-fluid-16-64 flex gap-6 flex-grow items-stretch">
    <main className="animate-fadeIn h-[calc(100vh-90px-24px)] w-full max-w-screen-2xl mx-auto font-[family-name:var(--font-panamera-regular)] px-16 lg:px-fluid-16-64 flex gap-6 flex-grow items-stretch">
      <About />
      <div className="h-full w-full flex flex-col gap-6 flex-grow">
        <div className="h-full max-h-[60%]">
          <Projects />
        </div>
        <div className="h-full max-h-[40%] flex gap-6">
          <Team />
          <Contact />
        </div>
      </div>
    </main>
  );
}
