import React, { ReactNode } from 'react'

interface Props {
    children: ReactNode
    type?: string
    onClick?: () => void
    typeButton?: string
}

const Button = ({ children, type, onClick, typeButton }: Props) => {
    return (
        <button
            type={typeButton ? 'button' : 'submit'}
            onClick={onClick}
            className={`py-2 px-4 font-[500] ${
                type === 'back'
                    ? 'bg-white text-coolGray hover:text-marineBlue'
                    : 'bg-marineBlue text-white hover:bg-marineBlue/90'
            } ${
                type === 'confirm'
                    ? 'bg-purplishBlue hover:bg-purplishBlue/90'
                    : ''
            }  rounded-lg`}
        >
            {children}
        </button>
    )
}

export default Button
