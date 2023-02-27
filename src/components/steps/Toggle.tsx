import React, { Dispatch, SetStateAction } from 'react'

interface Props {
    setToggleCheckBox: Dispatch<SetStateAction<boolean>>
    toggleCheckBox: boolean
}

const Toggle = ({ setToggleCheckBox, toggleCheckBox }: Props) => {
    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                checked={toggleCheckBox}
                value=""
                className="sr-only peer"
            />
            <div
                onClick={() => {
                    setToggleCheckBox((prev) => !prev)
                }}
                className="w-11 h-6 bg-marineBlue peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-black after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
            ></div>
        </label>
    )
}

export default Toggle
