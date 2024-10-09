const GetFileExtension = (filename: string): string => {
	  return filename.split('.').pop() || '';
}
const GetFileType = (filename: string): string => {
	const extension = GetFileExtension(filename);
	switch (extension) {
		case 'pdf':
			return 'pdf';
		case 'doc':
		case 'docx':
			return 'doc';
		case 'xls':
		case 'xlsx':
			return 'xls';
		case 'ppt':
		case 'pptx':
			return 'ppt';
		case 'jpg':
		case 'jpeg':
		case 'png':
		case 'gif':
			return 'img';
		case 'mp4':
		case 'avi':
		case 'flv':
		case 'mov':
		case 'wmv':
			return 'video';
		case 'mp3':
		case 'wav':
		case 'wma':
		case 'ogg':
			return 'audio';
		default:
			return 'other';
	}
}
export {
	GetFileExtension,
	GetFileType
}