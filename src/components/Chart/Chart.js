import React from "react";
import ChartBar from "./Chartbar";
import './Chart.css'

//chart component
const Chart = props =>{
    return (
      <div className="chart">
        {props.dataPoints.map((dataPoint) => (
          <ChartBar value={dataPoint.value} maxValue={null} label={dataPoint.label} key={dataPoint.label} />
        ))}
      </div>
    );
}

export default Chart;
