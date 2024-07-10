import React from "react";
import { EmbeddedUrls } from "../utils/constants/contants";

const TimeSheet = () => {
    return (
        <div className="m-5 animate-fade">
            <div className="flex flex-col items-center justify-center bg-background px-4 mt-6">
                <div className="mx-auto max-w-md text-center">
                    <WrenchIcon className="mx-auto h-12 w-12 text-primary" />
                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Coming Soon</h1>
                    <p className="mt-4 text-muted-foreground">
                        We're working hard to bring you an amazing new feature. Please check back soon!
                    </p>
                </div>
            </div>
            <iframe src={`${EmbeddedUrls.IPACE}`} width="100%" loading="lazy" referrerPolicy="strict-origin-when-cross-origin" className=" rounded-lg h-[99%] mt-5 animate-pulse"></iframe>
        </div>
    )
}

export default TimeSheet


function WrenchIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
    )
}