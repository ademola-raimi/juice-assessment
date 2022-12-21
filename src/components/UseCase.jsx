import React from "react";
// import ButtonsIcon from "../ButtonsIcon";
import "../assets/scss/usecase.scss";

const UseCases = (props) => {
  const { className } = props;

  return (
    <div className="use-cases">
      <div className="operating-businesses roobert-bold-licorice-28px">{props.title}</div>
      {/* <ButtonsIcon className={className} /> */}
    </div>
  );
}

export default UseCases;
