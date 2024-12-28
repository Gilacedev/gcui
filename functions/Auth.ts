import { ToastStores } from "@/components/stores/ToastStore";
import Language from "@/locales/Language";
import ColorTypes from "@/components/functions/ColorTypes";
import * as AuthModel from "@/models/AuthModel";
import * as rdd from 'react-device-detect';
import { Fetch } from "@/components/functions/Fetch";
import FetchResponse from "@/types/FetchResponse";
import FetchError from "@/types/FetchError";
import { AuthStores } from "../stores/AuthStore";

async function Auth_check() {
	let result = false
	await fetch(process.env.NEXT_PUBLIC_APP_BASE_URL + "/webservice/check/api", {
		method: "get",
		cache: 'default',
	}).then((response) => {
		result = true
	},
		(error) => {
			result = false
		})

	return result
}

const Auth_logout = async () => {
	let result = false;
	const configs = {
		method: "get" as const, // Ensure type compatibility
		url: process.env.NEXT_PUBLIC_APP_BASE_URL + "/webservice/logout/api",
		cache: 'default',
	};
	await Fetch(
		configs,
		(data: FetchResponse) => {
			result = true;
			AuthStores.setAuth(false)
		},
		(error: FetchError) => {
			localStorage.removeItem('auth')
			console.error("Logout failed", error);
			result = false;
		}
	);
	return result;
};


const Auth_sendSms = async (mobile: string): Promise<boolean> => {
    if (!mobile) {
        ToastStores.setToast({
            message: Language().requiredMobile,
            title: Language().error,
            type: ColorTypes.danger,
            icon: "exclamation-circle",
        });
        return false;
    }

    // Check mobile format absolutely: 09xxxxxxxxx
    if (!String(mobile).match(/^09\d{9}$/)) {
        ToastStores.setToast({
            message: Language().mobileHint,
            title: Language().error,
            type: ColorTypes.danger,
            icon: "exclamation-circle",
        });
        return false;
    }

    const formData = new FormData();
    formData.append("username", mobile);
    let response = false;
    await AuthModel.loginSendSms(
        formData,
        (data: unknown) => {
            ToastStores.setToast({
                message: Language().otpSent,
                title: Language().success,
                type: ColorTypes.success,
                icon: "check-circle",
            });
            response = true;
        },
        (error: unknown) => {
            ToastStores.setToast({
                message: Language().otpFailed,
                title: Language().error,
                type: ColorTypes.danger,
                icon: "exclamation-circle",
            });
            response = false;
        }
    );

    return response;
};


const Auth_confirmSms = async (mobile:string, code:any) => {
	if (!code) {
		ToastStores.setToast({ message: Language().otpHint, title: Language().error, type: ColorTypes.danger, icon: "exclamation-circle" })
		return false
	}
	if (!mobile) {
		ToastStores.setToast({ message: Language().requiredMobile, title: Language().error, type: ColorTypes.danger, icon: "exclamation-circle" })
		return false
	}
	// check if code is 4 digit
	if (!code.match(/^\d{4}$/)) {
		ToastStores.setToast({ message: Language().otpHint, title: Language().error, type: ColorTypes.danger, icon: "exclamation-circle" })
		return false
	}

	// save data to form data
	let formData = new FormData()
	formData.append("username", mobile)
	formData.append("code", code)
	formData.append("key", `${rdd.engineName}-${rdd.engineVersion}-${rdd.fullBrowserVersion}`)
	formData.append("browser_name", rdd.browserName)
	formData.append("browser_version", rdd.browserVersion)
	formData.append("device_model", rdd.mobileModel)
	formData.append("device_vendor", rdd.mobileVendor)
	formData.append("os_name", rdd.osName)
	formData.append("os_version", rdd.osVersion)
	formData.append("type", rdd.isMobile ? "mobile" : rdd.isTablet ? "tablet" : "desktop")

	let response = false
	let token = ""
	await AuthModel.loginConfirmSms(formData, (data:FetchResponse) => {
		token = data.token
		response = true
	}, (error:FetchError) => {
		ToastStores.setToast({ message: Language().loginFailed, title: Language().error, type: ColorTypes.danger, icon: "exclamation-circle" })
		response = false
	})
	let localResponse = false
	if (response) {
		let formData = new FormData()
		formData.append("token", token)
		await Fetch({
			method: "post",
			url: "/webservice/login/api",
			data: formData,
			cache: 'default'
		}, (data:FetchResponse) => {
			ToastStores.setToast({ message: Language().loginSuccess, title: Language().success, type: ColorTypes.success, icon: "check-circle" })
			localResponse = true;
		},
			(error:FetchError) => {
				ToastStores.setToast({ message: Language().loginFailed, title: Language().error, type: ColorTypes.danger, icon: "exclamation-circle" })
				localResponse = false;
				localStorage.removeItem('auth')
			})
	}
	return localResponse;
}
export {
	Auth_check,
	Auth_logout,
	Auth_sendSms,
	Auth_confirmSms
};

