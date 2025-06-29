import React from 'react'
import { ChevronDown, CloudDownload, Phone, UsersRound, Database } from 'lucide-react';
import { Menu } from 'lucide-react';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
function Header() {
    return (
        <div className="sticky top-0 z-50">
            {/* destop view */}
            <div className='bg-sky-950 justify-between  md:p-8 item-center md:h-24 text-white hidden md:flex w-full'>
                <div className=' lg:ml-15 xl:ml-35 hover:cursor-pointer' ><img src="https://fexspace.com/_nuxt/img/logo-wht.a88553c.svg" alt="oy" className='w-[103px] h-[23.22px] md:w-[140px] md:h-[31.58px] ' /></div>
                <div className='flex space-x-6'>
                    <div className="relative group inline-flex items-center space-x-1 cursor-pointer">
                        <span>Features</span>
                        <ChevronDown />

                        {/* Dropdown appears only on hover */}
                        <div className="absolute top-full mt-2 left-0 w-[500px] lg:w-[800px] 
                  bg-white text-black bg-opacity-90 p-4 rounded 
                  opacity-0 pointer-events-none 
                  group-hover:opacity-100 group-hover:pointer-events-auto 
                  transition-opacity duration-300 z-50">

                            <div className="flex gap-x-8">
                                <div className="w-1/2">
                                    <div className="flex items-center text-blue-500 p-2 font-bold space-x-1">
                                        <CloudDownload />
                                        <h1>Cloud File Management</h1>
                                    </div>
                                    <hr className="border-gray-200 mb-4" />
                                    <div className='flex justify-between'>
                                        <div className='space-y-3'>
                                            <div>
                                                <h1 className="font-bold text-sm">Cloud Storage</h1>
                                                <p className="text-gray-600 text-xs">
                                                    Save files in your secured cloud workspace and access across multiple devices</p>
                                            </div>
                                            <div>
                                                <h1 className="font-bold text-sm">Secure Public Folder</h1>
                                                <p className="text-gray-600 text-xs">
                                                    Keep your folders even when used together.
                                                </p>
                                            </div>
                                        </div>
                                        <div >
                                            <div>
                                                <h1 className="font-bold text-sm">Secured Team Shared Folder</h1>
                                                <p className="text-gray-600 text-xs">
                                                    Save and organize your team’s work files in a shared and secure space
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='space-y-2 mt-5'>
                                        <div className="flex items-center text-blue-500 p-2 font-bold space-x-1">
                                            <UsersRound />
                                            <h1>Team Collaboration</h1>
                                        </div>
                                        <hr className="border-gray-200 mb-4" />
                                        <div className='flex justify-between'>
                                            <div className='space-y-3'>
                                                <div>
                                                    <h1 className="font-bold text-sm">Teams</h1>
                                                    <p className="text-gray-600 text-xs"> Collaborate with ur team even remotely.</p>
                                                </div>
                                                <div>
                                                    <h1 className="font-bold text-sm">Task</h1>
                                                    <p className="text-gray-600 text-xs">Oreganize task to have a visual perspective of where ur work stands</p>
                                                </div>
                                            </div>
                                            <div className='space-y-3'>
                                                <div>
                                                    <h1 className="font-bold text-sm">Project</h1>
                                                    <p className="text-gray-600 text-xs">
                                                        Set project scope and achieve more</p>
                                                </div>
                                                <div>
                                                    <h1 className="font-bold text-sm">Shared Calender</h1>
                                                    <p className="text-gray-600 text-xs">
                                                        Share calendars together so it's easier to remember them together.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="w-1/2 space-y-9">
                                    <div className='space-y-2' >
                                        <div className="flex items-center text-blue-500 p-2 font-bold space-x-1">
                                            <Phone />
                                            <p>Seamless Communication</p>
                                        </div>
                                        <hr className="border-gray-200 mb-4" />
                                        <div className='flex justify-between'>
                                            <div className='space-y-3'>
                                                <div>
                                                    <h1 className="font-bold text-sm">Chats</h1>
                                                    <p className="text-gray-600 text-xs">
                                                        From direct messages to group conversations in channels</p>
                                                </div>
                                                <div>
                                                    <h1 className="font-bold text-sm">Metting Calender</h1>
                                                    <p className="text-gray-600 text-xs">
                                                        Use the online calendar feature to schedule your meetings
                                                    </p>
                                                </div>
                                            </div>
                                            <div>
                                                <h1 className="font-bold text-sm">Video Calls & Meetings</h1>
                                                <p className="text-gray-600 text-xs">
                                                    Meet your colleagues online with a face-to-face feel.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-center text-blue-500 p-2 font-bold space-x-1">
                                            < Database />
                                            <p>Self Managed-Server</p>
                                        </div>
                                        <hr className="border-gray-200 mb-4" />
                                        <div className='flex justify-between'>
                                            <div className='space-y-3'>
                                                <div>
                                                    <h1 className="font-bold text-sm">Full Control</h1>
                                                    <p className="text-gray-600 text-xs">
                                                        Managing your own server gives you full control.</p>
                                                </div>
                                                <div>
                                                    <h1 className="font-bold text-sm">Security</h1>
                                                    <p className="text-gray-600 text-xs">
                                                        Optimized security levels for admins.
                                                    </p>
                                                </div>
                                                <div>
                                                    <h1 className="font-bold text-sm">Easy to Deploy & Administer</h1>
                                                    <p className="text-gray-600 text-xs">
                                                        Easy to design and implement to make projects faster.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className='space-y-3'>
                                                <div>
                                                    <h1 className="font-bold text-sm">Scalability</h1>
                                                    <p className="text-gray-600 text-xs">
                                                        No matter the size of your workforce.
                                                    </p>
                                                </div>
                                                <div>
                                                    <h1 className="font-bold text-sm">Customization</h1>
                                                    <p className="text-gray-600 text-xs">
                                                        Customize your server as you like to get maximum results
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="border-b-0 hover:border-b-4 "> Community</div>
                    <div className="border-b-0 hover:border-b-4 ">Pricing</div>
                    <div className="border-b-0 hover:border-b-4 ">Support</div>
                </div>
                <div className='lg:mr-10 xl:mr-40'>
                    <span className='cursor-pointer'> Sign Up</span> <span className="border border-white border-2 rounded-xl p-2 ml-5 cursor-pointer">Try For Free</span>
                </div>
            </div>

            <div className='bg-sky-950 flex justify-between p-5 item-center h-16 text-white md:hidden '>
                <div className=' hover:cursor-pointer' ><img src="https://fexspace.com/_nuxt/img/logo-wht.a88553c.svg" alt="oy" className='w-[103px] h-[23.22px]' /></div>
                <div className='text-white flex space-x-2 font-bold'>
                    <div>Sign In</div>
                    <Sheet>
                        <SheetTrigger>
                            <Menu />
                        </SheetTrigger>

                      <SheetContent className="w-screen max-h-[99vh] overflow-y-auto p-1 space-y-4" side="top">
                            <div className="space-y-6 p-2 w-[90%] mx-auto">

                                {/* Section: Cloud File Management */}
                                <div>
                                    <SheetTitle>
                                        <div className="flex items-center text-blue-500 p-2 font-bold space-x-2 text-sm">
                                            <CloudDownload />
                                            <h1>Cloud File Management</h1>
                                        </div>
                                        <hr className="border-gray-200 mb-4" />
                                    </SheetTitle>
                                    <SheetDescription className="text-xs space-y-4">
                                        <div>
                                            <h2 className="font-bold text-black">Cloud Storage</h2>
                                            <p>Save files in your secured cloud workspace and access across multiple devices.</p>
                                        </div>
                                        <div>
                                            <h2 className="font-bold text-black">Secured Team Shared Folder</h2>
                                            <p>Save and organize your team's work files in a shared and secure space.</p>
                                        </div>
                                        <div>
                                            <h2 className="font-bold text-black">Secure Public Folder</h2>
                                            <p>Keep your folders even when used together.</p>
                                        </div>
                                    </SheetDescription>
                                </div>

                                {/* Section: Team Collaboration */}
                                <div>
                                    <SheetTitle>
                                        <div className="flex items-center text-blue-500 p-2 font-bold space-x-2 text-sm">
                                            <UsersRound />
                                            <h1>Team Collaboration</h1>
                                        </div>
                                        <hr className="border-gray-200 mb-4" />
                                    </SheetTitle>
                                    <SheetDescription className="text-xs space-y-4">
                                        <div>
                                            <h2 className="font-bold text-black">Teams</h2>
                                            <p>Collaborate with your team even remotely.</p>
                                        </div>
                                        <div>
                                            <h2 className="font-bold text-black">Projects</h2>
                                            <p>Set project scopes and achieve more.</p>
                                        </div>
                                        <div>
                                            <h2 className="font-bold text-black">Tasks</h2>
                                            <p>Organize tasks and get a visual perspective of your work status.</p>
                                        </div>
                                        <div>
                                            <h2 className="font-bold text-black">Shared Calendar</h2>
                                            <p>Share calendars to help teams remember events together.</p>
                                        </div>
                                    </SheetDescription>
                                </div>

                                <div>
                                    <SheetTitle>
                                        <div className="flex items-center text-blue-500 p-2 font-bold space-x-2 text-sm">
                                            <Phone />
                                            <h1>Seamless Communication</h1>
                                        </div>
                                        <hr className="border-gray-200 mb-4" />
                                    </SheetTitle>
                                    <SheetDescription className="text-xs space-y-4">
                                        <div>
                                            <h2 className="font-bold text-black">Chat</h2>
                                            <p>From direct messages to group conversation in channels.</p>
                                        </div>
                                        <div>
                                            <h2 className="font-bold text-black">Video Calls & Meetings</h2>
                                            <p>Mett your colleagues online with a face-to-face feel.</p>
                                        </div>
                                        <div>
                                            <h2 className="font-bold text-black">Meeting Calender</h2>
                                            <p>Use the online calender feature to schedule your meetings.</p>
                                        </div>
                                    </SheetDescription>
                                </div>
                                <div>
                                    <SheetTitle>
                                        <div className="flex items-center text-blue-500 p-2 font-bold space-x-2 text-sm">
                                            <Database />
                                            <h1>Self-Managed Server</h1>
                                        </div>
                                        <hr className="border-gray-200 mb-4" />
                                    </SheetTitle>
                                    <SheetDescription className="text-xs space-y-4">
                                        <div>
                                            <h2 className="font-bold text-black">Full Control</h2>
                                            <p>Managing your own server gives you full control.</p>
                                        </div>
                                        <div>
                                            <h2 className="font-bold text-black">Scalability</h2>
                                            <p>No matter the size the size of your workforce.</p>
                                        </div>
                                        <div>
                                            <h2 className="font-bold text-black">Security</h2>
                                            <p>Optimize security level for admins.</p>
                                        </div>
                                        <div>
                                            <h2 className="font-bold text-black">Customization</h2>
                                            <p>Easy to design and implement to make projects faster.</p>
                                        </div>
                                        <div>
                                            <h2 className="font-bold text-black">Easy To Deploy & Aminister</h2>
                                            <p>Easy to design and implement to make projects faster.</p>
                                        </div>
                                    </SheetDescription>
                                </div>

                            </div>
                        </SheetContent>
                    </Sheet>

                </div>
            </div>
        </div>
    )
}

export default Header
