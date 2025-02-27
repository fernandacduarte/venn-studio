'use client';
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Menu from "../Menu/Menu";

const Navbar = () => {
  const pathname = usePathname();

  // to-do: ver se fica bom sublinhar o link corrente com o mesmo tom de amarelo de Projects
  // (de repente fazendo um rabiscado no ffflux)

  //to-do: trocar largura maxima

  return (
    <nav className="h-[90px] w-full max-w-screen-2xl mx-auto text-xl mb-2 py-6 px-4 min-[375px]:px-6 lg:px-fluid-16-64 max-lg-sticky top-0 flex gap-8 justify-between items-center">
      <Link href='/'>
        <div className="flex gap-3 items-center cursor-pointer">
          <Image
            src={'/images/venn-logo2.svg'}
            alt="Logo"
            width={36}
            height={36}
            priority
          />
          <span className="hidden min-[500px]:block font-[family-name:var(--font-montserrat)] font-extrabold tracking-[0.02em] text-[1.5rem]">VENN <span className="ml-[2px]">STUDIO</span></span>
        </div>
      </Link>

      <div className="block lg:hidden">
        <Menu/>
      </div>

      <ul className="hidden font-medium lg:flex gap-8 items-center">
        {/* <li className="cursor-pointer hover:scale-105 active:scale-95 transition-transform duration-300 " style={{  fontFamily: `${pathname === '/' ? 'var(--font-panamera-bold)' : ''}` }}>home</li> */}
        <Link href='/'><li className="cursor-pointer hover:scale-105 active:scale-95 transition-transform duration-300 " style={{  fontWeight: `${pathname === '/' ? '700' : ''}` }}>home</li></Link>
        <Link href='/about'><li className="cursor-pointer hover:scale-105 active:scale-95 transition-transform duration-300 " style={{  fontWeight: `${pathname === '/about' ? '700' : ''}` }}>about</li></Link>
        <Link href='/projects'><li className="cursor-pointer hover:scale-105 active:scale-95 transition-transform duration-300 " style={{  fontWeight: `${pathname === '/projects' ? '700' : ''}` }}>projects</li></Link>
        <Link href='/team'><li className="cursor-pointer hover:scale-105 active:scale-95 transition-transform duration-300 " style={{  fontWeight: `${pathname === '/team' ? '700' : ''}` }}>team</li></Link>
        <Link href='/contact'><li className="cursor-pointer hover:scale-105 active:scale-95 transition-transform duration-300 " style={{  fontWeight: `${pathname === '/contact' ? '700' : ''}` }}>contact</li></Link>
      </ul>
    </nav>
  );
};

export default Navbar;