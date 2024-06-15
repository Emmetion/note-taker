import React from "react"
import { IoIosPaper } from "react-icons/io";


export default function TopBar() {
    return (
    <div className="w-screen h-16 border-b-2 border-b-black">
        <div className="ml-5 w-fit h-full flex items-center justify-center">
            <p className="text-center text-3xl flex flex-row"><IoIosPaper className="my-auto"/>{' '}Note-Taker</p>
        </div>
    </div>)
}