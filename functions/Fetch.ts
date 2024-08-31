import {doLogout} from "@/components/functions/Auth";

type ConfigType = {
	method : "get"|"post",
	headers : string | null,
	dataType : string,
	cache ?: boolean,
	url : string ,
	data :  ReadableStream<any> | Blob | ArrayBufferView | ArrayBuffer | FormData | URLSearchParams | string
}
type ReactionType = undefined | Function
export async function Fetch(config:ConfigType , success:ReactionType, failed:ReactionType) {
	try {
		config.method == "post" ? console.log("config", config) : ""
		const response = await fetch(config.url, {
			method: config.method || 'GET',
			headers: {
				Accept: 'application/json',
				...config.headers,
			},
			body: config.data,
			dataType: config.dataType?? "application/json",
			cache:config.cache ? "force-cache":"default"
		})
		if (response.status === 403) {
			await doLogout();
			(typeof failed == "function") && failed()
			return false
		}
		if (response.ok) {
			const data = await response.json();
			if (typeof success === 'function') {
				success({
					data: data
				});
			}
		} else {
			const result = await response.json();
			//TODO:fix language:
			let validationMessage = 'خطا در برقراری ارتباط با سرور';
			let validationMessageData = '';

			(typeof failed == "function") && failed()

			switch (result.status) {
				case 401:
					break;
				case 400:
					if (result.messages && result.messages.message) {
						validationMessage = result.messages.message;
					}
					if (result.messages && result.messages.data) {
						validationMessageData = result.messages.data;
					}
					toast.error(<Toast title={validationMessage} errorList={validationMessageData} />, {});
					break;
				case 403:
					return doLogout();
				case 500:
					const validationMessage500 = Language.error500Header;
					const validationMessageData500 = Language.error500Message;
					toast.error(<Toast title={validationMessage500} message={validationMessageData500} />, {});
					break;
				default:
					console.log("result.status",result)
					toast.error(<Toast title={"unrecognizable error"} message={"please connect to developers and report this bug"} />, {});
					break;
			}
		}
	} catch (error) {
		LoadingStores.setLoading(false);
		LoadingSubscribeStores.setLoadingSubscribe(false);

		switch (error.message) {
			case 'timeout of 15000ms exceeded':
				toast.error(<Toast title="خطا در برقراری ارتباط با شبکه" message="لطفا مجددا تلاش کنید." />, {});
				break;
			case 'Request failed with status code 402':
				toast.error(<Toast title="خطای توکن" message="لطفا مجددا تلاش کنید." />, {});
				break;
			default:
				break;
		}
	} finally {
		LoadingStores.setLoading(false);
		LoadingSubscribeStores.setLoadingSubscribe(false);
	}
}