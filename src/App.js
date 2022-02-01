import "./App.css";

import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import BasicMenu from "./comps/menu";
import { Paper } from "@mui/material";
import { purple } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fefefe",
    },
    secondary: purple,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Paper elevation={0}>
          <BasicMenu />
          <p>Hello!</p>
        </Paper>
      </React.Fragment>
    </ThemeProvider>
  );
}

export default App;
