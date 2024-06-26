import React, { useState, useEffect, SetStateAction } from "react";
import { ApiData, URL } from "../utils/constants/contants";
import Loader from '../assets/loader.gif'
import AI from '../assets/aiRWS.png'
import del from '../assets/close.png'
import '../index.css'
const ModalAI: React.FC<{ data: any , close:SetStateAction<any>}> = ({ data, close }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [error1, setError1] = useState(false);
    const [apiData, setApiData] = useState<ApiData | null>(null);

    const API_ENDPOINT = window.location.hostname === 'localhost'
        ? URL.GENAI_LOCAL
        : URL.GENAI_PROD

    useEffect(() => {
        fetch(`${API_ENDPOINT}/askai?query="${JSON.stringify(data)} Here calculate the Scehdule of this project from efforts days of this project, consider efforts days are full to be utilized by each resource 100% so calculate the Person days, Assume that we have task like this Task 1: Requirements Gathering (3 days) Task 2: Design Task 3: Development Task 4: Testing Task 5: Deployment Divide accordingly"`)
            .then(response => response.json())
            .then(data => {
                setApiData(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setError1(true);
            });
    }, []);

    const handleGenerate = async (e:any) => {
        setLoading(true)
        setError(false)
        e.preventDefault();
        try {
            const apiUrl = window.location.hostname === 'localhost'
                ? URL.LOCAL
                : URL.PROD
            const postData = { ...data, ai_input: apiData };
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(postData),
            });

            if (!response.ok || response.status !== 200) {
                setLoading(false)
                setError(true)
                throw new Error('Failed to fetch');
            } else {
                const blob = await response.blob();
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.style.display = 'none';
                a.href = url;
                a.download = `${data?.projectName}-Estimate.xlsx`;
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
                document.body.removeChild(a);
                setLoading(false)
                setError(false)
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    return (
        <div className={`fixed inset-0 z-50 flex items-center justify-center backdrop-filter backdrop-blur-sm animate-fade`} >
            <div className="bg-white rounded-lg p-8 w-full max-w-lg mx-4 shadow-2xl" style={{ border: '5px solid linear-gradient(to bottom right, #007373, #00bf63)' }}>
                <div className="mb-6 bg-red p-1">
                    {apiData ? (
                        <>
                        <div className="flex justify-between">
                            <img alt="ai" src={AI} className="h-5 rounded-full mb-4 animate-fade" />
                            <div onClick={()=>close(false)} className="cursor-pointer hover:animate-pulse" title="Close"><img alt='closemodal' src={del} className='h-4 w-4 rounded-full' /></div>
                            </div>
                            <ul className="custom-scrollbar p-2 bg-[#ECEFF1] rounded-lg">
                                {Object.entries(apiData).map(([key, value]) => (
                                    <li key={key} className="text-[12px]">
                                        <div dangerouslySetInnerHTML={{ __html: value.replace(/\*/g, '').replace(/\#/g, '').replace(/\n/g, '<br/>') }} />
                                    </li>
                                ))}

                            </ul>
                        </>
                    ) : (
                        <div className="flex justify-center">
                            <img src={Loader} alt="loading gif" className="h-10 w-10" />
                            {error1 && <label className="block text-xs font-medium text-gray-700 justify-center py-1">Error, Please try to reload</label>}
                        </div>
                    )}
                </div>
                {apiData &&
                    <div className={`flex ${loading ? 'justify-center' : 'justify-between'}`}>
                        {!loading &&
                            <div className="flex">
                                <button
                                    onClick={handleGenerate}
                                    disabled={loading}
                                    className={`bg-[#007373] text-white text-[10px] py-2 px-4 rounded-lg hover:bg-[#009688] focus:outline-none focus:bg-[#009688] justify-center mr-2`}>
                                    Generate Excel
                                </button>
                            </div>
                        }
                        {loading && <img alt='loading 1' src={Loader} className="h-6 w-6 mr-3" />}
                    </div>
                }
                {error &&
                    <div className='flex justify-center mt-2 bg-[#FFCDD2] border-1 border-[#EF5350] rounded-sm'>
                        <label className="block text-xs font-medium text-gray-700 justify-center py-1">
                            Error, Please try again
                        </label>
                    </div>
                }
            </div>
        </div >
    );
};

export default ModalAI;
