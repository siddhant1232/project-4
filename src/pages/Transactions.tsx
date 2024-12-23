import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TransactionTable } from '../components/transactions/TransactionTable';
import { Search } from 'lucide-react';

const Transactions: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const transactions = [
    {
      id: '1',
      date: new Date('2024-03-15'),
      category: 'Groceries',
      description: 'Weekly groceries',
      amount: 2500,
      type: 'expense' as const,
    },
    {
      id: '2',
      date: new Date('2024-03-14'),
      category: 'Salary',
      description: 'Part-time work',
      amount: 15000,
      type: 'income' as const,
    },
    {
      id: '3',
      date: new Date('2024-03-13'),
      category: 'Shopping',
      description: 'Christmas shopping',
      amount: 20000,
      type: 'expense' as const,
    },
    
  ];

  const categories = ['all', 'Groceries', 'Salary', 'Entertainment', 'Education'];

  const filteredTransactions = transactions.filter(transaction => {
    const matchesSearch = transaction.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || transaction.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Transactions</h1>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search transactions..."
            className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <select
          className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map(category => (
            <option key={category} value={category}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <TransactionTable transactions={filteredTransactions} />
      </div>
    </motion.div>
  );
};

export default Transactions;