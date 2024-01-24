import React from "react";
import ReactDOM from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* GoogleOAuthProvider act as google authentication provider which is wraps the APP */}
    <GoogleOAuthProvider>
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
