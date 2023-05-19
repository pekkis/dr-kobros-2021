"use client";

import { FC } from "react";
import { DateTime } from "luxon";
import { Line } from "react-chartjs-2";
import { range } from "ramda";
import {
  Chart as ChartJS,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  ChartData
} from "chart.js";

ChartJS.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title
);

const getData = (): ChartData<"line", number[] | string[], string> => {
  const startDate = DateTime.utc(2008, 1, 1);
  const now = DateTime.now().toUTC();

  const numberOfDataPoints = 121;

  const [labels, data] = [
    range(0, numberOfDataPoints).map((x) => {
      const thisDate = now.minus({
        months: numberOfDataPoints - x - 1
      });

      return thisDate.toLocaleString();
    }),
    range(0, numberOfDataPoints).map((x) => {
      const thisDate = now.minus({
        months: numberOfDataPoints - x - 1
      });

      const diff = thisDate.diff(startDate, "days");

      return Math.pow((diff.days - 1000) / 800, 6);

      console.log(diff.days, "days");

      return x;
    })
  ];

  const dataset = {
    labels,
    datasets: [
      {
        id: 1,
        label: "",
        data
      }
    ]
  };

  return dataset;
};

const Chart: FC = () => {
  return <Line datasetIdKey="id" data={getData()} options={{}} />;
};

export default Chart;
