import { Popover } from "flowbite-react";
import ME from '../../assets/ss/ME.png'

const PopoverMe = () => {
    return (
        <Popover
            placement="left-end"
            aria-labelledby="profile-popover"
            content={
                <div className="w-64 p-3">
                    <div className="mb-2 flex items-center justify-between">
                        <a href="https://github.com/piyush2053" className="transition-transform transform hover:scale-150 hover:z-10" target="_blank">
                            <img
                                className="h-10 w-10 rounded-full focus:border-0"
                                src={ME}
                                alt="Piyush Patel"
                            />
                        </a>
                        <div>
                            <a
                                href="https://github.com/piyush2053"
                                target="_blank"
                                className="rounded-lg bg-blue-700 px-3 py-1.5 text-xs font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Follow
                            </a>
                        </div>
                    </div>
                    <p id="profile-popover" className="text-base font-semibold leading-none text-gray-900 dark:text-white">
                        <a href="https://github.com/piyush2053" target="_blank">Piyush Patel</a>
                    </p>
                    <p className="mb-3 text-sm font-normal">
                        <a href="https://github.com/piyush2053" target="_blank" className="hover:underline">
                            @piyush2053
                        </a>
                    </p>
                    <p className="mb-4 text-sm" >
                        Full Stack Developer (TypeScript, React, Node.js) Builds complete web applications{' '}
                        <a href="https://github.com/piyush2053" target="_blank" className="text-blue-600 hover:underline dark:text-blue-500">
                            Repositories
                        </a>
                    </p>
                    <ul className="flex text-sm">
                        <li>
                            <div>
                                <span className="font-semibold text-gray-900 dark:text-white">3,758</span>
                                <span>Followers</span>
                            </div>
                        </li>
                    </ul>
                </div>
            }
        >
            <a className="inline-flex cursor-pointer font-bold h-8 items-center justify-center rounded-md bg-[#0E6ED6] px-5 text-sm text-white shadow transition-colors hover:bg-primary/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                Contact
            </a>
        </Popover>
    )
}

export default PopoverMe