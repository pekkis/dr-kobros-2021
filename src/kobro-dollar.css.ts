import { style } from "@vanilla-extract/css";
import { theme } from "./theme.css";

export const invest = style({
  marginBlock: theme.spacing.humongous,
  fontSize: theme.fontSize.humongous,
  textAlign: "center"
});

export const graph = style({
  marginBlock: theme.spacing.grand,
  border: "1px solid rgb(33 33 33)",
  borderRadius: theme.borderRadius.medium,
  width: "100%",
  position: "relative",
  padding: theme.spacing.medium
});
