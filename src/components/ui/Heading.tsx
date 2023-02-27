import React, { ReactNode } from 'react'

interface Props {
    children: ReactNode
}

const Button = ({ children }: Props) => {
    return <h2 className="text-2xl font-bold text-marineBlue">{children}</h2>
}

export default Button
