import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SignInForm from './components/auth/SignInForm';
import SignUpForm from './components/auth/SignUpForm';
import DashboardLayout from './components/layout/DashboardLayout';
import Dashboard from './pages/Dashboard';
import BudgetTracker from './pages/BudgetTracker';
import Transactions from './pages/Transactions';
import Reports from './pages/Reports';
import Goals from './pages/Goals';
import Settings from './pages/Settings';
import Profile from './pages/Profile';
import PrivateRoute from './components/privateRoutes';

const App: React.FC = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [userQuery, setUserQuery] = useState('');
  const [chatMessages, setChatMessages] = useState<
    { text: string; isAI: boolean }[]
  >([{ text: 'Welcome! How can I help you today?', isAI: true }]);

  const handleChatbotClick = () => {
    setIsChatbotOpen(true);
  };

  const handleCloseChatbot = () => {
    setIsChatbotOpen(false);
  };

  const handlePostQuery = () => {
    if (userQuery.trim() !== '') {
      setChatMessages((prevMessages) => [
        ...prevMessages,
        { text: userQuery, isAI: false },
      ]);
      setTimeout(() => {
        setChatMessages((prevMessages) => [
          ...prevMessages,
          { text: 'Let me check that for you!', isAI: true },
        ]);
      }, 1000);
      setUserQuery('');
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/signin" replace />} />
        <Route
          path="/signin"
          element={
            <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
              <SignInForm />
            </div>
          }
        />
        <Route
          path="/signup"
          element={
            <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
              <SignUpForm />
            </div>
          }
        />

        {/* Protected Routes */}
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<DashboardLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="budget" element={<BudgetTracker />} />
            <Route path="transactions" element={<Transactions />} />
            <Route path="reports" element={<Reports />} />
            <Route path="goals" element={<Goals />} />
            <Route path="settings" element={<Settings />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Route>
      </Routes>

      {/* Chatbot Button */}
      <button
        onClick={handleChatbotClick}
        className="fixed bottom-6 right-6 w-20 h-20 rounded-full shadow-md bg-gradient-to-r from-red-400 via-yellow-400 to-blue-400 text-white hover:from-red-500 hover:via-yellow-500 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 transition-all duration-300"
      >
        💬
      </button>

      {/* Chatbot Modal */}
      {isChatbotOpen && (
        <div className="fixed bottom-6 right-6 w-96 bg-white p-4 rounded-lg border-2 shadow-lg">
          <button
            onClick={handleCloseChatbot}
            className="absolute top-2 right-2 text-xl text-gray-700 hover:text-gray-900 focus:outline-none"
          >
            ×
          </button>

          <h2 className="text-xl font-semibold mb-4 text-center">Chatbot</h2>

          {/* Chat Messages */}
          <div className="flex flex-col space-y-2 h-60 overflow-auto mb-4 p-2 bg-gray-100 rounded-lg">
            {chatMessages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.isAI ? 'justify-start' : 'justify-end'
                }`}
              >
                <div
                  className={`max-w-xs p-2 rounded-lg ${
                    message.isAI
                      ? 'bg-gray-200 text-gray-900'
                      : 'bg-blue-100 text-blue-800'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          {/* Chat Input */}
          <div className="flex items-center border border-gray-300 rounded-lg p-2">
            <input
              type="text"
              value={userQuery}
              onChange={(e) => setUserQuery(e.target.value)}
              className="flex-grow p-2 rounded-lg focus:outline-none"
              placeholder="Type your query..."
            />
            <button
              onClick={handlePostQuery}
              className="ml-2 text-blue-500 hover:text-blue-600 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="h-6 w-6"
              >
                <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </BrowserRouter>
  );
};

export default App;