import React from 'react'

type Props = {
    isVisible?: boolean;
    onClose?: () => void;
    children: React.ReactNode
};

export const Modal = ({isVisible, onClose, children}: Props) => {
  if (!isVisible) return null;

  const close = () => {
    if (onClose) {
        onClose();
    }
  }

  const handleClose = (e: React.MouseEvent<HTMLElement>) => {
    if((e.target as Element).id === 'wrapper') close();
  }

  return (
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center' id='wrapper' onClick={handleClose}>
        <div className='bg-white p-6 rounded w-[600px] flex flex-col'>
            <button className='text-xl place-self-end' onClick={close}>X</button>
            {children}
        </div>
    </div>
  )
}
