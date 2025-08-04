import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  // This comment is from Branch-Test
  <StrictMode>
    <App />
  </StrictMode>
);
