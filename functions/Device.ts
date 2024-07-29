"use server";
import {headers} from 'next/headers';

const headersList = headers()
const isMobileUserAgent = (userAgent) => {
	return /iPhone|iPad|iPod|Android/i.test(userAgent);
};
const result = isMobileUserAgent(headersList.get('user-agent'))

export default async function Device() {
	console.log("userAgent", result)
	return result
};