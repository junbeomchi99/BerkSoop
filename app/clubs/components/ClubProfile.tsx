import React from "react";
// @ts-ignore
import IconText from "app/components/Icon/IconText.tsx";
// @ts-ignore
import Tag from "app/components/tag/Tag.tsx";
import timeIcon from "public/timeIcon.svg";
import peopleIcon from "public/peopleIcon.svg";


/* club information needed to create a club profile club in club overview table */
type TagProps = {
    category: string
    ethnicity: string
    purpose: string
}

type Props = {
    id: number
    name: string
    shortDescription: string
    activeMember: number
    applicationDeadline: number
    applicationOpen: boolean
    tag: Array<TagProps>
}

/* 각 동아리의 프로필 카드를 컴포넌트화 */
const clubProfileCard = ({
    id, name, shortDescription, activeMember, applicationDeadline, applicationOpen, tag
}: Props, {
    category, ethnicity, purpose
}: TagProps) => {
    return (
    <div className='flex flex-row content-between bg-white border-berkeley-blue border-[1px] border-opacity-20 p-[40px] w-fill h-fit'> 
        <div className="flex flex-col w-fit h-fit gap-[20px]">
            <div className="flex flex-row gap-[10px] w-fit h-fit">
                <div className="flex border-[50%] w-[50px] h-[50px] border-slate" />
                <div className="flex flex-col content-between w-[600px] h-[50px]">
                    <div className='text-h2 font-regular text-black'>{name}</div>
                    <div className='text-base font-regular text-black text-opacity-60'>{shortDescription}</div>
                </div>
            </div>
            <div className="flex flex-row w-fit h-fit">
                <IconText icon={peopleIcon} size='iconText-sm'>
                    {activeMember} active members
                </IconText>
            </div>
        </div>
    </div>
    )
}