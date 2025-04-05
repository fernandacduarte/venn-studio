
export default function CommingSoon () {

    return (
        <main className="relative w-screen h-screen">
            <img
            className="absolute z-0 top-0 left-0 w-full h-full object-cover"
            src="/images/comming_soon_bg.svg"
            alt="bg"
            loading="eager"
            />
            <div className="relative z-10 w-full h-full flex items-center justify-center px-4">
                <div className="lg:translate-y-1/3 flex flex-col gap-6">
                    <div className="flex gap-4 mx-auto">
                        <img
                        src="/images/venn-logo2.svg"
                        alt="logo"
                        width={78}
                        height='auto'
                        loading='eager'
                        className="w-[40px] min-[344px]:w-[48px] min-[460px]:w-[60px] md:w-[78px]"
                        />
                        <span className="font-[family-name:var(--font-montserrat)] font-extrabold tracking-[0.02em] text-[26px] text-[2rem] min-[460px]:text-[2.5rem] md:text-[3.25rem]">VENN <span className="ml-[2px]">STUDIO</span></span>
                    </div>
                    <div className="flex flex-col gap-4 text-center">
                        <h2 className="text-base min-[344px]:text-[1.25rem] min-[500px]:text-[1.5rem] md:text-[2rem] leading-normal">
                            This page is under construction.
                            <br/>
                            Check back soon.                    
                        </h2>
                        <p className="text-xs min-[344px]:text-sm md:text-base">
                            Interested in app/web development or digital consultancy?                            
                        </p>
                        <a
                        href=""
                        className="bg-[#211717] rounded-full text-[#ebebec] uppercase font-extrabold tracking-[0.02em] w-fit mx-auto px-10 py-2 text-base md:text-[1.125rem] transition-all hover:bg-highlight hover:text-[#211717] active:scale-95">
                            Click here
                        </a>
                    </div>            
                </div>
            </div>
        </main>
    )
}