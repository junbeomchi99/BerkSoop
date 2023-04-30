import { useState } from "react";
import SearchFilter from "./Filter";

const SideBar = () => {
    const [inputValue, setInputValue] = useState('')

    return (
        <div className='w-1/4 h-screen bg-white gap-[30px]'>
            <SearchFilter onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setInputValue(e.target.value)}}/> 
        </div>
        )
}

export default SideBar;