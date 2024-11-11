let authListener: Function[] = [];
let auth = false;

if (typeof window !== 'undefined') {
  auth = localStorage.getItem('auth') === 'true';
}

export const AuthStores = {
  setAuth(status: boolean) {
    auth = status;
    if (typeof window !== 'undefined') {
      localStorage.setItem('auth', status.toString()); 
    }
    emitAuthChange(); 
  },
  subscribe(listener: Function) {
    authListener = [...authListener, listener];
    return () => {
      authListener = authListener.filter((l) => l !== listener);
    };
  },
  getSnapshot() {
    return auth;
  },
  getServerSnapshot: () => {
    return auth;
  },
};

function emitAuthChange() {
  authListener.forEach((listener) => listener());
}
