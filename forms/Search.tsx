"use client";
import Language from "@/locales/Language";
import Input from "@/components/Input";
import {H2} from "@/components/Typo";
import {redirect, useSearchParams} from 'next/navigation'

const Search = ({ setSearch }) => {
	const searchParams = useSearchParams()
	const keyword = searchParams.get('keyword')

	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// get form data
		let data = new FormData(e.currentTarget);
		let search = data.get("search");

		//check setSearch type is function or undefined
		if(setSearch && typeof setSearch === "function")
		{
			return setSearch(search);
		}
		else
		{
			return redirect("/search?keyword="+search)
		}
	}
	  return (
	<div className="search">
		<form className={"flex flex-col gap-2"} onSubmit={onSubmit}>
			<H2 element={"h3"}>
				{Language().search}
			</H2>
			<div className="border-b border-black border-opacity-10"></div>
			<Input defaultValue={`${keyword}`}
				   type={"search"} icon={<span className="fas fa-search"></span>} placeholder={Language().search}  name="search" />
		</form>
	</div>
  );
}
export default Search;