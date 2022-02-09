/** @jsxImportSource theme-ui */

import Head from "next/head";
import { Box, Button, Paragraph } from "theme-ui";
import ContentBase from "../components/ContentBase";
import { DateTime } from "luxon";

import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
} from "chart.js";
import { range } from "ramda";

ChartJS.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title
);

const getData = () => {
  const startDate = DateTime.utc(2008, 1, 1);
  const now = DateTime.now().toUTC();

  const numberOfDataPoints = 121;

  return [
    range(0, numberOfDataPoints).map((x) => {
      const thisDate = now.minus({
        months: numberOfDataPoints - x,
      });

      return thisDate.toLocaleString();
    }),
    range(0, numberOfDataPoints).map((x) => {
      const thisDate = now.minus({
        months: numberOfDataPoints - x,
      });

      const diff = thisDate.diff(startDate, "days");

      return Math.pow((diff.days - 1000) / 800, 6);

      console.log(diff.days, "days");

      return x;
    }),
  ];

  /*
  return {
    labels: ["Jun", "Jul", "Aug"],
    datasets: [
      {
        id: 1,
        label: "xoox ox",
        data: [5, 6, 7],
      },
    ],
  };
  */
};

const KobroDollarPage = () => {
  const [labels, data] = getData();

  const dataset = {
    labels,
    datasets: [
      {
        id: 1,
        label: "",
        data,
      },
    ],
  };

  console.log("Data set", dataset);

  return (
    <>
      <Head>
        <title>
          Kobro$, the centralized crypto currency - Dr. Kobros Foundation
        </title>
      </Head>
      <ContentBase title="Kobro$, the centralized crypto currency">
        <Box my={4}>
          <Paragraph>
            Since it's inception in 2008, the value of our uniquely centralized
            blockchain <strong>Kobro$</strong> crypto currency has only gone up.
            An investment made to the Kobro Dollar Exchange is an investment in
            your future!
          </Paragraph>

          <Box
            my={4}
            sx={{
              fontSize: 4,
              textAlign: "center",
            }}
          >
            <Button
              onClick={() => {
                alert(
                  "An error occurred in the server due to high demand. Please try again later."
                );
              }}
              sx={{ cursor: "pointer" }}
            >
              Invest in Kobro$
            </Button>
          </Box>
        </Box>

        <Box my={4}>
          <h2>Kobro$ / US$ valuation chart, 120 months</h2>

          <Line datasetIdKey="id" data={dataset} options={{}} />
        </Box>
      </ContentBase>
    </>
  );
};

export default KobroDollarPage;
