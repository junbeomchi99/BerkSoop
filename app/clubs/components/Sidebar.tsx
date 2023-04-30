"use client"
import { useState } from "react";
import SearchFilter from "./Filter";

const UseSideBar = () => {
    const [inputValue, setInputValue] = useState('')

    const sideBar = () => {
        <div className='w-1/4 h-screen bg-white gap-[30px]'>
            <SearchFilter onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setInputValue(e.target.value)}}/> 
        </div>
    }

    return [inputValue, setInputValue, sideBar]
}

export default UseSideBar;