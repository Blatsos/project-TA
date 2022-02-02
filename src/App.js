import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import Contact from "./comps/contact";
import { Route, Routes } from "react-router";
import Graphic from "./comps/graphic";
import Layout from "./comps/layout";
import Home from "./comps/home";
import Photography from "./comps/photography";

const theme = createTheme({
  palette: {
    primary: red,
    secondary: {
      main: "#FFFFFF",
    },
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
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/photography" element={<Photography />} />
            <Route path="/graphic" element={<Graphic />} />
            <Route path="/shop" element={<h1>Eshop</h1>} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
