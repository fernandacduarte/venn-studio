import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Team from "./components/Team/Team";
import Contact from "./components/Contact/Contact";
import { usePathname } from "next/navigation";

export default function Home() {
  return (
    <main className="h-[calc(100vh-90px-24px)] w-full font-[family-name:var(--font-panamera-regular)] px-16 flex gap-6 flex-grow items-stretch">
      <About />
      <div className="h-full w-full flex flex-col gap-6 flex-grow">
        <Projects />
        <div className="h-full flex gap-6">
          <Team />
          <Contact />
        </div>
      </div>
    </main>
  );
}
