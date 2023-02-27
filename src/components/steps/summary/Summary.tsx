import React, { FormEvent, useEffect, useState } from 'react'
import { AddonsType, selectedPlanType } from '../../../utils/data'
import Button from '../../ui/Button'
import Heading from '../../ui/Heading'

interface Props {
    onSubmitSummary: (e: FormEvent<Element>) => void
    back: () => void
    selectAddons: AddonsType[] | undefined
    selectPlan: null | selectedPlanType
    toggleCheckBox: boolean
    setToggleCheckBox: React.Dispatch<React.SetStateAction<boolean>>
}

const Summary = ({
    onSubmitSummary,
    back,
    selectAddons,
    selectPlan,
    toggleCheckBox,
    setToggleCheckBox,
}: Props) => {
    const refactorSelectAddons = selectAddons?.filter((addon) =>
        addon.isChecked ? addon : null
    )

    const totalPriceForAddons = refactorSelectAddons?.reduce(
        (
            acc,
            addon: {
                priceMonth: any
                priceYear: number
            }
        ) =>
            addon !== null
                ? (toggleCheckBox ? addon?.priceYear : addon?.priceMonth) + acc
                : null,
        0
    )

    return (
        <form
            onSubmit={onSubmitSummary}
            className="flex-1 md:py-6 md:px-16 flex flex-col gap-2 responsiveSection"
        >
            <div className="flex flex-col mb-6">
                <Heading>Finishing up</Heading>
                <p className="text-coolGray mt-2">
                    Double-check everything looks OK before confirming.
                </p>
            </div>
            <div className="flex flex-col gap-4 items-start w-full p-6  bg-magnolia">
                <div className="relative flex justify-between mb-6 w-full  ">
                    <div>
                        <p className="capitalize text-marineBlue font-bold ">
                            {selectPlan?.name} (
                            {toggleCheckBox ? 'yearly' : 'monthly'})
                        </p>
                        <button
                            type="button"
                            onClick={() => setToggleCheckBox((prev) => !prev)}
                            className="hover:text-purplishBlue border-b text-sm p-0 text-coolGray"
                        >
                            Change
                        </button>
                    </div>

                    <p className="text-marineBlue font-bold ">
                        $
                        {toggleCheckBox
                            ? selectPlan?.priceYear
                            : selectPlan?.priceMonth}
                        /{toggleCheckBox ? 'yr' : 'mo'}
                    </p>
                    <div className="absolute top-[4.5rem] left-0 border-b border-lightGray w-full"></div>
                </div>
                {refactorSelectAddons?.map((addons, idx) => (
                    <>
                        <div
                            key={idx}
                            className="relative flex justify-between w-full "
                        >
                            <p className="capitalize text-coolGray ">
                                {addons?.title}
                            </p>

                            <p className="text-marineBlue">
                                +$
                                {toggleCheckBox
                                    ? addons?.priceYear
                                    : addons?.priceMonth}
                                /{toggleCheckBox ? 'yr' : 'mo'}
                            </p>
                        </div>
                    </>
                ))}
            </div>
            <div className="flex justify-between px-3 w-full mt-4">
                <p className="text-coolGray">
                    Total ({toggleCheckBox ? 'per year' : 'per month'})
                </p>
                <span className="text-lg font-bold text-purplishBlue">
                    $
                    {totalPriceForAddons! +
                        (toggleCheckBox
                            ? selectPlan?.priceYear!
                            : selectPlan?.priceMonth!)}
                    /{toggleCheckBox ? 'yr' : 'mo'}
                </span>
            </div>
            <div className="flex  justify-between mt-auto w-full responsiveButton">
                <Button typeButton="button" onClick={back} type="back">
                    Go Back
                </Button>
                <Button type="confirm">Confirm</Button>
            </div>
        </form>
    )
}

export default Summary
