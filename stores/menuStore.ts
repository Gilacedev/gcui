// Define the type for the listener
type MenuListener = () => void;

let menuListener: MenuListener[] = []; 
let menu = false;

export const MenuStores = {
  setMenu(status: boolean) { 
    menu = status;
    emitMenuChange();
  },
  subscribe(listener: MenuListener) { 
    menuListener = [...menuListener, listener];
    return () => {
      menuListener = menuListener.filter(l => l !== listener);
    };
  },
  getSnapshot() {
    return menu;
  },
  getServerSnapshot: (() => { return menu })
};

function emitMenuChange() {
  for (let listener of menuListener) {
    listener(); // Call each listener
  }
}
