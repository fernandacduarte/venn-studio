'use client'
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

interface MenuIconProps {
    isOpen: boolean
}


const menuItems = [
    {
        pathname: '/',
        el: <Link href='/'>home</Link>
    },
    {
        pathname: '/about',
        el: <Link href='/about'>about</Link>
    },
    {
        pathname: '/projects',
        el: <Link href='/projects'>projects</Link>,
    },
    {
        pathname: '/team',
        el: <Link href='/team'>team</Link>
    },
    {
        pathname: '/contact',
        el:<Link href='/contact'>contact</Link>
    }
]

export default function Menu() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const handleClick = useCallback(() => {
        timeoutRef.current = setTimeout(() => {
            setIsOpen(false);
        }, 350);
    }, [setIsOpen]);

    useEffect(() => {
        return () => {
            if(timeoutRef.current) clearTimeout(timeoutRef.current);
        }
    }, [])

    return (
        <div className={`relative ${isOpen ? 'z-50' : 'z-20'}`}>
            <button onClick={() => setIsOpen(prev => !prev)}>
                <MenuIcon isOpen={isOpen}/>
            </button>
            <div
                onClick={() => setIsOpen(false)} 
                className={`fixed top-0 left-0 z-0 w-screen h-screen bg-black/[0.6] transition-opacity duration-250 ease-out ${
                    isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                style={{ transitionDelay: isOpen ? '0ms' : '250ms' }}
            ></div>
            <div className={`fixed h-screen w-80 bg-neutralLight-100 z-10 top-0 right-0 transition-transform duration-250 ease-out ${
                    isOpen ? '' : 'translate-x-full'
                }`}
                style={{ transitionDelay: isOpen? '250ms' : '0ms' }}
            >
                <div className="w-full h-full p-6 flex flex-col gap-12 align-start">
                    <Image
                        className="m-2"
                        src={'images/venn-logo2.svg'}
                        alt="Logo"
                        width={36}
                        height={36}
                        priority
                    />
                    <ul className="m-2 flex flex-col gap-8 text-2xl">
                        {menuItems.map((item, index) => (
                            <li key={index}
                            className={`transition-all duration-300 ease-in-out ${isOpen ? 'translate-y-1 opacity-100' : 'opacity-0 translate-y-0'}`}
                            style={{  
                                fontWeight: `${pathname === item.pathname ? '700' : ''}`,
                                transitionDelay: `${isOpen ? index * 50 + 250 : 0}ms`
                            }}
                            onClick={handleClick}
                            >
                                {item.el}
                            </li>
                        ))}
                    </ul>                    
                </div>

            </div>
        </div>
    )
}
function MenuIcon ({ isOpen } : MenuIconProps) {
    const openClassTop = "-rotate-45 translate-y-[5px]";
    const openClassBottom = "rotate-45 -translate-y-[5px]"
    return (
        <div className="h-3 w-6 relative z-20">
            <div className={`h-0.5 w-6 bg-black absolute top-0 left-0 transition-all ${isOpen ? openClassTop : ''}`}></div>
            <div className={`h-0.5 w-6 bg-black absolute bottom-0 left-0 transition-all ${isOpen ? openClassBottom : ''}`}></div>
        </div>
    )
}
