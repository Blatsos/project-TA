import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Contact from "./comps/contact";
import { Route, Routes } from "react-router";
import Graphic from "./comps/graphic";
import Layout from "./comps/layout";
import Home from "./comps/home";
import Photography from "./comps/photography";
import { deepOrange, grey, purple } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: grey,
    secondary: grey,
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
