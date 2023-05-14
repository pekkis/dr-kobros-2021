import { style } from "@vanilla-extract/css";
import { theme } from "../../theme.css";

export const input = style({
  padding: theme.spacing.miniscule,
  borderRadius: theme.borderRadius.small,
  width: "10em"
});
