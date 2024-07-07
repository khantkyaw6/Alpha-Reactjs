import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Toaster } from "sonner";
import "./index.css";
import { store } from "./app/store.js";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
	<Provider store={store}>
		<Toaster position='top-right' richColors />
		<App />
	</Provider>
);
