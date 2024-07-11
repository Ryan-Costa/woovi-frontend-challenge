import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "@fontsource/nunito/300.css";
import "@fontsource/nunito/300.css";
import "@fontsource/nunito/500.css";
import "@fontsource/nunito/700.css";
import "@fontsource/nunito/800.css";
import { ThemeProvider } from "@emotion/react";
import { DefaultTheme } from "./theme/default.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={DefaultTheme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>
);
