import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Toaster } from "react-hot-toast";

<Toaster
  position="top-right"
  toastOptions={{
    style: {
      background: "#020617",
      color: "#E5E7EB",
      border: "1px solid rgba(59,130,246,0.4)",
      boxShadow: "0 0 25px rgba(59,130,246,0.25)",
    },
  }}
/>

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
