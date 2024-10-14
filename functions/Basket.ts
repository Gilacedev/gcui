"use client";
export default function Add(slug:string)
{
	if(typeof window === "undefined")
	{
		return;
	}
	//first get the card from localStorage:
	let storageCards = localStorage.getItem("cards");
	let cards = []
	if(storageCards)
	{
		try {
			cards = JSON.parse(storageCards);
		}
		catch (e) {
			console.log(e)
		}
	}
	if (cards.includes(slug)) {
		return;
	}
	cards.push(slug);
	localStorage.setItem("cards",JSON.stringify(cards));
}
export function Remove(slug:string)
{
	if(typeof window === "undefined")
	{
		return;
	}

	//first get the card from localStorage:
	let storageCards = localStorage.getItem("cards");
	let cards = []
	if(cards)
	{
		try {
			cards = JSON.parse(storageCards);
		}
		catch (e) {
			return [];
		}
	}
	cards = cards.filter((item) => item !== slug);
	localStorage.setItem("cards",JSON.stringify(cards));
}
export function Get()
{
	if(typeof window === "undefined")
	{
		return;
	}

	let storageCards = localStorage.getItem("cards");
	let cards = []
	console.log(storageCards)
	if(storageCards)
	{
		try {
			cards = JSON.parse(storageCards);
		}
		catch (e) {
			return [];
		}
	}
	return cards;
}