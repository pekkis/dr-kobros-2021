import { theme } from "@/theme.css";
import { style } from "@vanilla-extract/css";

export const navClass = style({
  display: "flex",
  gap: theme.spacing.grand,
  flexWrap: "wrap",
  justifyContent: "center"
});
