const HtmlContainer = ({html}) => {
	return (
		<div className={`
				[&_img]:inline-block [&_img]:md:max-w-96 [&_img]:w-full [&_img]:h-auto
				[&_img]:rounded-2xl [&_img]:overflow-hidden
				[&_img]:shadow-lg [&_img]:shadow-slate-900/50
				[&_img]:animate-onTheEarth
				[&_img]:m-4
				[&_h2]:text-violet-100 [&_h2]:mb-2 [&_h2]:text-3xl [&_h2]:font-light
				[&_h3]:text-slate-400 [&_h3]:mb-4 [&_h3]:text-lg [&_h3]:font-light
				[&_.alert]:p-8 [&_.alert]:bg-slate-900 [&_.alert]:my-8 [&_.alert]:bg-opacity-20 [&_.alert]:rounded-lg [&_.alert]:text-sm [&_.alert]:text-slate-400 [&_.alert]:flex
				
				`} dangerouslySetInnerHTML={{__html: html}}></div>
	)
}
export default HtmlContainer