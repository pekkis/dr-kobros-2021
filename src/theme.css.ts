import { createGlobalTheme, fontFace } from "@vanilla-extract/css";

const edmunds = fontFace({
  fontWeight: "normal",
  fontStyle: "normal",
  src: "url('/edmunds-webfont.woff')"
});

export const theme = createGlobalTheme(":root", {
  fontSize: {
    body: "18px",
    small: "0.75rem",
    medium: "1.33rem",
    grand: "2rem",
    humongous: "2.5rem",
    stupendous: "5rem"
  },

  fontFamily: {
    kobros: edmunds
  },
  spacing: {
    none: "0",
    miniscule: "0.25rem",
    small: "0.5rem",
    medium: "1rem",
    grand: "2rem",
    humongous: "3rem"
  },

  size: {
    container: "1000px"
  },

  borderRadius: {
    none: "0",
    small: "5px"
  },

  color: {
    link: "#442b17",
    certborder: "#e3d5ca",
    action: "#ff7700",
    white: "rgb(255 255 255)",
    grey: "rgb(33 33 33)"
  }
});
