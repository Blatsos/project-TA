import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Contact from "./comps/contact";
import { Route, Routes } from "react-router";
import Graphic from "./comps/graphic";
import Layout from "./comps/layout";
import Home from "./comps/home";
import Photography from "./comps/photography";
import { deepOrange, grey, purple, red } from "@mui/material/colors";
import About from "./comps/about";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: grey[900],
    },
    secondary: {
      main: grey[500],
    },
  },
  typography: {
    fontFamily: 'Roboto'
  }
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
            <Route path="/about" element={<About />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
