'use client'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Children, useState } from "react";

interface CarouselSwipeableProps {
    className?:string;
    showNavigation?: boolean;
    children: React.ReactNode
}
export default function CarouselSwipeable ({
    className,
    showNavigation,
    children
}: CarouselSwipeableProps) {
    const [active, setActive] = useState(0);

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        beforeChange: (current: number, next: number) => setActive(next),
        responsive: [
            {
              breakpoint: 436,
              settings: {
                centerMode: false
              }
            }
        ]
    };

    return (
        <div className={className}>
            <Slider {...settings}>
                {children}
            </Slider>
            {showNavigation &&
                <div className="mt-10 flex gap-1 mx-auto w-fit">
                {Children.toArray(children).map((item, index) => (
                    <div className={`h-[3px] bg-black/30 transition-all ${index === active ? 'w-14' : 'w-4'} rounded-full overflow-hidden`}>
                        <div className={`h-full bg-foreground transition-all duration-3000 ${index === active ? 'w-full' : 'w-0'}`}></div>
                    </div>
                ))}
            </div>
            }
        </div>
    )

}