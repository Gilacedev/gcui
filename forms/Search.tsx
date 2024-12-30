"use client";
import Language from "@/locales/Language";
import Input from "@/components/Input";
import { H2 } from "@/components/Typo";
import { redirect, useSearchParams } from 'next/navigation'
import { useState } from "react";
import Loader from "../Loader";

const Search = ({ show_title }: {
	show_title?: boolean | true;
}) => {
	const searchParams = useSearchParams()
	const keyword = searchParams.get('keyword')
	const [loading, setLoading] = useState(false)

	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		setLoading(true)
		e.preventDefault();
		let data = new FormData(e.currentTarget);
		let search = data.get("search");
		if (typeof search === "string" || search === null) {
			return redirect("/search?keyword=" + search);
		} else {
			console.error("Invalid input, 'search' is a file");
		}
	};

	return (
		<div className="search">
			<form id="form-search" className="flex flex-col gap-2" onSubmit={onSubmit}>
				{show_title && (
					<H2 element="h3">
						{Language().search}
					</H2>
				)}
				<div className="border-b border-black border-opacity-10"></div>
				<Input
					defaultValue={keyword && `${keyword}`}
					type="search"
					icon={loading ?
						<div className="w-8">
							<Loader />
						</div>
						:
						<button
							onClick={(e) => {
								onSubmit
							}}>
							<span
								className="fas fa-search cursor-pointer"
							>
							</span>
						</button>
					}
					placeholder={Language().search}
					name="search"
				/>
			</form>
		</div>
	);
}
export default Search;