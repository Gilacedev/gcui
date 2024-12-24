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
  
  export function Remove(id: number): void {
	if (typeof window === "undefined") {
	  return;
	}
  
	// First get the card from localStorage:
	let storageCards = localStorage.getItem("cards");
	let cards: {id:number}[] = []; // Explicitly type the cards array
  
	if (storageCards) { // Fixed condition to use storageCards
	  try {
		cards = JSON.parse(storageCards) as {id:number}[]; // Type assertion for parsed JSON
	  } catch (e) {
		console.error("Error parsing storage cards:", e);
		return; // Return here since JSON parsing failed
	  }
	}
  
	// Filter out the card with the specified id
	cards = cards.filter((item) => item.id !== id);
  
	// Update the basket count
	BasketCountStores.setBasketCount(cards.length);
  
	// Save updated cards back to localStorage
	localStorage.setItem("cards", JSON.stringify(cards));
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