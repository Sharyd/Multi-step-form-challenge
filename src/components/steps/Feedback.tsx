import React from 'react'
import Heading from '../ui/Heading'

const Feedback = () => {
    return (
        <div className="flex-1 gap-6 h-full flex flex-col items-center justify-center responsiveSection">
            <img src="/images/icon-thank-you.svg" alt="" />
            <div className="flex flex-col items-center gap-3">
                <Heading>Thank you</Heading>
                <p className="w-[350px] md:w-[450px] text-center text-coolGray">
                    Thanks for confirming your subscription! We hope you have
                    fun using our platform. If you ever need support, please
                    feel free to email us at support@loremgaming.com.
                </p>
            </div>
        </div>
    )
}

export default Feedback
