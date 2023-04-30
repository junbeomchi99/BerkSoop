import React from "react";

type Props = {
    tagType: string //tag-category, tag-ethnicity, tag-purpose
    text: string
}

const Tag = ({tagType, text, ...rest}: Props) => {
    return (
        <div className={`tag ${tagType}`} {...rest}>
            {text}
        </div>
    )
}

export default Tag;