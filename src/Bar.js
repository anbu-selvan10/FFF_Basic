import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const PairBarChart = (props) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const barChartData = {
      labels: [
        'Entertainment',
        'Food Expenses',
        'Medical Expenses',
        'Clothing',
        'Transportation',
        'Education',
        'Savings',
        'Household',
      ],
      datasets: [
        {
          label: 'Budgeting Amount',
          backgroundColor: 'pink',
          borderColor: 'red',
          borderWidth: 1,
          data: props.data[0],
        },
        {
          label: 'Amount actually spent',
          backgroundColor: 'lightblue',
          borderColor: 'blue',
          borderWidth: 1,
          data: props.data[1],
        },
      ],
    };

    const chartOptions = {
      responsive: true,
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Bar Chart',
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    };

    const ctx = chartRef.current.getContext('2d');

    chartInstance.current = new Chart(ctx, {
      type: 'bar',
      data: barChartData,
      options: chartOptions,
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [chartRef, props.data]);

  return (
    <div>
      <canvas ref={chartRef} />
    </div>
  );
};

export default PairBarChart;