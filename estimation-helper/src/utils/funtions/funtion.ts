import { toast } from "react-toastify";

export const getCurrentEnv = ()=>{
    return window.location.hostname === 'localhost'   
}

export const handleCopy = (text: string) => {
  navigator.clipboard.writeText(text)
    .then(() => {
      toast.success('Copied to clipboard!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    })
    .catch(err => {
      console.error('Failed to copy text: ', err);
      toast.error('Failed to copy!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    });
};