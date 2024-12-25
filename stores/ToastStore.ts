
type Toast = {
	[key: string]: any; 
  };
  
  type ToastListener = () => void;
  
  let toastListener: ToastListener[] = []; 
  let toast: Toast = {}; 
  
  export const ToastStores = {
	setToast(status: Toast) { 
	  toast = status;
	  emitToastChange();
	},
	subscribe(listener: ToastListener) { 
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
  