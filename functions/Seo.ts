import Language from "@/locales/Language";
import ContentType from "@/types/Content";
import SettingType from "@/types/Setting";

type metaConfig = {
	useSiteName?: boolean,
	useOpenGraph?: boolean,
	useTwitter?: boolean
	url?: string,
	canonicals: string
} | undefined
export const meteDataGenerator = (page:ContentType, settings:SettingType[], config:metaConfig={
	useSiteName:true,
	useOpenGraph:true,
	useTwitter:true,
	url:"",
	canonicals:""
})=>
{
	const exportData = {
		width: 'device-width',
		minimumScale: 1,
		initialScale: 1,
		title: page? page.title : "",
		description: page? page.short_description : "",
		applicationName: 'Gilace',
		authors: [{ name: 'Hoceyn Mohsenkhah' }],
		publisher: 'Hoceyn Mohsenkhah',
		alternates: {
			canonical: '/',
		},
		openGraph: {
			logo: "/assets/images/gilace-logo.svg",
			title: "",
			description: "",
			images: "",
			type: "website",
			url: ""
		},
		twitter: {
			title: "",
			description: "",
			image: "",
			cardType: "summary_large_image",
		},
		robots:{
			index:true,
			follow:true,
			googleBot:{
				index: true,
				follow: true
			}
		}

	}
	if(!page)
	{
		return exportData;
	}
	if(config && config.canonicals )
	{
		exportData.alternates.canonical = config.canonicals
	}
	let openGraph = {
			title:  page.title,
			description:  page.short_description ??"",
			images: page.avatar ? process.env.NEXT_PUBLIC_UPLOAD_URL + "/" +  page.avatar :"",
			logo:process.env.NEXT_PUBLIC_APP_BASE_URL + "/assets/images/gilace-logo.svg",
			type: "website",
			url: ""
	}
	let twitter = {
			title:  page.title,
			description:  page.short_description??"",
			image: page.avatar ? process.env.NEXT_PUBLIC_UPLOAD_URL + "/" + page.avatar:"",
			cardType: "summary_large_image",

		}
	if (config && config.useSiteName && settings && page)
	{
		exportData.title = settings.find((setting:any) => setting?.name == "site_name")?.value + " | " + page.title
	}
	if (config && config.url)
	{
		openGraph.url = config.url;
	}

	if(config && config.useOpenGraph)
	{
		exportData.openGraph = openGraph;
	}
	if(config && config.useTwitter)
	{
		exportData.twitter = twitter;
	}
	return exportData;
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
