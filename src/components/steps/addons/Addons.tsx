import React, {
    FormEvent,
    SetStateAction,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react'
import { addonsData, AddonsType, selectedAddonsType } from '../../../utils/data'
import Button from '../../ui/Button'
import Heading from '../../ui/Heading'

interface Props {
    onSubmitAddons: (e: FormEvent<Element>) => void
    back: () => void
    toggleCheckBox: boolean
    setSelectAddonsData: React.Dispatch<
        SetStateAction<AddonsType[] | undefined>
    >
    selectAddonsData: AddonsType[] | undefined
}

const Addons = ({
    onSubmitAddons,
    back,
    toggleCheckBox,
    setSelectAddonsData,
    selectAddonsData,
}: Props) => {
    const [error, setError] = useState(false)

    const refSelect = useRef<HTMLInputElement | null>(null)

    const handleSelectAddons = (idx: number) => {
        setSelectAddonsData((prev) =>
            prev?.map((plan, planIdx) =>
                idx === planIdx
                    ? {
                          ...plan,
                          isChecked: !plan.isChecked,
                          chosedPrice: toggleCheckBox
                              ? plan.priceYear
                              : plan.priceMonth,
                      }
                    : plan
            )
        )
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        if (!selectAddonsData) return
        if (
            !selectAddonsData[0].isChecked &&
            !selectAddonsData[1].isChecked &&
            !selectAddonsData[2].isChecked
        )
            return setError(true)
        onSubmitAddons(e)
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="flex-1 md:py-6 md:px-16 flex flex-col gap-2 responsiveSection"
        >
            <div className="flex flex-col mb-6">
                <Heading>Pick add-ons</Heading>
                <p className="text-coolGray mt-2">
                    Add-ons help enhance your gaming experience.
                </p>
            </div>
            <div className="flex flex-col gap-4 items-start w-full">
                {selectAddonsData?.map((addons, idx) => (
                    <div
                        key={addons.title}
                        onClick={() => {
                            handleSelectAddons(idx)
                            setError(false)
                        }}
                        className={`${
                            addons.isChecked
                                ? 'border-purplishBlue bg-magnolia'
                                : ''
                        } cursor-pointer hover:border-purplishBlue flex items-center justify-between w-full border border-lightGray p-4 rounded-lg`}
                    >
                        <div className="flex items-center gap-4 w-full">
                            <input
                                ref={refSelect}
                                checked={addons.isChecked}
                                id="checked-checkbox"
                                type="checkbox"
                                value=""
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <div>
                                <p className="font-bold text-marineBlue">
                                    {addons.title}
                                </p>
                                <span className="text-coolGray">
                                    {addons.desc}
                                </span>
                            </div>
                        </div>
                        <p className="text-purplishBlue">
                            {toggleCheckBox
                                ? '$' + addons.priceYear + '/yr'
                                : '$' + addons.priceMonth + '/mo'}
                        </p>
                    </div>
                ))}
            </div>
            {error && (
                <p className="text-strawberryRed">
                    A step is submitted, but no selection has been made
                </p>
            )}

            <div className="flex w-full justify-between mt-auto responsiveButton left-0">
                <Button typeButton="button" onClick={back} type="back">
                    Go Back
                </Button>
                <Button>Next Step</Button>
            </div>
        </form>
    )
}

export default Addons
