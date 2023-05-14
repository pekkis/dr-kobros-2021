import { style } from "@vanilla-extract/css";
import { theme } from "../theme.css";

export const base = style({
  maxWidth: theme.size.container,
  margin: "0 auto",
  paddingBlockStart: theme.spacing.grand,
  paddingBlockEnd: theme.spacing.medium
});

export const title = style({
  textAlign: "center",
  marginBottom: theme.spacing.grand
});
