import { Button, Popover } from "flowbite-react";
import React from "react";

const PopoverMe = () => {
    return (
        <Popover
            placement="left-end"
            aria-labelledby="profile-popover"
            content={
                <div className="w-64 p-3">
                    <div className="mb-2 flex items-center justify-between">
                        <a href="#">
                            <img
                                className="h-10 w-10 rounded-full"
                                src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                                alt="Jese Leos"
                            />
                        </a>
                        <div>
                            <button
                                type="button"
                                className="rounded-lg bg-blue-700 px-3 py-1.5 text-xs font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Follow
                            </button>
                        </div>
                    </div>
                    <p id="profile-popover" className="text-base font-semibold leading-none text-gray-900 dark:text-white">
                        <a href="#">Jese Leos</a>
                    </p>
                    <p className="mb-3 text-sm font-normal">
                        <a href="#" className="hover:underline">
                            @jeseleos
                        </a>
                    </p>
                    <p className="mb-4 text-sm">
                        Open-source contributor. Building{' '}
                        <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">
                            flowbite.com
                        </a>
                        .
                    </p>
                    <ul className="flex text-sm">
                        <li className="me-2">
                            <a href="#" className="hover:underline">
                                <span className="font-semibold text-gray-900 dark:text-white">799</span>
                                <span>Following</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                <span className="font-semibold text-gray-900 dark:text-white">3,758</span>
                                <span>Followers</span>
                            </a>
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