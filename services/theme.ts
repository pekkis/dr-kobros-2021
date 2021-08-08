import { funk } from "@theme-ui/presets";
import { Theme } from "theme-ui";

const theme: Theme = {
  ...funk,

  colors: {
    ...funk.colors,
    link: "#442b17",
    certborder: "#e3d5ca",
  },

  sizes: {
    container: "1000px",
  },

  headings: {
    edmunds: {
      fontFamily: "edmunds",
      letterSpacing: "normal",
      fontWeight: 400,
    },
  },

  links: {
    cert: {
      color: "rgb(68, 43, 23)",
      textDecoration: "underline",
    },

    paginator: {
      paddingY: 1,
      paddingX: 2,
      borderRadius: 1,
      backgroundColor: "primary",
      color: "white",
      marginX: 1,
      marginBottom: 2,
      display: "inline-block",
      textDecoration: "none",
    },

    default: {
      color: "link",
      textDecoration: "underline",
    },
    menu: {
      color: "white",
    },
    tag: {
      color: "white",
      textDecoration: "none",
    },
    footer: {
      color: "veryLight",
    },
  },
  styles: {
    ...funk.styles,
    root: {
      fontFamily: "body",
      fontWeight: "body",
      fontSize: 2,
    },
  },
} as Theme;

export default theme;
