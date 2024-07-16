import React from "react";

const ErrorPage = () => {
    return(
        <div className="flex mt-10 flex-col items-center justify-center px-4 text-center bg-white py-10 rounded-lg mx-5">
      <div className="max-w-md space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Oops! Something went wrong.</h1>
        <p className="text-muted-foreground">
          We're sorry, but the page you were trying to access is not available. Please try again later or navigate back
          to the homepage.
        </p>
        <a
          href="/"
          className="inline-flex hover:bg-white hover:text-[#007373] h-10 items-center justify-center rounded-md bg-[#007373] px-6 text-sm font-medium text-white shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        >
          Go to Homepage
        </a>
      </div>
    </div>
    )
}

export default ErrorPage