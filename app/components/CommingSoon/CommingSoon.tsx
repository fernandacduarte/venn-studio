
export default function CommingSoon () {

    return (
        <main className="relative w-screen h-screen">
            <img
            className="absolute z-0 top-0 left-0 w-full h-full object-cover"
            src="/images/comming_soon_bg.svg"
            alt="bg"
            loading="eager"
            />
            <div className="relative z-10 w-full h-full flex items-center justify-center">
                <div className="translate-y-1/3 flex flex-col gap-6">
                    <div className="flex gap-4">
                        <img
                        src="/images/venn-logo2.svg"
                        alt="logo"
                        width={78}
                        height='auto'
                        loading='eager'
                        />
                        <span className="font-[family-name:var(--font-montserrat)] font-extrabold tracking-[0.02em] text-[3.25rem]">VENN <span className="ml-[2px]">STUDIO</span></span>
                    </div>
                    <div className="flex flex-col gap-4 text-center">
                        <h2 className="text-[2rem]">
                            This page is under construction.
                            <br/>
                            Check back soon.                    
                        </h2>
                        <p className="text-base">
                            Interested in app/web development or digital consultancy?                            
                        </p>
                        <a
                        href=""
                        className="bg-[#211717] rounded-full text-[#ebebec] uppercase font-extrabold tracking-[0.02em] w-fit mx-auto px-10 py-2 text-[1.125rem] transition-all hover:bg-highlight hover:text-[#211717] active:scale-95">
                            Click here
                        </a>
                    </div>            
                </div>
            </div>
        </main>
    )
}