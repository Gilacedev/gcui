type metaConfig = {
	useSiteName?: boolean,
	useOpenGraph?: boolean,
	useTwitter?: boolean
} | undefined
export const meteDataGenerator = (page, settings, config:metaConfig={
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
		title = settings.find((setting) => setting?.name == "site_name")?.value + " | " + page.title
	}

	return {
		title,
		description: page.short_description,
		openGraph: config?.useOpenGraph && openGraph,
		twitter: config?.useTwitter && twitter
	}
}
export const titleCreator = (page,settings)=>
{
	return settings.find((setting) => setting?.name == "site_name")?.value + " | " + page.title
}
