import { useState } from 'react';
import { FaCopy } from "react-icons/fa";
import Loader from '../assets/bot.png'
import { URL } from '../utils/constants/contants'
import { Button, Tooltip } from "flowbite-react";
import { getCurrentEnv, handleCopy } from '../utils/funtions/funtion';
import { FaRegUser } from "react-icons/fa";
import { BiSend } from "react-icons/bi";
import LoaderIOS from '../Components/SmallChunks/IosLoder';

export default function GenAI() {
  const [question, setQuestion] = useState("")
  const [Searched, setSearched] = useState("")
  const [ResponseAI, setResponseAI] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [copied, setCopied] = useState(false)
  const HandleAsk = (e: any) => {
    e.preventDefault();
    setSearched(question)
    setQuestion('')
    setLoading(true)
    try {
      const API_ENDPOINT = getCurrentEnv() ? URL.GENAI_LOCAL : URL.GENAI_PROD_vercel
      fetch(`${API_ENDPOINT}/?query="${question}" and if someone ask code in this query so give the resposne that "Piyush has not taught me coding, Sorry cant help you. and also dont give this note Note: If you ask for code, I will respond with "Piyush has not taught me coding, Sorry I can't help you." "`)
        .then(response => response.json())
        .then(data => {
          setResponseAI(data);
          setLoading(false)
          setQuestion('')
          setError(``)
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          setError(`${error}`);
          setQuestion('')
          setLoading(false)
        });

    } catch (error) {
      console.log(error)
      setLoading(false)
      setError(`${error}`)
    }
  }

  const HandleChange = (e: any) => {
    e.preventDefault()
    setQuestion(e.target.value)
  }

  const HandleKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      HandleAsk(e);
    }
  };
  return (
    <>
      <div className="flex flex-col mx-10 bg-white my-5 rounded-2xl shadow-xl max-h-[600px] ">
        <header className="flex items-center justify-between px-6 py-4 border-b">
          <div className="flex items-center gap-2">
            <BotIcon className="w-6 h-6 text-primary text-[#0E6ED6] shadow-lg rounded-lg animate-pulse" />
            <h1 className="text-lg font-medium">Assistant</h1>
          </div>
        </header>
        <div className="flex-1 overflow-auto p-6">
          <div className="space-y-4">
            <div className="flex items-start gap-3 mb-5">
              <div>
                <img src={Loader} className='h-5 rounded-full' />
              </div>
              <div className="bg-muted rounded-lg px-1 max-w-[75%] py-auto text-[#616161] animate-typing">
                <p>Hello! I'm an AI assistant. How can I help you today?</p>
              </div>
            </div>

            {Searched &&
              <div className="flex items-start gap-3 justify-end">
                <div className="bg-primary text-primary-foreground rounded-lg max-w-[75%] text-[#616161]">
                  <p>{Searched}</p>
                </div>
                <FaRegUser className='py-auto my-auto text-[#007373]' />
              </div>
            }
            {loading ?
              <div className="flex items-start gap-3 mb-5">
                <LoaderIOS />
              </div>
          :
          <>{ResponseAI && <div className="flex items-start gap-3 mb-3">
            <img src={Loader} className='h-5 rounded-full' />
            <div className="bg-muted rounded-lg px-1 max-w-[75%] flex mb-3" >
              <p className='text-[#616161]'>
                {Object.entries(ResponseAI).map(([key, value]) => (
                  <div dangerouslySetInnerHTML={{ __html: value.replace(/\*/g, '').replace(/#/g, '').replace(/\n/g, '<br/>') }}></div>
                ))}
              </p>
              <Tooltip content={`${copied ? "Copied" : "Copy"}`} arrow={false} className="text-[12px] bg-white text-[#007373] shadow-md">
                <FaCopy className={copied ? 'text-[#CFD8DC] text-sm my-auto mx-auto ml-4 ' : 'ml-4 text-[#90A4AE] text-sm my-auto mx-auto cursor-pointer'} onClick={() => { handleCopy(Object.entries(ResponseAI).map(([key, value]) => value.replace(/\*/g, '').replace(/#/g, '').replace(/\n/g, '')).join('')); setCopied(true); }} />
              </Tooltip>
            </div>
          </div>}</>
          }
        </div>
        <div className="border-t p-4 ">
        <form className="flex items-center gap-2">
          <input value={question}
            onKeyPress={HandleKeyPress}
            onChange={HandleChange}
            placeholder="Ask something..." className="tracking-wider flex-1 border-none focus:ring-0 focus:outline-none text-[#616161] text-sm" autoComplete="off" />
          <Button onClick={HandleAsk} size="icon" className='p-1 bg-[#0E6ED6] px-2'>
            <BiSend className='h-5' />
          </Button>
        </form>
      </div>
      </div>
      
    </div >
    </>
  )
}

function BotIcon(props: any) {
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
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </svg>
  )
}

