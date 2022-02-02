import React from "react";
import PersistentDrawerLeft from "./comps/menu";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { teal } from "@mui/material/colors";
import Contact from "./comps/contact";

const theme = createTheme({
  palette: {
    primary: teal,
    mode: "light",
  },
  typography: {
    fontFamily: "Supermercado",
  },
});

const App = () => {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <PersistentDrawerLeft />
          
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
