import { theme } from "@/theme.css";
import { style } from "@vanilla-extract/css";

export const main = style({
  maxWidth: theme.size.container,
  paddingInline: theme.spacing.medium,
  marginBlock: theme.spacing.grand,
  marginInline: "auto"
  // alignItems: "center",
  // justifyContent: "center",
  // height: "100vh",
  // display: "flex"
});

export const footer = style({
  maxWidth: theme.size.container,
  paddingInline: theme.spacing.medium,
  marginBlock: theme.spacing.humongous,
  marginInline: "auto",
  textAlign: "center"
  // alignItems: "center",
  // justifyContent: "center",
  // height: "100vh",
  // display: "flex"
});

export const container = style({
  textAlign: "center"
});

export const image = style({
  display: "inline-block",
  marginBlockEnd: theme.spacing.humongous
});

export const heading = style({
  color: "rgb(150,114,93)",
  textAlign: "center",
  fontFamily: theme.fontFamily.kobros,
  fontSize: theme.fontSize.humongous,
  letterSpacing: "3px",
  margin: 0,
  lineHeight: 1,
  textShadow: `1px 1px 1px rgb(0 0 0)`,

  "@media": {
    "(min-width: 640px)": {
      fontSize: theme.fontSize.stupendous
    }
  }
});

export const slogan = style({
  fontSize: theme.fontSize.medium,
  textAlign: "center",

  "@media": {
    "(min-width: 640px)": {
      fontSize: theme.fontSize.grand
    }
  }
});

export const flexxerContainer = style({
  display: "flex",
  alignItems: "stretch",
  justifyContent: "center",
  alignContent: "flex-start",
  width: "100%",
  gap: theme.spacing.grand,
  marginBlock: theme.spacing.humongous,
  flexWrap: "wrap"
});

export const flexxerItem = style({
  backgroundColor: theme.color.black,
  padding: theme.spacing.medium,
  color: theme.color.white,
  minWidth: "12rem",
  flexBasis: "20%",
  flexGrow: 2,
  flexShrink: 2,
  maxWidth: "25%",
  borderRadius: theme.borderRadius.medium,
  alignContent: "stretch"
});

export const disabled = style({
  opacity: 0.5,
  cursor: "not-allowed"
});

export const link = style({
  color: "rgb(255 255 255)",
  textDecoration: "underline"
});

export const flexxerIcon = style({
  fontSize: "4em",
  lineHeight: 1.5
});
