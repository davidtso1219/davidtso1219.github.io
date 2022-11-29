import "./Chart.css";

import ChartBar from "./ChartBar";

const Chart = (props) => {
  const dataPoints = props.dataPoints;
  const dataPointValues = props.dataPoints.map((point) => point.value);
  const maxValue = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          label={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxValue}
        />
      ))}
    </div>
  );
};

export default Chart;
