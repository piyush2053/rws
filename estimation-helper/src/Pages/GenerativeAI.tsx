import { useState } from 'react';
import Loader from '../assets/loader.gif'
import { URL } from '../utils/constants/contants'
import { SearchIcon, SendIcon, SettingsIcon } from "../Components/SmallChunks/svgs";
import { Button, Textarea } from "flowbite-react";
import { getCurrentEnv } from '../utils/funtions/funtion';

const GenAI = () => {
  const [question, setQuestion] = useState("")
  const [Searched, setSearched] = useState("")
  const [ResponseAI, setResponseAI] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const HandleAsk = (e:any) => {
    e.preventDefault();
    setSearched(question)
    setLoading(true)
    try {
      const API_ENDPOINT = getCurrentEnv() ? URL.GENAI_LOCAL : URL.GENAI_PROD
      fetch(`${API_ENDPOINT}/askai?query="${question}"`)
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
    <div className="flex flex-col bg-white m-2 rounded-lg shadow-xl">
      <div className="flex-1 overflow-auto p-6 space-y-4 rounded-lg" style={{maxHeight:"530px", overflowY:'auto'}}>
        <div className="flex items-start gap-2">
          <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg p-3 max-w-[80%] text-white font-thin text-sm">
            <p>Hi there! How can i help you today ?</p>
            <div className="text-[10px] text-white mt-1 font-thin">{new Date().toLocaleTimeString()}</div>
          </div>
        </div>
        <div className="flex items-start gap-4 justify-end">
          {Searched &&
            <div className="bg-[#007373] rounded-lg p-4 max-w-[80%] text-white text-sm">
              <p>
                {Searched}
              </p>
              <div className="text-xs text-primary-foreground/80 mt-2">{new Date().toLocaleTimeString()}</div>
            </div>
          }
        </div>
        <div className="flex items-start gap-4">
          {error !== "" ?
            <div className="bg-red-500 rounded-lg p-4 max-w-[80%] text-white">
              <div>Sorry Cant hear you !</div>
              <details className='cursor-pointer'>
                <summary>Advanced Details</summary>
                {error}
              </details>
            </div> : <>{ResponseAI &&
              <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg p-4 max-w-[80%]">
                {Object.entries(ResponseAI).map(([key, value]) => (
                  <div dangerouslySetInnerHTML={{ __html: value.replace(/\*/g, '').replace(/#/g, '').replace(/\n/g, '<br/>') }}></div>
                ))}
                <div className="text-xs text-muted-foreground mt-2">{new Date().toLocaleTimeString()}</div>
              </div>}</>}
        </div>
      </div>
      <div className="bg-muted/50 px-6 py-4 flex items-center gap-4">
        {loading ?
          <img src={Loader} className='h-8 px-auto mx-auto align-end' /> :
          <>
            <input
              value={question}
              type="text"
              onKeyPress={HandleKeyPress}
              onChange={HandleChange}
              placeholder="Ask something..."
              className="flex-1 text-[#616161] rounded-lg bg-[#ECEFF1] px-4 py-3 focus:outline-none focus:ring-0 focus:ring-0 text-sm border-0 font-thin"
            />
            <div onClick={HandleAsk} className='bg-[#0E6ED6] hover:bg-white hover:text-[#0E6ED6] p-2 px-3 rounded-lg text-white border-2 border-[#0E6ED6] cursor-pointer'>
              <SendIcon className="w-5 h-5" />
            </div>
          </>}
      </div>
    </div>
  )
}

export default GenAI