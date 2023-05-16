import { globalStyle } from "@vanilla-extract/css";

globalStyle("html", {
  lineHeight: "1.8"
});

globalStyle("body", {
  fontSize: "18px",
  lineHeight: "1.8"
});

globalStyle("html, body", {
  fontFamily: "Poppins, sans-serif",
  padding: 0,
  margin: 0
});

globalStyle("*", {
  boxSizing: "border-box"
});

globalStyle("a", {
  color: "#442b17",
  textDecoration: "underline"
});
