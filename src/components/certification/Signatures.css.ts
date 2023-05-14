import { theme } from "@/theme.css";
import { style } from "@vanilla-extract/css";

export const signatures = style({
  width: "100%",
  alignItems: "flex-end",
  marginBlockStart: theme.spacing.humongous,
  marginBlockEnd: theme.spacing.grand,
  display: "flex"
});
