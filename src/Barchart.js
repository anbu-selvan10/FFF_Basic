import React, { useEffect, useRef } from 'react'; 
import Chart from 'chart.js/auto';
import './styles/barchart.css';

const PairedBarGraph = (props) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const myChartRef = chartRef.current.getContext('2d');

    const data = {
      labels: ['Entertainment',
      'Food Expenses',
      'Medical Expenses',
      'Clothing',
      'Transportation',
      'Education',
      'Savings',
      'Household',],

      datasets: [
        {
          label: 'Budgeted Amount',
          backgroundColor: 'rgba(255, 99, 71, 0.5)',
          borderColor: 'rgba(255, 99, 71, 0.5)',
          borderWidth: 1,
          data: props.data[0],
        },
        {
          label: 'Amount Spent',
          backgroundColor: 'rgba(173, 216, 270, 0.5)',
          borderColor: '#rgb(0,0,0)',
          borderWidth: 1,
          data: props.data[1],
        },
      ],
    };

    const config = {
      type: 'bar',
      data: data,
      options: {
        scales: {
          x: {
            stacked: true,
          },
          y: {
            beginAtZero: true,
          },
        },
      },
    };

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    chartInstance.current = new Chart(myChartRef, config);

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [chartRef, props.data]);

  return (
    <div className="canvas3-container3"> 
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <canvas ref={chartRef} className="canvas3"></canvas>
    </div>
    </div>
  );
};

export default PairedBarGraph;