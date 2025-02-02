import Language from "@/locales/Language";
import ContentType from "@/types/Content";
import SettingType from "@/types/Setting";

type metaConfig = {
	useSiteName?: boolean,
	useOpenGraph?: boolean,
	useTwitter?: boolean
} | undefined
export const meteDataGenerator = (page:ContentType, settings:SettingType[], config:metaConfig={
	useSiteName:true,
	useOpenGraph:true,
	useTwitter:true
})=>
{
	let title = page? page.title : ""
	let openGraph = {
			title: page && page.title,
			description: page && page.short_description,
			image: page && process.env.NEXT_PUBLIC_UPLOAD_URL + "/" +  page.avatar,
		}
	let twitter = {
			title: page && page.title,
			description: page && page.short_description,
			image: page && process.env.NEXT_PUBLIC_UPLOAD_URL + "/" + page.avatar,
		}
	if (config && config.useSiteName && settings && page)
	{
		title = settings.find((setting:any) => setting?.name == "site_name")?.value + " | " + page.title
	}

	return {
		title,
		description: page && page.short_description,
		openGraph: config?.useOpenGraph && openGraph,
		twitter: config?.useTwitter && twitter
	}
}
export const titleCreator = (page:ContentType,settings:SettingType[]) => {
	if(page){
		return settings.find((setting:SettingType) => setting?.name == "site_name")?.value + " | " + page.title
	}
}
export const notFound = () => {
	return {
		title: "404 | Not Found",
		description: "Page not found",
		robots: {
			index: false,
			follow: false,
		},
	}
}
export const metaDataGeneratorManagement = (title:any) => {
	return {
		title: Language().management + " | " + title,
		description: "Management page",
		robots: {
			index: false,
			follow: false,
		},
	}
}
