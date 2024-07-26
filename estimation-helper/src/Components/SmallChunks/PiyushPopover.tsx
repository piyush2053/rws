import { Popover } from "flowbite-react";
import ME from '../../assets/ss/ME.png'
import { FaRegUser } from "react-icons/fa";
const AboutMe = () => {
    return (
        <div className="w-[190px] p-3 border-2 border-[#CFD8DC] rounded-lg">
                    <div className="mb-2 flex items-center justify-between">
                        <a href="https://github.com/piyush2053" className="transition-transform transform hover:scale-150 hover:z-10" target="_blank">
                            <img
                                className="h-10 w-10 rounded-full focus:border-none"
                                src={ME}
                                alt="Piyush Patel"
                            />
                        </a>
                        <div>
                            <a
                                href="https://github.com/piyush2053"
                                target="_blank"
                                className="rounded-lg bg-blue-700 px-3 py-1.5 text-xs font-medium text-white hover:bg-blue-400 bg-[#003D7F]"
                            >
                                Follow
                            </a>
                        </div>
                    </div>
                    <p id="profile-popover" className="text-sm font-semibold leading-none text-gray-900 dark:text-white">
                        <a href="https://github.com/piyush2053" target="_blank">Piyush Patel</a>
                    </p>
                    <p className="mb-3 text-xs font-normal">
                        <a href="https://github.com/piyush2053" target="_blank" className="hover:underline">
                            @piyush2053
                        </a>
                    </p>
                    <p className="mb-4 text-xs" >
                        Full Stack Developer (TypeScript, React, Node.js) Builds complete web applications{' '}
                        <a href="https://github.com/piyush2053" target="_blank" className="text-[#003D7F] hover:underline dark:text-blue-500">
                            Repositories
                        </a>
                    </p>
                </div>
    )
}

export default AboutMe