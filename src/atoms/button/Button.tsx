import React, { CSSProperties } from "react";
import { ButtonStyle } from "./ButtonStyles";
import { ButtonMode } from "../../types/button.type";

const Button = ({
  mode,
  customStyle,
}: {
  mode?: ButtonMode;
  customStyle?: CSSProperties;
}) => {
  return (
    <ButtonStyle mode={mode || "xs"} style={customStyle}>
      Button
    </ButtonStyle>
  );
};

export default Button;
