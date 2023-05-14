import { theme } from "@/theme.css";
import { style } from "@vanilla-extract/css";

export const input = style({
  width: "100%",
  maxWidth: "600px",
  display: "inline-block",
  padding: theme.spacing.small,
  borderRadius: theme.borderRadius.small,
  fontFamily: "inherit"
});
