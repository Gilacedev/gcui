function persianToFinglishSlug(persianText: string): string {
	const map = {
		'ا': 'a',
		'ب': 'b',
		'پ': 'p',
		'ت': 't',
		'ث': 's',
		'ج': 'j',
		'چ': 'ch',
		'ح': 'h',
		'خ': 'kh',
		'د': 'd',
		'ذ': 'z',
		'ر': 'r',
		'ز': 'z',
		'ژ': 'zh',
		'س': 's',
		'ش': 'sh',
		'ص': 's',
		'ض': 'z',
		'ط': 't',
		'ظ': 'z',
		'ع': 'a',
		'غ': 'gh',
		'ف': 'f',
		'ق': 'gh',
		'ک': 'k',
		'گ': 'g',
		'ل': 'l',
		'م': 'm',
		'ن': 'n',
		'و': 'v',
		'ه': 'h',
		'ی': 'y'
	};

	// Convert Persian text to Finglish
	let finglishText = '';
	for (let char of persianText) {
		finglishText += map[char] || char;
	}

	// Create slug: allow only letters and dashes
	let slug = finglishText
		.replace(/[^a-zA-Z0-9\s-]/g, '') // Remove non-letter, non-number, non-space, non-dash characters
		.replace(/\s+/g, '-') // Replace spaces with dashes
		.toLowerCase(); // Convert to lowercase

	return slug;
}

function  validateSlug(input) {
	input.value = input.value.replace(/[^a-zA-Z-]/g, '');
}
export {
	persianToFinglishSlug,
	validateSlug
}

