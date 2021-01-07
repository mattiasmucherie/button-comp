import React, { ButtonHTMLAttributes, MouseEventHandler } from "react"
import styled, { DefaultTheme } from "styled-components"
import { dangerTheme, primaryTheme, secondaryTheme, theme } from "../themes"

interface CustomButtonProps {
  variant?: "outline" | "text"
  disableShadow?: boolean
  size?: "sm" | "md" | "lg"
}
interface IconProps {
  leftPadding?: boolean
  rightPadding?: boolean
}
const ButtonText = styled.span`
  display: inline;
`
const Icon = styled.i<IconProps>`
  display: inline;
  padding-left: ${(props) => (props.leftPadding ? "0.5rem" : null)};
  padding-right: ${(props) => (props.rightPadding ? "0.5rem" : null)};
  font-size: 18px;
`
const CustomButton = styled.button<CustomButtonProps>`
  display: flex;
  justify-content: center;
  border: ${(props) =>
    props.variant === "outline"
      ? "1px solid" + props.theme.main.color.border
      : "none"};
  font-family: "Noto Sans JP", sans-serif;
  font-size: 14px;
  line-height: 20px;
  padding: ${(props) =>
    props.size === "sm"
      ? "6px 12px "
      : props.size === "lg"
      ? "11px 22px "
      : "8px 16px"};
  border-radius: 6px;
  background: ${(props) =>
    props.variant ? "inherit" : props.theme.main.color.background};
  color: ${(props) =>
    props.variant ? props.theme.main.text.color : props.theme.main.text.main};
  font-weight: 500;
  box-shadow: ${(props) =>
    props.variant || props.disableShadow
      ? "none"
      : "0 2px 3px rgba(51, 51, 51, 0.2)"};
  &:hover {
    background: ${(props) =>
      props.variant
        ? props.theme.main.color.outlineHover
        : props.theme.main.color.hover};
  }
  &:focus {
    background: ${(props) =>
      props.variant
        ? props.theme.main.color.outlineHover
        : props.theme.main.color.hover};
  }
  &:disabled {
    border: none;
    color: ${(props) => props.theme.main.text.disabled};
    box-shadow: none;
    pointer-events: none;
  }
`

interface ButtonProps extends CustomButtonProps {
  onClick?: MouseEventHandler
  disabled?: boolean
  color?: "default" | "primary" | "secondary" | "danger"
  text?: string
  startIcon?: string
  endIcon?: string
  attributes?: ButtonHTMLAttributes<HTMLButtonElement>
}
const Button = ({
  attributes,
  onClick,
  disabled,
  color,
  text,
  startIcon,
  endIcon,
  variant,
  disableShadow,
  size,
}: ButtonProps): JSX.Element => {
  const getTheme = (buttonColor: string | undefined): DefaultTheme => {
    if (buttonColor === "primary") return primaryTheme
    if (buttonColor === "secondary") return secondaryTheme
    if (buttonColor === "danger") return dangerTheme
    return theme
  }
  const renderText = (
    buttonText: string = "Default",
    start?: string,
    end?: string
  ) => {
    if (start) {
      return (
        <>
          <Icon rightPadding className="material-icons">
            {start}
          </Icon>
          <ButtonText>{buttonText}</ButtonText>
        </>
      )
    }
    if (end) {
      return (
        <>
          <ButtonText>{buttonText}</ButtonText>
          <Icon leftPadding className="material-icons">
            {end}
          </Icon>
        </>
      )
    }
    return <ButtonText>{buttonText}</ButtonText>
  }
  return (
    <CustomButton
      onClick={onClick}
      theme={getTheme(color)}
      variant={variant}
      disableShadow={disableShadow}
      disabled={disabled}
      size={size}
      {...attributes}
    >
      {renderText(text, startIcon, endIcon)}
    </CustomButton>
  )
}

export default Button
