import React from "react";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import TermsConditions from "./pages/TermsConditions";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Articles from "./pages/Articles";
import Article from "./pages/Article";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
              <Home />
          }
        />
        <Route
          path="/contact-us"
          element={
              <ContactUs />
          }
        />
        <Route
          path="/terms-conditions"
          element={
              <TermsConditions />
          }
        />
        <Route
          path="/article"
          element={
              <Article />
          }
        /> 
        <Route
          path="/articles"
          element={
              <Articles />
          }
        />      
      </Routes>
    </Router>
  );
}

export default App;