import { DefaultTheme } from "styled-components"

export const theme: DefaultTheme = {
  main: {
    color: {
      background: "#e0e0e0",
      hover: "#aeaeae",
      border: "#3D5AFE",
      outlineHover: "rgba(41, 98, 255, 0.1)",
    },
    text: {
      main: "#3f3f3f",
      disabled: "#9E9E9E",
      color: "#3D5AFE",
    },
  },
}

export const primaryTheme: DefaultTheme = {
  main: {
    color: {
      background: "#2962FF",
      hover: "#0039CB",
      border: "#2962FF",
      outlineHover: "rgba(41, 98, 255, 0.1)",
    },
    text: {
      main: "#FFFFFF",
      disabled: "#9E9E9E",
      color: "#3D5AFE",
    },
  },
}
export const secondaryTheme: DefaultTheme = {
  main: {
    color: {
      background: "#455A64",
      hover: "#1C313A",
      border: "#455A64",
      outlineHover: "rgba(69, 90, 100, 0.1)",
    },
    text: {
      main: "#FFFFFF",
      disabled: "#9E9E9E",
      color: "#455A64",
    },
  },
}
export const dangerTheme: DefaultTheme = {
  main: {
    color: {
      background: "#D32F2F",
      hover: "#9A0007",
      border: "#D32F2F",
      outlineHover: "rgba(211, 47, 47, 0.1)",
    },
    text: {
      main: "#FFFFFF",
      disabled: "#9E9E9E",
      color: "#D32F2F",
    },
  },
}
