import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data }) => {
  const chartData = {
    labels: data.map(item => item.name),
    datasets: [
      {
        data: data.map(item => item.value),
        backgroundColor: data.map(item => item.color),
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: '60%', // Makes it a Doughnut chart
    plugins: {
      legend: {
        position: 'right',
        labels: {
          usePointStyle: true,
          boxWidth: 8,
          padding: 10,
        },
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `${tooltipItem.label}: ${tooltipItem.raw}%`,
        },
      },
    },
  };

  return (
    <div style={{ width: '300px', margin: 'auto' }}>
      <Doughnut data={chartData} options={options} />
    </div>
  );
};

export default PieChart;
