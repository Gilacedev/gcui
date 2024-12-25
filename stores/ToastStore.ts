

let toastListener: any = [];
let toast:any = null;

export const ToastStores = {
	setToast(status: any) {
		toast = status;
		emitToastChange();
	},

	subscribe(listener: any) {
		toastListener = [...toastListener, listener];
		return () => {
			toastListener = toastListener.filter((l: any) => l !== listener);
		};
	},

		getSnapshot() {
		return toast;
	},

	getServerSnapshot: () => {
		return toast;
	},
};

function emitToastChange() {
	for (let listener of toastListener) {
		listener();
	}
}
