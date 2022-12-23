import React, { lazy } from "react";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import TermsConditions from "./pages/TermsConditions";

const ContactUs = lazy(() => import("./pages/ContactUs"));
const Articles = lazy(() => import("./pages/Articles"));
const Article = lazy(() => import("./pages/Article"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Home = lazy(() => import("./pages/Home"));

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
          path="/about-us"
          element={
              <AboutUs />
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