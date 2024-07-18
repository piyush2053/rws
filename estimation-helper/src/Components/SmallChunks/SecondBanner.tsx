import React from "react";
import '../../index.css'
const BannerSecond = () => {
    const videoElement = document.querySelector('video');
    if (videoElement) {
        videoElement.playbackRate = 3;
    } else {
        console.warn("No video element found");
    }
    return (
        <section className="bg-white w-[99%] px-10 my-2 mx-2 rounded-lg">
            <div className="flex justify-start">
                <div className="container flex flex-col items-start space-y-6 text-start">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter text-[#424242] sm:text-4xl md:text-5xl">
                            Estimate Efforts for a Project
                        </h2>
                        <p className="text-[#424242] md:text-sm font-thin">
                            Our Estimate Efforts Helper is a powerful tool designed for RWS managers and business analysts to streamline project estimation processes. By harnessing AI capabilities, this tool provides accurate project schedules, generates crucial assumptions and queries, and enhances overall planning and decision-making. It's designed to optimize project management efficiency, making it an indispensable asset for achieving precise and informed project estimations
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 min-[400px]:flex-row">
                        <a
                            href="/estimation"
                            className="inline-flex h-10 items-center justify-center rounded-md bg-[#007373] px-8 text-md font-medium text-white shadow transition-colors hover:bg-primary/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"

                        >
                            Start Estimating
                        </a>
                    </div>
                    <div className="h-[400px] relative">
                        <video loop muted className="h-[400px] rounded-lg" controls>
                            <source src={require('../../assets/videos/VideoSS.mp4')} />
                        </video>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default BannerSecond