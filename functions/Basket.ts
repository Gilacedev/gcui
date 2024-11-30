"use client";

import { BasketCountStores } from "../stores/BasketCountStore";

export default function Add(id: number , content_id:number) {
	if (typeof window === "undefined") {
	  return;
	}
  
	// Get the cards from localStorage
	let storageCards = localStorage.getItem("cards");
	let cards: { id: number; content_id: number }[] = [];

  
	if (storageCards) {
	  try {
		cards = JSON.parse(storageCards);
	  } catch (e) {
		console.error("Error parsing localStorage data:", e);
		return;
	  }
	}
  
	// Check if the ID already exists (ensuring type match)
	if (cards.some((cardId) => cardId.id === id)) {
	  return;
	}
	 // Check if the contentId already exists
	 if (cards.some((item) => item.content_id === content_id)) {
		return;
	  }
  
	// Add the ID to the array and update localStorage
	cards.push({id:id , content_id:content_id});
	BasketCountStores.setBasketCount(cards.length)
	localStorage.setItem("cards", JSON.stringify(cards));
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
	cards = cards.filter((item) => item.id !== id);
	BasketCountStores.setBasketCount(cards.length)
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