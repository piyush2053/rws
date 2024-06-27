import React from "react";
import '../../index.css'
const BannerTop = () => {
    return (
        <section className="section w-[99%] p-10 my-2 mx-2 rounded-lg">
            <div className="flex justify-start">
            <div className="container flex flex-col items-start  space-y-6 text-left">
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
                        Generative AI
                    </h2>
                    <p className="text-white md:text-sm font-thin">
                    RWS has introduced a new generative AI feature developed by P-Gen-AI, designed for project estimation, content description, and image generation. This AI helps estimate project costs and timelines, generates detailed descriptions for various content types, and creates images based on text descriptions, streamlining processes and improving accuracy in project planning and content creation.
                    </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <a
                        href="#"
                        className="inline-flex h-10 items-center justify-center rounded-md bg-[#0E6ED6] px-8 text-md font-medium text-white shadow transition-colors hover:bg-primary/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                        
                    >
                        Get Started
                    </a>
                    <a
                        href="#"
                        className="inline-flex h-10 items-center justify-center rounded-md border border-primary-foreground bg-primary px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-primary-foreground/90 hover:text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                        
                    >
                        Learn More
                    </a>
                </div>
            </div>
            </div>
        </section>
    )
}

export default BannerTop