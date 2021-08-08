import Link from "../components/Link";
import { Box } from "theme-ui";

const KobroMenu = () => {
  return (
    <Box
      sx={{
        "@media print": {
          display: "none",
        },
      }}
    >
      Dr. Kobros® is a registered trademark of the{" "}
      <Link href="/foundation">Dr. Kobros Foundation</Link>. All rights
      reserved.
      <div>
        <Link href="/">Dr. Kobros recommends</Link>
        {" | "}
        <Link href="/certificate">Dr. Kobros Certifications</Link>

        {/*
        {" | "}<Link href="/dashboard">Dr. Kobros Dashboard</Link>
        {" | "}
        <Link href="/corporate">Investors &amp; Press</Link>
  */}
      </div>
    </Box>
  );
};

export default KobroMenu;
