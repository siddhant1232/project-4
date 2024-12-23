import React from 'react';
import { Wallet, TrendingUp, PiggyBank, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import Clock from '../components/Clock';

export default function Dashboard() {
  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, pravah!</h1>
          <p className="text-gray-600">Here's your financial overview</p>
        </div>
        <div className="text-right">
          {/* <p className="text-sm text-gray-500">Last updated</p> */}
          {/* <p className="text-gray-900 font-medium">{new Date().toLocaleDateString()}</p> */}
          <p className="flex items-center justify-center h-[2vh]"><Clock /></p>
        </div>
        {/* <div className="flex items-center justify-center h-[2vh]">
          <Clock />
        </div> */}

      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Total Balance</p>
              <p className="text-2xl font-bold">₹24,500.00</p>
              <div className="flex items-center mt-2 text-green-600">
                <ArrowUpRight className="h-4 w-4" />
                <span className="text-sm ml-1">+2.5%</span>
              </div>
            </div>
            <div className="bg-indigo-100 p-3 rounded-lg">
              <Wallet className="h-8 w-8 text-indigo-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Monthly Spending</p>
              <p className="text-2xl font-bold">₹7,500.00</p>
              <div className="flex items-center mt-2 text-red-600">
                <ArrowDownRight className="h-4 w-4" />
                <span className="text-sm ml-1">-1.2%</span>
              </div>
            </div>
            <div className="bg-green-100 p-3 rounded-lg">
              <TrendingUp className="h-8 w-8 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Savings Goal</p>
              <p className="text-2xl font-bold">₹50,000.00</p>
              <div className="flex items-center mt-2">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-yellow-600 h-2.5 rounded-full" style={{ width: '45%' }}></div>
                </div>
                <span className="text-sm ml-2 text-gray-600">45%</span>
              </div>
            </div>
            <div className="bg-yellow-100 p-3 rounded-lg">
              <PiggyBank className="h-8 w-8 text-yellow-600" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-bold mb-4">Recent Transactions</h2>
          <div className="space-y-4">
            {[
              { name: 'Grocery Shopping', date: 'Mar 15, 2024', amount: -4550, type: 'expense' },
              { name: 'Part-time Job', date: 'Mar 14, 2024', amount: 25000, type: 'income' },
              { name: 'Books', date: 'Mar 13, 2024', amount: -2100, type: 'expense' },
            ].map((transaction, index) => (
              <div key={index} className="flex items-center justify-between py-2 border-b">
                <div>
                  <p className="font-medium">{transaction.name}</p>
                  <p className="text-sm text-gray-500">{transaction.date}</p>
                </div>
                <p className={transaction.type === 'income' ? 'text-green-600' : 'text-red-600'}>
                  {transaction.type === 'income' ? '+' : '-'}₹{Math.abs(transaction.amount).toFixed(2)}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-bold mb-4">Spending Categories</h2>
          <div className="space-y-4">
            {[
              { category: 'Food & Dining', amount: 3500, percentage: 45 },
              { category: 'Transportation', amount: 1200, percentage: 15 },
              { category: 'Education', amount: 2500, percentage: 30 },
              { category: 'Entertainment', amount: 800, percentage: 10 },
            ].map((category, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>{category.category}</span>
                  <span>₹{category.amount}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-indigo-600 h-2 rounded-full"
                    style={{ width: `${category.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}