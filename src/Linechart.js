import React, { useEffect, useRef } from "react";
import Chart from 'chart.js/auto';
import './styles/chartline.css';

const Linechart = () => {
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
        labels: ["January", "February", "March", "April"],
        datasets: [
          {
            label: "Line Chart",
            data: [30, 40, 20, 10, 35],
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

