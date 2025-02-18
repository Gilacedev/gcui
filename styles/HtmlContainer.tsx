type HtmlContainerProps = {
	html: string; 
  };
  
  const HtmlContainer = ({ html }: HtmlContainerProps) => {
	return (
	  <div className={`
			leading-8 text-slate-300
			[&_img]:inline-block  [&_img]:w-full [&_img]:h-auto
			[&_img]:rounded-2xl [&_img]:overflow-hidden
			[&_img.animated]:animate-onTheEarth
			[&_img]:px-4
			[&_img]:my-4
			[&_h1]:text-amber-300
			[&_h1]:my-4
			[&_h1]:text-4xl
			[&_h2]:text-slate-400 
			[&_h2]:mb-3 
			[&_h2]:text-4xl 
			[&_h2]:font-bold 
			[&_h2]:mt-10 
			[&_h2]:tracking-wide 
			[&_h2]:uppercase 
			[&_h2]:pb-2
			[&_h3]:text-amber-400 [&_h3]:mb-4 [&_h3]:text-2xl [&_h3]:font-light
			[&_.alert]:p-8 [&_.alert]:bg-slate-900 [&_.alert]:my-8 [&_.alert]:bg-opacity-20
			[&_.alert]:rounded-lg [&_.alert]:text-sm [&_.alert]:text-slate-400 [&_.alert]:flex
			[&_a]:text-amber-300 [&_a]:hover:text-amber-400
			[&_a]:before:content-['🔗'] [&_a]:before:ml-2
		`} dangerouslySetInnerHTML={{ __html: html }}
	  ></div>
	);
  };
  
  export default HtmlContainer;
  