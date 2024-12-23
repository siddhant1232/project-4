import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, BarChart } from '../components/charts';
import { ReportCard } from '../components/reports/ReportCard';
import { Wallet, Target, TrendingUp, History } from 'lucide-react';

const Reports: React.FC = () => {
  const monthlyData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Savings',
        data: [30000, 35000, 32000, 37000, 40000, 42000],
      },
    ],
  };

  const reports = [
    {
      title: 'Total Savings',
      value: '₹42,000',
      icon: Wallet,
      change: '+12%',
      color: 'bg-green-500',
    },
    {
      title: 'Budget Goals',
      value: '4/6',
      icon: Target,
      change: '2 remaining',
      color: 'bg-blue-500',
    },
    {
      title: 'Monthly Growth',
      value: '+₹5,000',
      icon: TrendingUp,
      change: '+8%',
      color: 'bg-purple-500',
    },
    {
      title: 'Transactions',
      value: '156',
      icon: History,
      change: 'Last 30 days',
      color: 'bg-indigo-500',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <h1 className="text-3xl font-bold">Financial Reports</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {reports.map((report, index) => (
          <ReportCard key={index} {...report} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-bold mb-4">Savings Trend</h2>
          <LineChart data={monthlyData} />
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-bold mb-4">Category Breakdown</h2>
          <BarChart data={monthlyData} />
        </div>
      </div>
    </motion.div>
  );
};

export default Reports;