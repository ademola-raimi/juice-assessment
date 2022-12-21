import React from "react";

const size = {
  width: {
    tiny: "w-15",
    xs: "w-26",
    sm: "w-32",
    md: "w-48",
    lg: "w-52",
    auto: "auto",
    full: "w-full",
  },
};

const variants = {
  type(
    variant,
    color,
    bg,
    border,
    otherCss
  ){
    return variant === "outline"
      ? `${bg} ${color} border ${border} ${otherCss}`
      : `${bg} ${color} ${otherCss}`;
  },
};

const Button = ({
  color = "text-black",
  width = "sm",
  padding = "px-4 py-2",
  variant = "normal",
  children,
  bg,
  border,
  otherCss,
  type,
  fontSize = "text-base"
}) => {
  return (
    <button
      className={`${padding} font-bold rounded-xl ${
        size.width[width]
      } ${variants.type(
        variant,
        color,
        bg,
        border,
        otherCss
      )} ${fontSize}`}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
