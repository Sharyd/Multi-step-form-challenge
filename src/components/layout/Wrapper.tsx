import React, { ReactNode } from 'react'

interface Props {
    children: ReactNode
}

const Wrapper = ({ children }: Props) => {
    return (
        <main className="flex relative flex-col md:flex-row justify-between items-center md:items-start  md:shadow-lg bg-magnolia md:bg-white p-4 rounded-xl w-[925px] h-[500px] md:h-[600px] ">
            {children}
        </main>
    )
}

export default Wrapper
