import React from "react";
import Image from 'next/image'

type Props = {
    icon: any
    children: React.ReactNode
    size: string //textIcon-sm(height:18px) textIcon-lg(height:25px)
}

const IconText = ({icon, children, size, ...rest}: Props) => {
    return(
        <div className={`iconText ${size}`} {...rest}>
            <Image priority src={icon} alt='icon' className="w-fit h-fit" />
            {children}
        </div>
    )
}

export default IconText;

