'use client'
import { useState } from "react"

interface MenuIconProps {
    isOpen: boolean
}


export default function () {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <button onClick={() => setIsOpen(prev => !prev)}>
            <MenuIcon isOpen={isOpen}/>
        </button>
    )
}

function MenuIcon ({ isOpen } : MenuIconProps) {
    const openClassTop = "-rotate-45 translate-y-[5px]";
    const openClassBottom = "rotate-45 -translate-y-[5px]"
    return (
        <div className="h-3 w-6 relative">
            <div className={`h-0.5 w-6 bg-black absolute top-0 left-0 transition-all ${isOpen ? openClassTop : ''}`}></div>
            <div className={`h-0.5 w-6 bg-black absolute bottom-0 left-0 transition-all ${isOpen ? openClassBottom : ''}`}></div>
        </div>
    )
}