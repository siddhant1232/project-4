import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface BudgetChartProps {
  spent: number;
  remaining: number;
}

export const BudgetChart: React.FC<BudgetChartProps> = ({ spent, remaining }) => {
  const data = {
    labels: ['Spent', 'Remaining'],
    datasets: [
      {
        data: [spent, remaining],
        backgroundColor: ['#ef4444', '#22c55e'],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: '70%',
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
    },
  };

  return (
    <div className="w-full max-w-xs mx-auto">
      <Doughnut data={data} options={options} />
    </div>
  );
};