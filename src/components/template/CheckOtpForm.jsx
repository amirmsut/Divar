import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { checkOtp } from "services/auth";
import { getProfile } from "services/user";
import { setCookie } from "utils/cookie";

function CheckOtpForm({ code, setCode, mobile, setStep }) {
    //
    const navigate = useNavigate();
    const { refetch } = useQuery(["profile"], getProfile);
    //
    const submitHandler = async (e) => {
        e.preventDefault();
        if (code.length !== 5) return;
        const { response, error } = await checkOtp(mobile, code);
        console.log({ response, error });

        if (response) {
            // console.log(response);
            setCookie(response.data);
            navigate("/");
        }
        if (error) console.log(error.response.data.message);
    };

    return (
        <form onSubmit={submitHandler}>
            <p>تایید کد پیامک شده</p>
            <span>کد پیامک شده به شماره mobile را وارد کنید.</span>
            <label htmlFor="input">کد تایید را وارد کنید</label>
            <input
                type="text"
                placeholder="کد تایید"
                value={code}
                onChange={(e) => setCode(e.target.value)}
            />
            <button type="submit">ورود</button>
            <button onClick={() => setStep(1)}>تایید شماره موبایل</button>
        </form>
    );
}
export default CheckOtpForm;
