import React, { FormEvent, useCallback, useEffect, useState } from 'react'
import { selectedPlanType, selectPlanType } from '../../../utils/data'
import Button from '../../ui/Button'
import Heading from '../../ui/Heading'
import Toggle from '../Toggle'

interface Props {
    onSubmitSelectPlan: (e: FormEvent<Element>) => void
    back: () => void
    selectPlanData: selectPlanType[]
    selectPlan: null | selectedPlanType
    setSelectPlan: React.Dispatch<React.SetStateAction<selectedPlanType | null>>
    toggleCheckBox: boolean
    setToggleCheckBox: React.Dispatch<React.SetStateAction<boolean>>
}

const SelectPlan = ({
    onSubmitSelectPlan,
    back,
    selectPlanData,
    selectPlan,
    setSelectPlan,
    setToggleCheckBox,
    toggleCheckBox,
}: Props) => {
    const [error, setError] = useState(false)

    const handleSelectPlan = useCallback(
        (plan: selectPlanType) => {
            setSelectPlan({
                name: plan.name,
                chosedPrice: toggleCheckBox ? plan.priceYear : plan.priceMonth,
                priceYear: plan.priceYear,
                priceMonth: plan.priceMonth,
                type: toggleCheckBox ? 'yearly' : 'monthly',
            })
        },
        [toggleCheckBox]
    )

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        if (selectPlan === null) return setError(true)

        onSubmitSelectPlan(e)
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="flex-1 md:py-6 md:px-16  flex flex-col gap-2 responsiveSection"
        >
            <div className="flex flex-col mb-6">
                <Heading>Select your plan</Heading>
                <p className="text-coolGray mt-2">
                    You have the option of monthly or yearly billing.
                </p>
            </div>
            <div className="flex flex-col gap-12 w-full items-center justify-center">
                <div className="flex items-center justify-start flex-col md:flex-row w-full gap-4">
                    {selectPlanData.map((plan) => (
                        <div
                            key={plan.name}
                            onClick={() => {
                                handleSelectPlan(plan)
                                setError(false)
                            }}
                            className={`w-full ${
                                selectPlan?.name === plan.name
                                    ? 'border-purplishBlue bg-magnolia'
                                    : ''
                            } cursor-pointer rounded-lg flex flex-row md:flex-col border-lightGray items-center md:items-start gap-4 md:gap-8 border p-4 hover:border-purplishBlue `}
                        >
                            <img src={plan.icon} alt="icons plans" />
                            <div>
                                <p className="font-bold capitalize text-marineBlue">
                                    {plan.name}
                                </p>
                                <p className="text-coolGray">
                                    {toggleCheckBox
                                        ? '$' + plan.priceYear + '/yr'
                                        : '$' + plan.priceMonth + '/mo'}
                                </p>
                                {toggleCheckBox ? (
                                    <p className="text-marineBlue font-[500]">
                                        {plan.free}
                                    </p>
                                ) : (
                                    ''
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                {error && (
                    <p className="text-strawberryRed">
                        A step is submitted, but no selection has been made
                    </p>
                )}
                <div className="rounded-lg p-4 w-full flex items-center justify-center bg-magnolia">
                    <span
                        className={`${
                            !toggleCheckBox
                                ? 'text-marineBlue'
                                : 'text-coolGray'
                        } mr-3 text-sm font-medium text-gray-900`}
                    >
                        Monthly
                    </span>
                    <Toggle
                        setToggleCheckBox={setToggleCheckBox}
                        toggleCheckBox={toggleCheckBox}
                    />
                    <span
                        className={`${
                            toggleCheckBox ? 'text-marineBlue' : 'text-coolGray'
                        } ml-3 text-sm font-medium text-gray-900`}
                    >
                        Yearly
                    </span>
                </div>
            </div>

            <div className="flex justify-between w-full mt-auto responsiveButton left-0">
                <Button type="back" onClick={back}>
                    Go Back
                </Button>
                <div className="ml-auto">
                    <Button>Next Step</Button>
                </div>
            </div>
        </form>
    )
}

export default SelectPlan
