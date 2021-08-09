/** @jsxImportSource theme-ui */

import { Flex } from "theme-ui";
import Spinner from "./Spinner";
import { createPortal } from "react-dom";

const CertWaiting = () => {
  if (typeof document === "undefined") {
    return null;
  }

  const elm = document.getElementById("modal");
  if (!elm) {
    return null;
  }

  return createPortal(
    <Flex
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgb(255, 255, 255, .8)",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 7,
      }}
    >
      <Spinner />
    </Flex>,
    elm
  );
};

export default CertWaiting;
