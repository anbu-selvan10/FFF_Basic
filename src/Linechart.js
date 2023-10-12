import React, { useEffect, useRef } from "react";
import Chart from 'chart.js/auto';
import './styles/chartline.css';

const Linechart = (props) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    
    const myChartRef = chartRef.current.getContext('2d');
    chartInstance.current = new Chart(myChartRef, {
      type: "line",
      data: {
        labels: props.labels,
        datasets: [
          {
            label: "Line Chart",
            data: props.data,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            borderWidth: 2
          }
        ]
      }
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="canvas2-container2">
      <canvas ref={chartRef} className="canvas2" />
    </div>
  );
};

export default Linechart;

