/** @jsxImportSource theme-ui */
import { FC, ReactNode } from "react";
import kobroseal from "../assets/kobroseal-smaller.png";

/*

div#inner {
    margin: 0 auto;
    width: 960px;
    border: 10px solid #e3d5ca;
    -moz-border-radius-topleft: 15px;
    -webkit-border-top-left-radius: 15px;
    border-top-left-radius: 15px;
    -moz-border-radius-bottomright: 15px;
    -webkit-border-bottom-right-radius: 15px;
    border-bottom-right-radius: 15px;
}
*/

type Props = {
  children: ReactNode;
};

const CertBorder: FC<Props> = ({ children }) => {
  return (
    <div
      sx={{
        borderWidth: "10px",
        borderStyle: "solid",
        borderColor: "certborder",
        backgroundImage: `url(${kobroseal.src})`,
        backgroundPosition: "100% 100%",
        backgroundRepeat: "no-repeat",
        borderBottomRightRadius: "15px",
        borderTopLeftRadius: "15px"
      }}
    >
      {children}
    </div>
  );
};

export default CertBorder;
