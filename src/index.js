import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import theme from "./theme";

import NavBar from "./components/navbar/NavBar";
import Footer from "./components/Footer";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <NavBar />
      <App />
      <Footer />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
