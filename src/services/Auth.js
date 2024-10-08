import api from "../configs/api";

export const sendOtpRequest = async (mobile) => {
    try {
        const response = await api.post("/auth/send-otp", { mobile })
        return { response };
    } catch (error) {
        return error;
    }
}


export const checkOtpRequest = async (mobile, code) => {
    try {
        const response = await api.post("/auth/check-otp", { mobile, code })
        return { response };
    } catch (error) {
        return error;
    }
}