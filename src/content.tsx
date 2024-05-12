import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = document.createElement("div");
root.id = "crx-root";
document.body.appendChild(root);

ReactDOM.createRoot(root).render(
	<React.StrictMode>
		<div id="hello">
			Hello from CRXJS
		</div>
	</React.StrictMode>
);
