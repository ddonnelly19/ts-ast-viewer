import { createRoot } from 'react-dom/client'
import { App } from "./App.js";
import { AppContextProvider } from "./AppContext.js";
import "./external/react-treeview.css";
const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <AppContextProvider>
    <App />
  </AppContextProvider>,
);
