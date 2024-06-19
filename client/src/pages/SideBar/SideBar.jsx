import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
} from "@material-tailwind/react";
   
import { TbChevronUp } from "react-icons/tb";

export default function SideBar() {
    const nav = useNavigate();
    
    const [openMenu, setOpenMenu] = useState(false)

    const clickBasicNote = () => {
        nav('/create-note')
    }

    return (
        <div className="mr-auto h-screen border-r min-w-64 max-w-96 w-1/3 ">
            <div className="w-full pt-10 flex flex-col">
                <Menu>
                    <MenuHandler>
                        <Button color='green' className="w-fit mx-auto text-xl" > Create a Note 
                        </Button>
                    </MenuHandler>
                    <MenuList>
                        <MenuItem onClick={clickBasicNote}>Basic Note</MenuItem>
                        <Menu
                        placement="right-start"
                        open={openMenu}
                        handler={setOpenMenu}
                        allowHover
                        offset={15}>
                        <MenuHandler className="flex items-center justify-between">
                            <MenuItem>
                            Course Note
                            <TbChevronUp
                                strokeWidth={2.5}
                                className={`h-3.5 w-3.5 transition-transform ${
                                openMenu ? "rotate-90" : ""
                                }`}
                            />
                            </MenuItem>
                        </MenuHandler>
                        <MenuList open>
                            <MenuItem>Physics</MenuItem>
                            <MenuItem>Calculus</MenuItem>
                            <MenuItem>Nested Item 3</MenuItem>
                        </MenuList>
                        </Menu>
                        <MenuItem>Item 3</MenuItem>
                    </MenuList>
                </Menu>
                
                <div className="pt-6"/>

                <Button color='light-blue' className="w-fit mx-auto text-xl" 
                    onClick={() => nav('/my-notes')}> 
                    View My Notes 
                </Button>

                {/* <button className="bg-green-500 border-green-500 rounded-md border-8 text-white hover:bg-green-600 hover:border-green-600 duration-150 text-2xl mx-auto shadow-md"><a href={'/create-note'}>Create a Note</a></button> */}
            </div> 
        </div>
    )
}