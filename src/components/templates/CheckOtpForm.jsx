import React from "react";
import { checkOtpRequest } from "../../services/Auth";

export default function CheckOtpForm({mobile , setStep , otpCode , setOtpCode }) {
  
  const submitHandler = async (e) => {
    e.preventDefault();
    if(otpCode.length !== 5) return;
    const {response , error} = await checkOtpRequest(mobile , otpCode);
    console.log({response , error})
  }

    return (
    <form onSubmit={submitHandler}>
      <p>تایید حساب کاربری</p>
      <span>کد ارسال شده را به شماره «{mobile}» وارد نمایید.</span>
      <label htmlFor="input">کد تایید :</label>
      <input
        type="text"
        id="input"
        placeholder="کد تایید"
        value={otpCode}
        onChange={(e) => setOtpCode(e.target.value)}
      />
      <button type="submit">تایید کد</button>
      <button onClick={() => setStep(1)}>تغییر شماره موبایل</button>
    </form>
  );
}
