import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

import UserProvider from "./context/UserProvider.jsx";
import ThemeProvider from "./context/ThemeProvider.jsx";
import CurenncyProvider from "./context/CurenncyContext.jsx";

createRoot(document.getElementById("root")).render(
  <CurenncyProvider>
    <ThemeProvider>
      <UserProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </UserProvider>
    </ThemeProvider>
  </CurenncyProvider>,
);
