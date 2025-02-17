"use client"
import Language from "@/locales/Language";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { useState, useEffect, useRef } from "react";
import { Auth_confirmSms, Auth_sendSms } from "@/components/functions/Auth";
import { useRouter } from 'next/navigation'
import { AuthStores } from "@/components/stores/AuthStore";

type login = {
  beforShopping?: boolean
}

const Login = ({ beforShopping = false }: login) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState("");
  const [otpCode, setOtpCode] = useState(""); 
  const otpCodeInputRef = useRef<HTMLInputElement>(null);

  // Focus OTP input when step 2 is activated
  useEffect(() => {
    if (step === 2 && otpCodeInputRef.current) {
      otpCodeInputRef.current.focus();
    }
  }, [step]);

  // Handle OTP input change
  const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
	const value = e.target.value;
	setOtpCode(value);
  
	// Automatically submit form when OTP length is 4
	if (value.length === 4) {
	  const form = e.target.closest("form");
	  form?.requestSubmit();
	}
  };
  

  const onSubmitFirstForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    const data = new FormData(e.currentTarget);
    const mobileEntry = data.get("mobile");

    if (typeof mobileEntry !== "string") {
      setLoading(false);
      throw new Error("Invalid mobile number"); 
    }

    const result = await Auth_sendSms(mobileEntry);
    setLoading(false);
    setMobile(mobileEntry);

    if (result) {
      setStep(2);
    }
  };

  const onSubmitSecondForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Disable form during request
    if (loading) return;

    setLoading(true);
    const data = new FormData(e.currentTarget);
    const mobileEntry = data.get("mobile");
    const codeEntry = data.get("otp-code");

    if (typeof mobileEntry !== "string" || typeof codeEntry !== "string") {
      setLoading(false);
      throw new Error("Invalid input");
    }

    const result = await Auth_confirmSms(mobileEntry, codeEntry);

    if (result) {
      AuthStores.setAuth(true);
      if (beforShopping) {
        router.push('/management/pay');
      } else {
        router.push('/management');
      }
    } else {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="border-b border-black/10"></div>
      <div>
        {
          step === 1 &&
          <form onSubmit={(e) => onSubmitFirstForm(e)}>
            <Input name="mobile" loading={loading ? 1 : 0} required type="tel" inputMode="numeric"
              icon={<span className="far fa-mobile-retro text-indigo-500" />}
              placeholder={Language().mobile} ltr />
            <label className="text-xs text-slate-500 text-end block pt-2 pb-6">
              {Language().mobileHint}
            </label>
            <div className="flex">
              <Button disabled={loading} particular className="justify-evenly"
                loading={loading ? 1 : 0} color="primary"
                icon={<span className="far fa-chevron-left" />} type="submit">
                {Language().continue}
              </Button>
            </div>
            <div className="pt-4">
              <div className="cursor-pointer text-slate-500 text-sm text-end" onClick={() => setStep(2)}>
                {Language().iHaveCode}
              </div>
            </div>
          </form>
        }
        {
          step === 2 &&
          <form onSubmit={(e) => onSubmitSecondForm(e)}>
            <input type="hidden" name="mobile" value={mobile} />
            <Input ref={otpCodeInputRef} loading={loading ? 1 : 0} name="otp-code" required type="number" inputMode="numeric"
              pattern="[0-9]{4}" icon={<span className="far fa-message-sms text-indigo-500" />}
              placeholder="*  *  *  *" ltr
              value={otpCode} onChange={handleOtpChange} />
            <label className="text-xs text-slate-500 text-end block pt-2 pb-6">
              {Language().otpHint}
            </label>
            <div className="flex">
              <Button disabled={loading} particular className="justify-evenly"
                loading={loading ? 1 : 0} color="primary"
                icon={<span className="far fa-chevron-left" />} type="submit">
                {Language().continue}
              </Button>
            </div>
            <div className="pt-4">
              <div className="cursor-pointer text-slate-500 text-sm text-end" onClick={() => setStep(1)}>
                {Language().changeMobile}
              </div>
            </div>
          </form>
        }
      </div>
    </div>
  );
};

export default Login;
