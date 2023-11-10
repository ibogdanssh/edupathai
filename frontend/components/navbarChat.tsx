import "../src/App.css"
import { useState } from "react"


const NavBar = () => {
    return (
        <>
        <div className="flex justify-center items-center absolute h-24 w-screen border-[1.5px] border-solid border-b-gray-300 font-Ubuntu">

            <div className="flex absolute h-10 w-screen justify-start items-center">
                <img className="object-contain h-20" src="../images/Batman-Logo.png"></img>
                <h1 className="text-black text-3xl relative ml-3">EduPathAi</h1>
            </div>

            <div className="flex absolute h-10 w-screen justify-center items-center">
                <ul className="flex flex-row">
                    <a href="#"><li className="text-[1.5rem] mr-20 text-gray-500">Conversations</li></a>
                    <a href="#"><li className="text-[1.5rem] mr-20 text-gray-500">Shortcodes</li></a>
                    <a href="#"><li className="text-[1.5rem] text-gray-500">Contact</li></a>
                </ul>
            </div>

            <div className="flex justify-end items-center h-10 absolute w-screen">
                    <a href="#" className="relative right-5"><img src="../images/bell.png" className="object-contain w-10 h-10"></img>
                    <div className="absolute bottom-8 left-9 bg-red-700 rounded-full w-2 h-2"></div>
                    </a>
                <img src="../images/avatar.jpg" alt="profilePicture" className="relative left-5 object-contain w-14 h-14 rounded-full border-[3px] border-solid border-b-gray-900 mr-10"></img>
            </div>
        </div>
        </>
    )
};

export default NavBar;