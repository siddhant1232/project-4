import React from 'react';
import { motion } from 'framer-motion';
import { GoalCard } from '../components/goals/GoalCard';
import { NewGoalForm } from '../components/goals/NewGoalForm';
import { PlusCircle } from 'lucide-react';

const Goals: React.FC = () => {
  const [showNewGoalForm, setShowNewGoalForm] = React.useState(false);

  const goals = [
    {
      id: '1',
      title: 'Emergency Fund',
      target: 50000,
      current: 35000,
      deadline: '2024-06-30',
      category: 'Savings',
    },
    {
      id: '2',
      title: 'Laptop Fund',
      target: 80000,
      current: 60000,
      deadline: '2024-08-15',
      category: 'Electronics',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Financial Goals</h1>
        <button
          onClick={() => setShowNewGoalForm(true)}
          className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          <PlusCircle className="h-5 w-5" />
          New Goal
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {goals.map((goal) => (
          <GoalCard key={goal.id} goal={goal} />
        ))}
      </div>

      {showNewGoalForm && (
        <NewGoalForm onClose={() => setShowNewGoalForm(false)} />
      )}
    </motion.div>
  );
};

export default Goals;