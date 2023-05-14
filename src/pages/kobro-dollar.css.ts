import { style } from "@vanilla-extract/css";
import { theme } from "../theme.css";

export const invest = style({
  marginBlock: theme.spacing.humongous,
  fontSize: theme.fontSize.humongous,
  textAlign: "center"
});

export const graph = style({
  marginBlock: theme.spacing.grand,
  border: "1px dotted rgb(33 33 33)",
  width: "100%",
  position: "relative"
});
