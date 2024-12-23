import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ReportCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  change: string;
  color: string;
}

export const ReportCard: React.FC<ReportCardProps> = ({
  title,
  value,
  icon: Icon,
  change,
  color,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white p-6 rounded-xl shadow-md"
    >
      <div className="flex items-center gap-4">
        <div className={`p-3 rounded-lg ${color}`}>
          <Icon className="h-6 w-6 text-white" />
        </div>
        <div>
          <h3 className="text-gray-500">{title}</h3>
          <p className="text-2xl font-bold">{value}</p>
          <p className="text-sm text-gray-500">{change}</p>
        </div>
      </div>
    </motion.div>
  );
};