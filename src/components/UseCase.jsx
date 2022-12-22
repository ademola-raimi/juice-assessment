import React, { useState } from "react";
import { Button, ButtonArrow } from "./button";
import ArrowUp from "../assets/img/arrow-up.svg";
import ArrowDown from "../assets/img/arrow-down.svg";

const UseCase = (props) => {
  const { title, content } = props;
  const [show, setShow] = useState(false);
  const handleOpen = () => {
    setShow(!show);
  };

  return (
    <div className="use-case">
      <div className="use-case-header" onClick={handleOpen}>
        <div className="roobert-bold-black-small-28px">{title}</div>
        <ButtonArrow arrowType={show ? ArrowUp : ArrowDown} />
      </div>
      {show && (
        <div className="use-case-content">
          <p className="roobert-regular-normal-black-18px">{content}</p>
          <Button className="button-black-bg">
            Contact us
          </Button>
        </div>
      )}
    </div>
  );
}

export default UseCase;
