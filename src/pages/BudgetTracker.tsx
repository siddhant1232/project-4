import React from 'react';
import { motion } from 'framer-motion';
import { BudgetChart } from '../components/budget/BudgetChart';
import { SpendingTrend } from '../components/budget/SpendingTrend';

const BudgetTracker: React.FC = () => {
  const budget = 50000;
  const spent = 32500;
  const remaining = budget - spent;

  const spendingTrendData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    amounts: [1200, 800, 1500, 2000, 900, 1300, 1100],
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Budget Overview</h1>
        <div className="text-right">
          <p className="text-sm text-gray-500">Monthly Budget</p>
          <p className="text-2xl font-bold">₹{budget.toLocaleString()}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-bold mb-4">Budget Distribution</h2>
          <BudgetChart spent={spent} remaining={remaining} />
          <div className="mt-4 grid grid-cols-2 gap-4 text-center">
            <div>
              <p className="text-gray-500">Spent</p>
              <p className="text-xl font-bold text-red-500">₹{spent.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-gray-500">Remaining</p>
              <p className="text-xl font-bold text-green-500">₹{remaining.toLocaleString()}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-bold mb-4">Spending Trend</h2>
          <SpendingTrend data={spendingTrendData} />
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-bold mb-4">Daily Budget</h2>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500">Today's Budget</p>
            <p className="text-2xl font-bold">₹{(remaining / 30).toFixed(2)}</p>
          </div>
          {remaining < budget * 0.2 && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="bg-red-100 text-red-800 px-4 py-2 rounded-lg"
            >
              Warning: Low Budget!
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default BudgetTracker;