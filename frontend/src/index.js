import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "bootstrap/dist/css/bootstrap.min.css";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      "Roboto",
      "sans-serif",
    ].join(","),
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
