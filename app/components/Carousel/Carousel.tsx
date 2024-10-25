'use client'

interface CarouselProps {
    className?: string;
    items: any[]
}

export default function Carousel ({ className, items }: CarouselProps) {
    return (
        <div className="overflow-hidden relative h-full w-full">
            <div className="flex w-fit gap-4 h-full absolute left-0 animate-carousel">
                {items.map((item, i) => (
                    <div key={`1${i}`} className={className}>
                        {item}
                    </div>
                ))}
                {items.map((item, i) => (
                    <div key={`2${i}`} className={className}>
                        {item}
                    </div>
                ))}
            </div>
        </div>
    )

}