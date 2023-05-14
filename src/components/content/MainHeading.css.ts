import { style } from "@vanilla-extract/css";
import { theme } from "../../theme.css";

export const heading = style({
  marginBlockStart: 0,
  marginBlockEnd: theme.spacing.grand
});
