import Carousel from "react-spring-3d-carousel";
import { useState, useEffect } from "react";
import { IconChevronCompactLeft } from "@tabler/icons-react";

interface Carousel3DSlide {
    key: string,
    content: React.ReactNode
}

interface Carousel3DProps {
    slides: Carousel3DSlide[]
    className: string;
    offset?:number
    showArrows?: boolean
}

const wrap = (
    index: number, 
    length: number, 
    dir: "next" | "prev"
) => {
    switch(dir) {
        case "prev":
            if(index === 0) return length - 1;
            else return index - 1;
        case "next":
        default:
            if(index === length - 1) return 0;
            else return index + 1;
    }
}

export default function Carousel3D ({
    slides,
    className,
    offset,
    showArrows
} : Carousel3DProps) {
    const table = slides.map((element, index) => {
        return { ...element, onClick: () => setGoToSlide(index) };
      });
    
    const [current, setCurrent] = useState(0)
    const [goToSlide, setGoToSlide] = useState<number>(0);
    const [cards] = useState(table);

    useEffect(() => setCurrent(goToSlide), [goToSlide]);

    // console.log('current', current)
    
    return (
        <div className={`relative ${className}`}>
            {showArrows &&
                <div className="w-full mx-w-[1024px] absolute top-0 -translate-y-full left-0 right-0 mx-auto flex justify-between text-foreground">
                    <button 
                    className="hover:scale-105 active:scale-95 transition-transform"
                    onClick={() => setGoToSlide(prev => wrap(prev, slides.length, "prev"))}
                    >
                        <IconChevronCompactLeft size={40} stroke={3}/>
                    </button>
                    <button 
                    className="hover:scale-105 active:scale-95 transition-transform"
                    onClick={() => setGoToSlide(prev => wrap(prev, slides.length, "next"))}
                    >
                        <IconChevronCompactLeft size={40} stroke={3} className="scale-[-1]"/>
                    </button>
                </div>
            }
            <div className="w-full h-full overflow-hidden">
                <Carousel
                slides={cards}
                goToSlide={goToSlide}
                offsetRadius={offset || 2}
                showNavigation={false}
                />
            </div>
            <div className=" flex gap-1 mx-auto w-fit">
                {slides.map((item, index) => (
                    <div className={`h-[3px] bg-black/30 transition-all ${index === current ? 'w-14' : 'w-4'} rounded-full overflow-hidden`}>
                        <div className={`h-full bg-foreground transition-all duration-3000 ${index === current ? 'w-full' : 'w-0'}`}></div>
                    </div>
                ))}
            </div>
        </div>
    )

}