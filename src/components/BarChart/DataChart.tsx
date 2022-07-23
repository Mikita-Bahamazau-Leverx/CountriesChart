import "./dataChart.scss";

import React from "react";

import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

interface AxisDefs {
  x: string;
  y: string;
}

interface DataChartProps {
  data: Record<string, any>[];
  axisDefs: AxisDefs;
}

const DataChart = ({ data, axisDefs }: DataChartProps) => {
  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <XAxis dataKey={axisDefs.x} />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey={axisDefs.y} fill="grey" />
    </BarChart>
  );
};

export default DataChart;
