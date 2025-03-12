import Carousel from "react-spring-3d-carousel";
import { useState, useEffect } from "react";

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
    
    return (
        <div className={className}>
            <Carousel
            slides={cards}
            goToSlide={goToSlide}
            offsetRadius={offset || 2}
            showNavigation={showArrows || false}
            />
        </div>
    )

}