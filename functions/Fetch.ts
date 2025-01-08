import { AuthStores } from "../stores/AuthStore";

type ConfigType = {
	method: "get" | "post" | "put" | "delete" | "patch" | "head" | "options" | "connect" | "trace" | "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "HEAD" | "OPTIONS" | "CONNECT" | "TRACE",
	headers?: object | object[] | null,
	authorization?: boolean,
	dataType?: string,
	cache?: string,
	url: string,
	strictSSL?: boolean,
	isFile?: boolean,
	timeout?: number
	data?: ReadableStream<any> | Blob | ArrayBufferView | ArrayBuffer | FormData | URLSearchParams | string | object | null,
} | null
type ReactionType = undefined | Function

export async function Fetch(config: ConfigType, success: ReactionType, failed: ReactionType) {
	let rawResponse;
	try {
		const cacheTypesArray = ["auto", "default-cache", "only-cache", "force-cache", "force-no-store", "default-no-store", "only-no-store"]
		let timeOut = config?.timeout ? config.timeout : 6000
		if (config && config.authorization) {
			let token: any = ""
			if (typeof window !== "undefined") {
				token = await fetch("/webservice/cookie/api", {}).then((res) => res.json()).then((data) => data.token);
				const statusCode = await fetch("/webservice/cookie/api", {})
				if (statusCode.status === 401) {
					localStorage.removeItem('auth')
					AuthStores.setAuth(false)
				}
			}
			if (token !== "") {
				config.headers = {
					...config.headers,
					Authorization: `Bearer ${token}`
				}
			}

		}
		const fetchConfigs: any | undefined = {
			method: config && config.method || 'GET',
			withCredentials: config?.authorization ?? false,
			headers: config && {
				Accept: 'application/json',
				...config.headers,
			},
			dataType: config && (config.dataType ?? "application/json"),
			cache: config && (cacheTypesArray.includes(config.cache ?? "") ? config.cache : "force-no-store"),
			strictSSL: false,
			signal: AbortSignal.timeout(timeOut),
		}
		if (config && config.data) {
			if (fetchConfigs) {
				fetchConfigs.body = config.data
			}
		} if (config) {
			rawResponse = await fetch(config.url, { ...fetchConfigs, cache: 'no-store' });
		}

		if (rawResponse && rawResponse.ok) {
			if (config && config.isFile) {
				if (typeof success === 'function') {
					let response = await rawResponse.blob();
					success(response);
				}
			}
			const data = await rawResponse.json();
			if (typeof success === 'function') {
				success({
					data: data
				});
			}
		} else {
			if (typeof failed == "function") {
				failed(rawResponse)
			}
		}
	} catch (error) {
		console.log("Fetch error", error)
		if (typeof failed == "function") {
			failed(error)
		}
	} finally {
	}
}