import React from "react";

export default function SlowMotion ({ 
    className,
    children
}: {
    className?: string
    children: React.ReactNode
}) {
    return (
        <div className={`${className} animate-slowRotate`}>
            <div className="w-full animate-swingX">
                {children}
            </div>
        </div>
    )
}