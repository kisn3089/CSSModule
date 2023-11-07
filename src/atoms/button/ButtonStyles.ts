import { styled } from "styled-components";
import { buttonMode } from "../../utils/mode/buttonMode";

type ButtonProps = { mode: "s" | "xs" | "lg" };

export const ButtonStyle = styled.button<ButtonProps>`
  width: ${({ style, mode }) => style?.width || buttonMode[mode].width};
  height: ${({ style, mode }) => style?.height || buttonMode[mode].height};
`;
