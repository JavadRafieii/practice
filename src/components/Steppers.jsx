import { useState } from "react";

function Steppers() {

    const steps = [
        { title: "شروع فراخوان و", subtitle: " دریافت پیشنهادها", date: "شنبه ۱۸ بهمن ۱۴۰۲ ", time: "ساعت ۱۸:۲۰" },
        { title: "پایان دریافت پیشنهادها", subtitle: "و شروع کارشناسی", date: "شنبه ۱۸ بهمن ۱۴۰۲ ", time: "ساعت ۱۸:۲۰" },
        { title: "پایان", subtitle: "کارشناسی پیشنهادها", date: "شنبه ۱۸ بهمن ۱۴۰۲ ", time: "ساعت ۱۸:۲۰" },
        { title: "اعلام نفرات برتر", subtitle: " و پایان فراخوان", date: "شنبه ۱۸ بهمن ۱۴۰۲ ", time: "ساعت ۱۸:۲۰" },
    ];
    const [currentStep, setCurrentStep] = useState(2);
    const [complete, setComplete] = useState(false);

    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-4 overflow-hidden">
                {steps?.map((step, i) => (
                    <div
                        key={i}
                        className={`step-item py-5 ${currentStep === i + 1 && "active"} ${(i + 1 < currentStep || complete) && "complete"
                            } `}
                    >
                        <div className="-translate-x-10 translate-y-5 lg:translate-x-0 lg:translate-y-0">
                            <p className="font-Kalameh-bold text-base text-[#101828] lg:hidden">{step.title} {step.subtitle}</p>
                            <p className="font-Kalameh-regular text-base text-[#98A8B3] mb-2 hidden lg:block">{step.title}</p>
                            <p className="font-Kalameh-regular text-base text-[#98A8B3] mb-2 hidden lg:block">{step.subtitle}</p>
                        </div>
                        <div className="step">
                            {i + 1 < currentStep || complete}
                        </div>
                        <div className="-translate-x-10 translate-y-5 lg:translate-x-0 lg:translate-y-0">
                            <p className="font-Kalameh-regular text-base text-[#98A8B3] lg:hidden">{step.date} {step.time}</p>
                            <p className="font-Kalameh-regular text-base text-[#98A8B3] mt-2 hidden lg:block">{step.date}</p>
                            <p className="font-Kalameh-regular text-base text-[#98A8B3] mt-2 hidden lg:block">{step.time}</p>
                        </div>
                    </div>
                ))}
            </div>
            {!complete && (
                <div className="w-full flex justify-end">
                    <button
                        className="font-Kalameh-bold text-sm text-white bg-[#49b3f3] py-2 px-4 rounded-md mt-5"
                        onClick={() => {
                            currentStep === steps.length
                                ? setComplete(true)
                                : setCurrentStep((prev) => prev + 1);
                        }}
                    >
                        {currentStep === steps.length ? "پایان" : "بعدی"}
                    </button>
                </div>
            )}
        </>
    );
};

export default Steppers;