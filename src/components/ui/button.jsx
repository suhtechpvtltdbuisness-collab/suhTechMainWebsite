import React from "react";
// This import assumes your build setup converts SVGs to URLs
import rectangleIcon from "../../../public/icons/Rectangle 7143.svg";
import Image from "next/image";

const Button = ({
  width = "w-auto",
  height = "h-auto",
  text = "Button",
  onClick,
  className = "",
}) => {
  return (
    <div
      onClick={onClick}
      className={` ${className} ${width} ${height}  `}
      style={{ minWidth: "120px", minWidth: { md: "150px" } }} // Fixed the style object syntax
    >
      {/* Button text with z-index to stay above the animation */}
      <span className="relative z-10 text-center text-[#FFF] font-dm-sans font-semibold text-lg md:text-xl whitespace-nowrap flex-shrink-0">
        {text}
      </span>

    </div>
  );
};

export default Button;
