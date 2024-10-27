let authListener = [];
let auth = false;

if (typeof window !== 'undefined') {
	// Ensure localStorage is only accessed in the client
	auth = localStorage.getItem('auth') === 'true';
}

export const AuthStores = {
	setAuth(status) {
		auth = status;
		if (typeof window !== 'undefined') {
			localStorage.setItem('auth', status);
		}
		emitAuthChange();
	},
	subscribe(listener) {
		authListener = [...authListener, listener];
		return () => {
			authListener = authListener.filter(l => l !== listener);
		};
	},
	getSnapshot() {
		return auth;
	},
	getServerSnapshot: () => {
		return auth;
	}
};

function emitAuthChange() {
	for (let listener of authListener) {
		listener();
	}
}
