import PersonalInfo from './components/steps/personalInfo/PersonalInfo'
import Wrapper from './components/layout/Wrapper'
import Sidebar from './components/layout/Sidebar'
import SelectPlan from './components/steps/selectPlan/SelectPlan'
import Addons from './components/steps/addons/Addons'
import { FormEvent, useState } from 'react'
import {
    addonsData,
    AddonsType,
    personalData,
    personalDataType,
    planData,
    selectedAddonsType,
    selectedPlanType,
} from './utils/data'
import { useMultistepForm } from './hooks/useMultistepForm'
import { dataSidebarSteps } from './utils/data'
import Summary from './components/steps/summary/Summary'
import Feedback from './components/steps/Feedback'

function App() {
    const [personal, setPersonal] = useState<personalDataType>(personalData)
    const [selectPlanData, setSelectPlanData] = useState(planData)

    const [selectPlan, setSelectPlan] = useState<selectedPlanType | null>(null)
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [selectAddonsData, setSelectAddonsData] = useState<
        AddonsType[] | undefined
    >(addonsData)

    const { currentStepIndex, step, isLastStep, back, next } = useMultistepForm(
        [
            <PersonalInfo
                onSubmitPersonal={onSubmit}
                setPersonal={setPersonal}
                personal={personal}
            />,
            <SelectPlan
                onSubmitSelectPlan={onSubmit}
                back={goBack}
                selectPlanData={selectPlanData}
                selectPlan={selectPlan}
                setSelectPlan={setSelectPlan}
                setToggleCheckBox={setToggleCheckBox}
                toggleCheckBox={toggleCheckBox}
            />,
            <Addons
                onSubmitAddons={onSubmit}
                back={goBack}
                toggleCheckBox={toggleCheckBox}
                selectAddonsData={selectAddonsData}
                setSelectAddonsData={setSelectAddonsData}
            />,
            <Summary
                onSubmitSummary={onSubmit}
                back={goBack}
                selectPlan={selectPlan}
                selectAddons={selectAddonsData}
                toggleCheckBox={toggleCheckBox}
                setToggleCheckBox={setToggleCheckBox}
            />,
            <Feedback />,
        ]
    )

    function onSubmit(e: FormEvent) {
        e.preventDefault()

        if (!isLastStep) return next()
    }
    function goBack() {
        back()
    }

    return (
        <div className="bg-magnolia w-full p-4  h-screen flex items-center justify-center">
            <Wrapper>
                <Sidebar
                    active={currentStepIndex}
                    dataSteps={dataSidebarSteps}
                />
                {step}
            </Wrapper>
        </div>
    )
}

export default App
