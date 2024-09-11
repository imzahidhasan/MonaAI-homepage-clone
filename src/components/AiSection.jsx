import React from 'react';
import chatroom from '../assets/chatroom.png';
const AIProductPage = () => {
    return (
        <div className=" text-white ">
            {/* Header */}
            <header className="text-center py-12">
                <h1 className="text-4xl font-bold">MONA AI: Unleashing 5 Groundbreaking AI Tools</h1>
            </header>

            {/* Tabs */}
            <div className="flex justify-center space-x-4 py-4">
                <button className="bg-teal-500 text-white py-2 px-6 rounded-md focus:outline-none hover:bg-teal-600">
                    Chatroom
                </button>
                <button className="bg-gray-700 text-white py-2 px-6 rounded-md focus:outline-none hover:bg-gray-600">
                    YouTube Translation
                </button>
                <button className="bg-gray-700 text-white py-2 px-6 rounded-md focus:outline-none hover:bg-gray-600">
                    AI Video Subtitles
                </button>
                <button className="bg-gray-700 text-white py-2 px-6 rounded-md focus:outline-none hover:bg-gray-600">
                    Images Generation
                </button>
                <button className="bg-gray-700 text-white py-2 px-6 rounded-md focus:outline-none hover:bg-gray-600">
                    AI Assistant
                </button>
            </div>

            {/* Main Section */}
            <div className="flex justify-between py-12">
                <div className="">
                    {/* Left Column - Text */}
                    <div className="text-center md:text-left  space-y-5 md:pl-52">
                        <h2 className="header-font mb-[20px] text-[20px] font-[500] text-white/[0.9] lg:text-[40px]">Connect Globally with AI-Powered Chatroom</h2>
                        <p className="font-inter text-[16px] text-white/[0.55] lg:text-[20px]">
                            Connect globally with our Chatroom feature, using AI translation for seamless and meaningful conversations.
                        </p>

                        {/* Features */}
                        <ul className="mt-[40px]"><li className="font-inter mb-[24px] flex items-start gap-[16px] text-[16px]  lg:text-[18px]"><span><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M11.759 0.25C10.1354 9.0693 8.81923 10.3854 0 12.009C8.8193 13.6327 10.1354 14.9488 11.759 23.7681C13.3827 14.9488 14.6988 13.6327 23.5181 12.009C14.6988 10.3854 13.3826 9.0693 11.759 0.25ZM24.5217 16.7945C23.4893 22.4032 22.6521 23.2403 17.0434 24.2728C22.6521 25.3053 23.4893 26.1424 24.5217 31.7511C25.5542 26.1424 26.3914 25.3052 31.9999 24.2728C26.3912 23.2403 25.5542 22.4032 24.5217 16.7945Z" fill="#5AC2AC"></path></svg></span><span>Chat with people worldwide in your native language.</span></li><li className="font-inter mb-[24px] flex items-start gap-[16px] text-[16px]  lg:text-[18px]"><span><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M11.759 0.25C10.1354 9.0693 8.81923 10.3854 0 12.009C8.8193 13.6327 10.1354 14.9488 11.759 23.7681C13.3827 14.9488 14.6988 13.6327 23.5181 12.009C14.6988 10.3854 13.3826 9.0693 11.759 0.25ZM24.5217 16.7945C23.4893 22.4032 22.6521 23.2403 17.0434 24.2728C22.6521 25.3053 23.4893 26.1424 24.5217 31.7511C25.5542 26.1424 26.3914 25.3052 31.9999 24.2728C26.3912 23.2403 25.5542 22.4032 24.5217 16.7945Z" fill="#5AC2AC"></path></svg></span><span>Utilize AI-powered translation for smooth communication.</span></li><li className="mt-[66px] flex w-full items-center justify-center gap-[16px] text-[18px] lg:justify-start">
                            <a className=" font-inter font-500 block w-full rounded-[12px]  px-0 py-[19px] text-center bg-[#2d9f89] text-white text-[16px]  lg:inline lg:w-auto lg:px-[36px] lg:text-[20px]" href="#">Try it for free</a>
                        </li>
                        </ul>

                        {/* Button */}

                    </div>
                </div>

                {/* Right Column - Image */}
                <div className="">
                    <img
                        src={chatroom}
                        alt="AI Chat"
                        className="rounded-lg max-w-xl  shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default AIProductPage;
