import { useState } from 'react';
import Loader from '../assets/loader.gif'
import { URL } from '../utils/constants/contants'
import { Button } from "flowbite-react";
import { getCurrentEnv } from '../utils/funtions/funtion';
import { FaRegUser } from "react-icons/fa";
import { BiSend } from "react-icons/bi";

export default function GenAI() {
  const [question, setQuestion] = useState("")
  const [Searched, setSearched] = useState("")
  const [ResponseAI, setResponseAI] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
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
    <div className="flex flex-col mx-20 bg-white my-5 rounded-2xl shadow-xl max-h-[600px] ">
      <header className="flex items-center justify-between px-6 py-4 border-b">
        <div className="flex items-center gap-2">
          <BotIcon className="w-6 h-6 text-primary text-[#0E6ED6] shadow-lg rounded-lg" />
          <h1 className="text-lg font-medium">Assistant</h1>
        </div>
      </header>
      <div className="flex-1 overflow-auto p-6">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div>
              <img src={Loader} className='h-5' />
            </div>
            <div className="bg-muted rounded-lg px-1 max-w-[75%] py-auto text-[#616161]">
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
            <div className="flex items-start gap-3">
              <img src={Loader} className='h-5' />
              <div className="bg-[#B2DFDB] animate-pulse rounded-full py-4 w-[40%] shadow-xl ">
              </div>
            </div>
            :
            <>{ResponseAI && <div className="flex items-start gap-3">
              <img src={Loader} className='h-5' />
              <div className="bg-muted rounded-lg px-1 max-w-[75%]">
                <p className='text-[#616161]'>
                  {Object.entries(ResponseAI).map(([key, value]) => (
                    <div dangerouslySetInnerHTML={{ __html: value.replace(/\*/g, '').replace(/#/g, '').replace(/\n/g, '<br/>') }}></div>
                  ))}
                </p>
              </div>
            </div>}</>
          }

        </div>
      </div>
      <div className="border-t p-4 ">
        <form className="flex items-center gap-2">
          <input value={question}
            onKeyPress={HandleKeyPress}
            onChange={HandleChange}
            placeholder="Ask something..." className="tracking-wider flex-1 border-none focus:ring-0 focus:outline-none text-[#616161] text-sm" autoComplete="off" />
          <Button onClick={HandleAsk} size="icon" className='p-1 bg-[#0E6ED6] px-2'>
            <BiSend className='h-5'/>
          </Button>
        </form>
      </div>
    </div>
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


function SendIcon(props: any) {
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
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  )
}


function XIcon(props: any) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}