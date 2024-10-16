
//menu store :
let toastListener = [];
let toast = {};

export const ToastStores = {
	setToast(status) {
		toast = status;
		emitToastChange();
	},
	subscribe(listener) {
		toastListener = [...toastListener, listener];
		return () => {
			toastListener = toastListener.filter(l => l !== listener);
		};
	},
	getSnapshot() {
		return toast;
	},
	getServerSnapshot: (() => { return toast })
};


function emitToastChange() {
	for (let listener of toastListener) {
		listener();
	}
}