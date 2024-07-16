import React from "react";
import '../../index.css'
import { Spinner } from "flowbite-react";
const LoaderIOS = () => {
    return (
        <Spinner aria-label="Default status example" className="mb-5 ml-7" color={"info"}/>
    )
}

export default LoaderIOS;