import "./dataChart.scss";

import React from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const DEFAULT_CLASSNAME = "data-charts";
const CLASSNAMES = {
  WRAPPER: `${DEFAULT_CLASSNAME}__wrapper`,
};

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
    <ResponsiveContainer height={300} className={CLASSNAMES.WRAPPER}>
      <BarChart
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
    </ResponsiveContainer>
  );
};

export default DataChart;
