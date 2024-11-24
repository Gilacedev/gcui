"use client";
export default function Add(id:number)
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
	if (cards.includes(id)) {
		return;
	}
	cards.push(id);
	localStorage.setItem("cards",JSON.stringify(cards));
}
export function Remove(id:number)
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
	cards = cards.filter((item) => item !== id);
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