import Language from "@/locales/Language";
import PageType from "@/types/PageType";
import SettingType from "@/types/Setting";

type metaConfig = {
	useSiteName?: boolean,
	useOpenGraph?: boolean,
	useTwitter?: boolean
} | undefined
export const meteDataGenerator = (page:PageType, settings:SettingType[], config:metaConfig={
	useSiteName:true,
	useOpenGraph:true,
	useTwitter:true
})=>
{
	let title = page.title
	let openGraph = {
			title: page.title,
			description: page.short_description,
			image: process.env.NEXT_PUBLIC_UPLOAD_URL + "" + page.avatar,
		}
	let twitter = {
			title: page.title,
			description: page.short_description,
			image: process.env.NEXT_PUBLIC_UPLOAD_URL + "" + page.avatar,
		}
	if (config && config.useSiteName && settings)
	{
		title = settings.find((setting:any) => setting?.name == "site_name")?.value + " | " + page.title
	}

	return {
		title,
		description: page.short_description,
		openGraph: config?.useOpenGraph && openGraph,
		twitter: config?.useTwitter && twitter
	}
}
export const titleCreator = (page:PageType,settings:SettingType[]) => {
	return settings.find((setting:SettingType) => setting?.name == "site_name")?.value + " | " + page.title
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
