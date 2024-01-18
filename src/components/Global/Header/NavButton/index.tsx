import { Menu, Transition } from '@headlessui/react'
import { useTheme } from 'next-themes'
import { Fragment, useEffect, useRef, useState } from 'react'

export default function NavButton() {
    const { theme } = useTheme();
    const [ colorTheme, setColorTheme ] = useState('')

    useEffect(() => {
        const tema = localStorage.getItem('theme')
        setColorTheme(tema || 'dark')
    }, [theme])
    return (
        <div className=" text-right">
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button className="inline-flex w-full justify-center rounded-md bg-none px-4 py-2 text-sm font-medium duration-200 text-white hover:scale-125 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="32" height="32" 
                            fill={`${colorTheme === 'light' ? '#141414' : '#FFFFFF'}`} 
                            viewBox="0 0 256 256">
                            <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z">
                            </path>
                        </svg>
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-300"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-300"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 border-[1px] bg-white border-[#141414] dark:border-white  rounded-md dark:bg-[#141414] shadow-lg ring-1 ring-black/5 focus:outline-none">
                        <div className="px-1 py-1 ">
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className={`${active ? ' text-[#141414] dark:text-white' : ''
                                            } group flex w-full items-center rounded-md text-[#141414] dark:text-white px-2 py-2 text-sm`}
                                    >
                                        SOBRE MIM
                                    </button>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className={`${active ? ' text-[#141414] dark:text-white' : ''
                                            } group flex w-full items-center rounded-md px-2 text-[#141414] dark:text-white py-2 text-sm`}
                                    >
                                       
                                        PROJETOS
                                    </button>
                                )}
                            </Menu.Item>
                        </div>
                        <div className="px-1 py-1">
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className={`${active ? ' ' : ''
                                            } group flex w-full items-center rounded-md text-[#141414] dark:text-white px-2 py-2 text-sm duration-200`}
                                    >
                                        
                                        CONTATO
                                    </button>
                                )}
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    )
}
