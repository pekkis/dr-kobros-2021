import { style } from "@vanilla-extract/css";
import kobroseal from "../assets/kobroseal-smaller.png";
import { theme } from "../theme.css";

export const certBorder = style({
  borderWidth: "10px",
  borderStyle: "solid",
  borderColor: theme.color.certborder,
  backgroundImage: `url(${kobroseal.src})`,
  backgroundPosition: "100% 100%",
  backgroundRepeat: "no-repeat",
  borderBottomRightRadius: "15px",
  borderTopLeftRadius: "15px"
});
