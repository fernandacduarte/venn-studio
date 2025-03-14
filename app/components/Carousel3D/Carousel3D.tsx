'use client'
import Carousel from "react-spring-3d-carousel";
import { useState, useEffect } from "react";
import { IconChevronCompactLeft } from "@tabler/icons-react";

export interface Carousel3DSlide {
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
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);
    const [touchStartTime, setTouchStartTime] = useState<number>(0);

    // Minimum swipe distance and velocity thresholds
    const minSwipeDistance = 50;
    const minSwipeVelocity = 0.5; // pixels per millisecond

    useEffect(() => setCurrent(goToSlide), [goToSlide]);

    const onTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
        setTouchStartTime(Date.now());
    };

    const onTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const duration = Date.now() - touchStartTime;
        const velocity = Math.abs(distance) / duration;

        // Check if swipe meets distance and velocity thresholds
        if (Math.abs(distance) >= minSwipeDistance && velocity >= minSwipeVelocity) {
            if (distance > 0) {
                // Swipe left, go to next slide
                setGoToSlide(prev => wrap(prev, slides.length, "next"));
            } else {
                // Swipe right, go to previous slide
                setGoToSlide(prev => wrap(prev, slides.length, "prev"));
            }
        }

        setTouchStart(null);
        setTouchEnd(null);
    };

    useEffect(() => setCurrent(goToSlide), [goToSlide]);

    // console.log('current', current)
    
    return (
        <div className={`relative ${className}`}>
            {showArrows &&
                <div className="w-full mx-w-[1024px] absolute top-0 -translate-y-full left-0 right-0 mx-auto flex justify-between text-foreground md:px-16 min-[375px]:px-6 px-4 lg:px-fluid-16-64">
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
            <div className="w-full h-full"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}            
            >
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