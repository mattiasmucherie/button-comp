import React from "react";
import styled, { DefaultTheme } from "styled-components";
import { dangerTheme, primaryTheme, secondaryTheme, theme } from "../theme";

interface CustomButtonProps {
  variant?: "outline" | "text";
  disableShadow?: boolean;
  size?: "sm" | "md" | "lg";
}

const CustomButton = styled.button<CustomButtonProps>`
  border: ${(props) => (props.variant === "outline" ? "1px solid" + props.theme.main.color.border : "none")};
  font-family: "Noto Sans Armenian", sans-serif;
  font-size: 14px;
  line-height: 20px;
  padding: ${(props) => (props.size === "sm" ? "6px 12px " : props.size === "lg" ? "11px 22px " : "8px 16px")};
  border-radius: 6px;
  background: ${(props) => (props.variant ? "inherit" : props.theme.main.color.background)};
  color: ${(props) => (props.variant ? props.theme.main.text.color : props.theme.main.text.main)};
  font-weight: 500;
  box-shadow: ${(props) => (props.variant || props.disableShadow ? "none" : "0 2px 3px rgba(51, 51, 51, 0.2)")};
  &:hover {
    background: ${(props) => (props.variant ? props.theme.main.color.outlineHover : props.theme.main.color.hover)};
  }
  &:focus {
    background: ${(props) => (props.variant ? props.theme.main.color.outlineHover : props.theme.main.color.hover)};
  }
  &:disabled {
    border: none;
    color: ${(props) => props.theme.main.text.disabled};
    box-shadow: none;
    pointer-events: none;
  }
`;

interface ButtonProps extends CustomButtonProps {
  onClick?: () => null;
  disabled?: boolean;
  color?: "default" | "primary" | "secondary" | "danger";
}
const Button = (props: ButtonProps): JSX.Element => {
  const getTheme = (color: string | undefined): DefaultTheme => {
    if (color === "primary") return primaryTheme;
    if (color === "secondary") return secondaryTheme;
    if (color === "danger") return dangerTheme;
    return theme;
  };
  return (
    <div>
      <CustomButton
        onClick={props.onClick}
        theme={getTheme(props.color)}
        variant={props.variant}
        disableShadow={props.disableShadow}
        disabled={props.disabled}
        size={props.size}
      >
        <i className="material-icons">face</i> Default
      </CustomButton>
    </div>
  );
};

export default Button;
