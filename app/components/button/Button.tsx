import React from "react";

type Props = {
    children: React.ReactNode
    onClick: () => void
    size?: string //sm(smallButton), md(mediumButton)
    disabled?: boolean
}

const Button = ({children, onClick, size, disabled, ...rest}: Props) => {
    return (
        <button
        className={`btn ${size}` + (disabled ? ' disabled' : '')}
        onClick={onClick}
        disabled={disabled}
        {...rest}
      >
        {children}
      </button>
    )
}

export default Button;