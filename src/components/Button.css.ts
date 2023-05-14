import { style } from "@vanilla-extract/css";
import { theme } from "@/theme.css";

export const button = style({
  padding: theme.spacing.medium,
  borderRadius: theme.borderRadius.small,

  transitionTimingFunction: "ease-in",
  transitionDuration: "0.2s",
  transitionProperty: "all",
  cursor: "pointer",
  backgroundColor: theme.color.action,
  color: theme.color.white,
  border: `1px solid ${theme.color.grey}`,

  "@media": {
    "(hover: hover)": {
      ":hover": {
        transform: "scale(1.25)",
        rotate: "-2.5deg",
        boxShadow: `
    0 0 60px 30px #f00,
    0 0 100px 60px #ff0,
    0 0 140px 90px #fff
    `
      }
    },

    "(prefers-reduced-motion: reduce) and (hover: hover)": {
      ":hover": {
        transform: "none",
        rotate: "none",
        boxShadow: `0 0 20px 5px #ff0`
      }
    }
  }
});
