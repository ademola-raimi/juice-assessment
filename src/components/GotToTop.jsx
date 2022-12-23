import React, { useState, useEffect } from "react";
import "../assets/scss/gototop.scss";

const GoToTop = ({ displayAfter, target }) => {
  const [showButton, setShowButton] = useState(false);
  const handleShowButton = () => {
    if (!showButton && window.scrollY > displayAfter) {
      setShowButton(true);
      return;
    }
    if (!showButton && window.scrollY <= displayAfter) {
      setShowButton(false);
      return;
    }
  };
  window.addEventListener("scroll", handleShowButton);

  useEffect(() => {
    return window.removeEventListener("scroll", handleShowButton);
  });

  const scrollToRef = () => {
    console.log(target);
    window.scrollTo({
      top: target.current.offsetTop,
      behavior: "smooth"
    });
  };

  if (showButton) {
    return <button onClick={scrollToRef} className="my-btn" title="Go to top">Top</button>
  } else {
    return "";
  }
};

export default GoToTop;