import React from "react"

export default function SideBar() {
    return (
        <div className="mr-auto w-1/4 h-screen border-r min-w-64 max-w-96">
            <div className="w-full pt-10 flex">
                <button className="bg-green-500 border-green-500 rounded-md border-8 text-white hover:bg-green-600 hover:border-green-600 duration-150 text-2xl mx-auto shadow-md"><a href={'/create-note'}>Create a Note</a></button>
            </div> 
        </div>
    )
}