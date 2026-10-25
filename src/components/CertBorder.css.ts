import { style } from "@vanilla-extract/css";
import { theme } from "../theme.css";

export const certBorder = style({
  borderWidth: "10px",
  borderStyle: "solid",
  borderColor: theme.color.certborder,
  // Served from public/: Vanilla Extract's Turbopack plugin cannot evaluate Next's image
  // imports inside .css.ts files.
  backgroundImage: "url(/kobroseal-smaller.png)",
  backgroundPosition: "100% 100%",
  backgroundRepeat: "no-repeat",
  borderBottomRightRadius: "15px",
  borderTopLeftRadius: "15px"
});
