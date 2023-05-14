import { theme } from "@/theme.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  width: "100%",
  paddingInline: theme.spacing.medium
});

export const signature = style({
  borderBottomStyle: "solid",
  borderBottomColor: "#000",
  borderBottomWidth: "1px",
  paddingInlineStart: theme.spacing.small
});

export const ragnar = style({
  marginBlockEnd: "-16px"
});

export const gaylord = style({
  marginBlockEnd: "-18px"
});
