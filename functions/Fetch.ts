type ConfigType = {
	method : "get"|"post"|"put"|"delete"|"patch"|"head"|"options"|"connect"|"trace"|"GET"|"POST"|"PUT"|"DELETE"|"PATCH"|"HEAD"|"OPTIONS"|"CONNECT"|"TRACE",
	headers? : object | object[] | null,
	authorization? : boolean,
	dataType? : string,
	cache ?: string,
	url : string ,
	strictSSL?: boolean,
	data? :  ReadableStream<any> | Blob | ArrayBufferView | ArrayBuffer | FormData | URLSearchParams | string | object | null,
} | null
type ReactionType = undefined | Function
export async function Fetch(config:ConfigType , success:ReactionType, failed:ReactionType) {
	let rawResponse;
	try {
		const cacheTypesArray = ["no-cache", "default" , "reload" , "force-cache" , "only-if-cached" , "no-store"]

		if(config && config.authorization){
			let token = ""
			if (typeof window !== "undefined") {
				token = await fetch("/webservice/cookie/api", {}).then((res) => res.json()).then((data) => data.token);
			}
			console.log("client token", token)
			if(token !== "") {
				config.headers = {
					...config.headers,
					Authorization: `Bearer ${token}`
				}
			}

		}
		const fetchConfigs :RequestInit | undefined = {
			method: config.method || 'GET',
			withCredentials:config?.authorization?? false,
			headers: {
				Accept: 'application/json',
				...config.headers,
			},
			dataType: config.dataType?? "application/json",
			cache:"no-store",
			strictSSL: false,
			signal: AbortSignal.timeout(5000),
		}
		if (config.data) {
			if (fetchConfigs) {
				fetchConfigs.body = config.data
			}
		}
		rawResponse = await fetch(config.url, {...fetchConfigs,cache:"no-store"});
		if (rawResponse.ok) {
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