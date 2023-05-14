import { theme } from "@/theme.css";
import { style } from "@vanilla-extract/css";

export const certWaiting = style({
  display: "flex",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgb(255, 255, 255, .8)",
  alignItems: "center",
  justifyContent: "center",
  fontSize: theme.fontSize.stupendous
});
