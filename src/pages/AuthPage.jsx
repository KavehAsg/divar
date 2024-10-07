import React, { useState } from 'react'
import SendOtpForm from '../components/templates/SendOtpForm';
import CheckOtpForm from '../components/templates/CheckOtpForm';

export default function AuthPage() {
    const [step , setStep] = useState(1);
    const [mobile , setMobile] = useState("");
    const [otpCode , setOtpCode] = useState("");
  return (
    <div>
        {step === 1 && <SendOtpForm mobile={mobile} setMobile={setMobile} setStep={setStep} />}
        {step === 2 && <CheckOtpForm mobile={mobile} otpCode={otpCode} setOtpCode={setOtpCode} setStep={setStep} />}
    </div>
  )
}
