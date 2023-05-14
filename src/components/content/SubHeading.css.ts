import { style } from "@vanilla-extract/css";
import { theme } from "../../theme.css";

export const heading = style({
  marginBlockStart: theme.spacing.grand,
  marginBlockEnd: theme.spacing.medium
});
