import {ToastStores} from "@/components/stores/ToastStore";
import Language from "@/locales/Language";
import ColorTypes from "@/components/functions/ColorTypes";
import * as AuthModel from "@/models/AuthModel";
import * as rdd from 'react-device-detect';
import {redirect} from "next/navigation";
import {Fetch} from "@/components/functions/Fetch";

function AuthCheck(): boolean
{
	return false;
}
const doLogout = async ()=>{
}
const Auth_sendSms = async (mobile) =>{

	//check mobile is not empty
	if(!mobile){
		ToastStores.setToast({message: Language().requiredMobile, title: Language().error, type:ColorTypes.danger, icon: "exclamation-circle"})
		return false
	}
	//check mobile format absolutely : 09xxxxxxxxx
	if(!String(mobile).match(/^09\d{9}$/)){
		ToastStores.setToast({message: Language().mobileHint, title: Language().error, type:ColorTypes.danger, icon: "exclamation-circle"})
		return false
	}

	//create a form :
	let formData = new FormData()
	formData.append("username", mobile)

	//send to server
	let response = false
	await AuthModel.loginSendSms(formData, (data) => {
		ToastStores.setToast({message: Language().otpSent, title: Language().success, type:ColorTypes.success, icon: "check-circle"})
		response = true
	}, (error) => {

		ToastStores.setToast({message: Language().otpFailed, title: Language().error, type:ColorTypes.danger, icon: "exclamation-circle"})
		response = false})
	return response
}

const Auth_confirmSms = async (mobile, code) =>{
	if(!code){
		ToastStores.setToast({message: Language().otpHint, title: Language().error, type:ColorTypes.danger, icon: "exclamation-circle"})
		return false
	}
	if(!mobile){
		ToastStores.setToast({message: Language().requiredMobile, title: Language().error, type:ColorTypes.danger, icon: "exclamation-circle"})
		return false
	}
	// check if code is 4 digit
	if(!code.match(/^\d{4}$/)){
		ToastStores.setToast({message: Language().otpHint, title: Language().error, type:ColorTypes.danger, icon: "exclamation-circle"})
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
	await AuthModel.loginConfirmSms(formData, (data) => {
		let token = data.token

		console.log("DADADA",data)
		let formData = new FormData()
		formData.append("token", token)

		//send token to /api/login route
		// add content type form data :
		Fetch({
			method: "post",

			url:  "/api/login",
			data: formData,
			cache:"no-store"
		}, (data) => {
			ToastStores.setToast({message: Language().loginSuccess, title: Language().success, type:ColorTypes.success, icon: "check-circle"})
			redirect("/management")
			response = true
		},
		(error) => {
			ToastStores.setToast({message: Language().loginFailed, title: Language().error, type:ColorTypes.danger, icon: "exclamation-circle"})
			response = false
		})
		response = true
	}, (error) => {
		ToastStores.setToast({message: Language().loginFailed, title: Language().error, type:ColorTypes.danger, icon: "exclamation-circle"})
		response= false
	})
	return response
}
export {
	AuthCheck,
	doLogout,
	Auth_sendSms,
	Auth_confirmSms
};