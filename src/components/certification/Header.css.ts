import { theme } from "@/theme.css";
import { style } from "@vanilla-extract/css";

export const header = style({
  textAlign: "center",
  marginBlockStart: theme.spacing.medium,
  marginBlockEnd: theme.spacing.grand
});

export const heading = style({
  fontSize: theme.fontSize.humongous,
  fontFamily: theme.fontFamily.kobros,
  margin: 0,
  letterSpacing: "normal",
  fontWeight: 400,
  lineHeight: 1.2
});

export const subHeading = style({
  fontWeight: 400,
  fontSize: theme.fontSize.medium,
  margin: 0,
  lineHeight: 1.2
});
