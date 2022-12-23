import React, { Suspense, lazy } from "react";
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
            <Suspense>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/about-us"
          element={
            <Suspense>
              <AboutUs />
            </Suspense>
          }
        />
        <Route
          path="/contact-us"
          element={
            <Suspense>
              <ContactUs />
            </Suspense>
          }
        />
        <Route
          path="/terms-conditions"
          element={
            <Suspense>
              <TermsConditions />
            </Suspense>
          }
        />
        <Route
          path="/article"
          element={
            <Suspense>
              <Article />
            </Suspense>
          }
        /> 
        <Route
          path="/articles"
          element={
            <Suspense>
              <Articles />
            </Suspense>
          }
        />      
      </Routes>
    </Router>
  );
}

export default App;