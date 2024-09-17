'use client';
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  console.log('pathname', pathname);

  // PROX PASSO AQUI: ver se fica bom sublinhar o link corrente com o mesmo tom de amarelo de Projects
  // (de repente fazendo um rabiscado no ffflux)

  return (
    <nav className="h-[90px] text-xl mb-1 py-6 px-16 max-lg-sticky top-0 flex gap-8 justify-between items-center ">
      <div className="flex gap-3 items-center">
        <Image
          src={'images/venn-logo2.svg'}
          alt="Logo"
          width={36}
          height={36}
          priority
        />
        <span className="font-[family-name:var(--font-montserrat)] font-extrabold tracking-[0.02em] text-[1.5rem]">VENN <span className="ml-[2px]">STUDIO</span></span>
      </div>

      <ul className="font-[family-name:var(--font-panamera-medium)] flex gap-8 items-center">
        <li className="cursor-pointer hover:scale-105 active:scale-95 transition-transform duration-300 " style={{  fontFamily: `${pathname === '/' ? 'var(--font-panamera-bold)' : ''}` }}>home</li>
        <li className="cursor-pointer hover:scale-105 active:scale-95 transition-transform duration-300 " style={{  fontFamily: `${pathname === '/about' ? 'var(--font-panamera-bold)' : ''}` }}>about</li>
        <li className="cursor-pointer hover:scale-105 active:scale-95 transition-transform duration-300 " style={{  fontFamily: `${pathname === '/projects' ? 'var(--font-panamera-bold)' : ''}` }}>projects</li>
        <li className="cursor-pointer hover:scale-105 active:scale-95 transition-transform duration-300 " style={{  fontFamily: `${pathname === '/team' ? 'var(--font-panamera-bold)' : ''}` }}>team</li>
        <li className="cursor-pointer hover:scale-105 active:scale-95 transition-transform duration-300 " style={{  fontFamily: `${pathname === '/contact' ? 'var(--font-panamera-bold)' : ''}` }}>contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;