import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './styles/chart.css';

const PieChart = (props) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const myChartRef = chartRef.current.getContext('2d');
      chartInstance.current = new Chart(myChartRef, {
        type: 'pie',
        data: {
          labels: props.labels,
          datasets: [
            {
              data: props.data,
              backgroundColor: props.backgroundColor,
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
  }, [chartRef, props.labels, props.data, props.backgroundColor]);

  return (
    <div className="canvas-container">
      <canvas ref={chartRef} className="canvas" />
    </div>
  );
};

export default PieChart;
