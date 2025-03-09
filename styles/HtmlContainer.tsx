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
[&_table]:w-full [&_table]:my-4 [&_table]:block [&_table]:overflow-x-auto sm:[&_table]:table
sm:[&_table_thead]:table-header-group [&_table_thead]:block
[&_table_tbody]:block sm:[&_table_tbody]:table-row-group
[&_table_tr]:block sm:[&_table_tr]:table-row [&_table_tr]:border [&_table_tr]:border-slate-700 [&_table_tr]:mb-4 sm:[&_table_tr]:mb-0
[&_table_td]:block sm:[&_table_td]:table-cell [&_table_td]:sm:border [&_table_td]:border-slate-700 [&_table_td]:p-2 sm:[&_table_td]:p-4 [&_table_td]:before:font-bold [&_table_td]:before:content-[attr(data-label) ": "] [&_table_td]:before:block sm:[&_table_td]:before:hidden
[&_table_th]:p-2 [&_table_th]:text-violet-400 sm:[&_table_th]:p-4 [&_table_th]:block sm:[&_table_th]:table-cell [&_table_th]:font-bold [&_table_th]:bg-slate-950		
			
			[&_ul]:list-disc [&_ul]:list-inside [&_ul]:pl-4
			[&_ol]:list-decimal [&_ol]:list-inside [&_ol]:pl-4
			[&_li]:my-2
			[&_code]:bg-slate-950 [&_code]:text-slate-300 [&_code]:p-2 [&_code]:rounded-lg
			[&_pre]:bg-slate-950 [&_pre]:text-slate-300 [&_pre]:p-4 [&_pre]:rounded-lg
			[&_]:border-l-4 [&_blockquote]:border-amber-300 [&_blockquote]:pl-4 [&_blockquote]:my-4
			[&_hr]:border-0 [&_hr]:border-t-2 [&_hr]:border-slate-400
		`} dangerouslySetInnerHTML={{ __html: html }}
	  ></div>
	);
  };
  
  export default HtmlContainer;
  