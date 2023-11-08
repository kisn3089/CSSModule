import { styled } from "styled-components";
import { buttonMode } from "../../styles/mode/buttonMode";

type ButtonProps = { mode: "s" | "xs" | "lg" };

export const ButtonStyle = styled.button<ButtonProps>`
  width: ${({ style, mode }) => style?.width || buttonMode[mode].width};
  height: ${({ style, mode }) => style?.height || buttonMode[mode].height};
  background-color: ${({ style, mode }) =>
    style?.backgroundColor || buttonMode[mode].backgroundColor};
  color: ${({ style, mode }) => style?.color || buttonMode[mode].color};
  border-radius: ${({ style, mode }) =>
    style?.borderRadius || buttonMode[mode].borderRadius};
  border: ${({ style, mode }) =>
    style?.borderRadius || buttonMode[mode].border};
  cursor: ${({ style, mode }) => style?.cursor || buttonMode[mode].cursor};

  transition: 0.4s ease-in-out;

  &:hover {
    background-color: ${({ mode }) => buttonMode[mode].h_background};
    color: ${({ mode }) => buttonMode[mode].h_color};
  }
`;
