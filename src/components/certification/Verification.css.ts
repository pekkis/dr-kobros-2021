import { theme } from "@/theme.css";
import { style } from "@vanilla-extract/css";

export const verification = style({
  fontSize: theme.fontSize.small,
  marginBlockStart: theme.spacing.grand,
  marginBlockEnd: theme.spacing.medium,
  paddingInline: theme.spacing.medium,
  textAlign: "center"
});
