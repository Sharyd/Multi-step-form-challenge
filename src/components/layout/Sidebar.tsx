import React from 'react'

interface Props {
    dataSteps: string[]
    active: number
}

const Sidebar = ({ dataSteps, active }: Props) => {
    return (
        <div className="flex-row justify-center md:justify-start p-6 rounded-xl uppercase flex md:flex-col w-[550px] sm:w-[600px] md:w-[300px] items-start">
            <img
                className="absolute w-full md:w-max bottom-[17.8rem] right-0 p-4  md:top-0 md:left-0"
                src="/images/bg-sidebar-desktop.svg"
                alt=""
            />
            <div className="md:hidden absolute w-full h-48 bottom-[15rem] right-0 bg-magnolia z-0"></div>
            {dataSteps.map((step: string, idx: number) => (
                <div
                    key={step}
                    className="z-10 flex  items-center justify-center p-3 gap-0 md:gap-3 cursor-pointer"
                >
                    <div
                        className={`h-10 w-10 ${
                            active === idx ? 'bg-lightBlue text-marineBlue' : ''
                        } flex relative bottom-36 md:bottom-0 md:static rounded-full text-white items-center border justify-center`}
                    >
                        <p
                            className={`${
                                active === idx ? ' text-marineBlue' : ''
                            }`}
                        >
                            {idx + 1}
                        </p>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-lightGray hidden md:block">
                            step {idx + 1}
                        </span>
                        <p className="hidden md:block text-white uppercase font-semibold">
                            {step}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Sidebar
