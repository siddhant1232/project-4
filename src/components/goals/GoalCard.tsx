import React from 'react';
import { motion } from 'framer-motion';

interface Goal {
  id: string;
  title: string;
  target: number;
  current: number;
  deadline: string;
  category: string;
}

interface GoalCardProps {
  goal: Goal;
}

export const GoalCard: React.FC<GoalCardProps> = ({ goal }) => {
  const progress = (goal.current / goal.target) * 100;
  const isCompleted = progress >= 100;

  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.25)",
        border: "1px solid rgba(255, 255, 255, 0.18)",
      }}
      transition={{ duration: 0.3 }}
      className="bg-white/40 backdrop-blur-lg border border-white/20 p-6 rounded-xl shadow-md max-h-80 overflow-auto"
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="font-bold text-lg">{goal.title}</h3>
        <span className="px-2 py-1 text-xs rounded-full bg-indigo-100 text-indigo-800">
          {goal.category}
        </span>
      </div>

      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-sm text-gray-500 mb-1">
            <span>Progress</span>
            <span>{Math.min(progress, 100).toFixed(0)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className={`h-2 rounded-full ${
                isCompleted ? 'bg-green-500' : 'bg-indigo-600'
              }`}
              style={{ width: `${Math.min(progress, 100)}%` }}
            ></div>
          </div>
        </div>

        <div className="flex justify-between text-sm">
          <div>
            <p className="text-gray-500">Current</p>
            <p className="font-medium">₹{goal.current.toLocaleString()}</p>
          </div>
          <div className="text-right">
            <p className="text-gray-500">Target</p>
            <p className="font-medium">₹{goal.target.toLocaleString()}</p>
          </div>
        </div>

        <div className="text-sm">
          <p className="text-gray-500">Deadline</p>
          <p className="font-medium">
            {new Date(goal.deadline).toLocaleDateString()}
          </p>
        </div>
      </div>
    </motion.div>
  );
};