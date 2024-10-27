import {ToastStores} from "@/components/stores/ToastStore";
import Language from "@/locales/Language";
import ColorTypes from "@/components/functions/ColorTypes";
import * as AuthModel from "@/models/AuthModel";
import * as rdd from 'react-device-detect';
import {Fetch} from "@/components/functions/Fetch";

async function Auth_check()
{
	let result = false
	await fetch(process.env.NEXT_PUBLIC_APP_BASE_URL+"/webservice/check/api", {
		method: "get",
		cache:"no-store",
	}).then((response) => {
		result = true
	},
	(error) => {
		result = false
	})

	return result
}
const Auth_logout = async ()=>{
	let result = false
	const configs = {
		method: "get",
		url: process.env.NEXT_PUBLIC_APP_BASE_URL+"/webservice/logout/api",
		cache:"no-store"
	}
	await Fetch(configs, (data) => {
		console.log("why you said true??!",data)
		result = true
	}, (error) => {
		result = false
	}
	)
	return result
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
	let token = ""
	await AuthModel.loginConfirmSms(formData, (data) => {
		token = data.token
		response = true
	}, (error) => {
		ToastStores.setToast({message: Language().loginFailed, title: Language().error, type:ColorTypes.danger, icon: "exclamation-circle"})
		response= false
	})
	let localResponse = false
	if(response){
		let formData = new FormData()
		formData.append("token", token)
		await Fetch({
				method: "post",
				url:  "/webservice/login/api",
				data: formData,
				cache:"no-store"
			}, (data) => {
				ToastStores.setToast({message: Language().loginSuccess, title: Language().success, type:ColorTypes.success, icon: "check-circle"})
				localResponse = true
			},
			(error) => {
				ToastStores.setToast({message: Language().loginFailed, title: Language().error, type:ColorTypes.danger, icon: "exclamation-circle"})
				localResponse = false
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

