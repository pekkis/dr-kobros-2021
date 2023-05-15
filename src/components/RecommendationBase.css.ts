import { theme } from "@/theme.css";
import { style } from "@vanilla-extract/css";

export const main = style({
  paddingInline: theme.spacing.medium
});

export const flex = style({
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  display: "flex"
});

export const centerer = style({
  textAlign: "center"
});

export const image = style({
  marginBlockEnd: theme.spacing.none
});

export const childrenContainer = style({
  marginBlockStart: theme.spacing.medium,
  fontFamily: theme.fontFamily.kobros,
  fontSize: theme.fontSize.grand
});

export const what = style({
  padding: theme.spacing.small
});
