import React, { useEffect, useRef } from "react";
import Chart from 'chart.js/auto';
import './styles/chart.css';

const PieChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const myChartRef = chartRef.current.getContext('2d');
      chartInstance.current = new Chart(myChartRef, {
        type: "pie",
        data: {
          labels: ["Entertainment", "Food", "Medical","Clothes","Transportation","Education","Savings","Household"],
          datasets: [
            {
              data: [300, 100, 200,30,400,65,600,120],
              backgroundColor: [
                'rgb(255, 87, 145)',
                'rgb(255, 255, 87)', // Yellow
                'rgb(145, 87, 255)',
                'rgb(255, 145, 87)',
                'rgb(87, 145, 255)',
                'rgb(145, 255, 87)',
                'rgb(255, 87, 255)',
                'rgb(87, 255, 255)'
              ],
            },
          ],
        },
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [chartRef]);

  return (
    <div className="canvas-container">
      <canvas ref={chartRef} className="canvas" />
    </div>
  );
};

export default PieChart;

