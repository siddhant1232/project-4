import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface SpendingTrendProps {
  data: {
    labels: string[];
    amounts: number[];
  };
}

export const SpendingTrend: React.FC<SpendingTrendProps> = ({ data }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Daily Spending',
        data: data.amounts,
        borderColor: '#6366f1',
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Daily Spending Trend',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

    return <Line data={chartData} options={options} />;
  };