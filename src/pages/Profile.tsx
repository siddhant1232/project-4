import React from 'react';
import { motion } from 'framer-motion';
import { User, Mail, MapPin, Phone, Calendar } from 'lucide-react';

const Profile: React.FC = () => {
  const user = {
    name: 'pravah',
    email: 'pravah2k24@gmail.com',
    location: 'Indore, India',
    phone: '+91 12345 67889',
    joinDate: 'December 2024',
    avatar: '',
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="bg-indigo-600 h-32"></div>
        <div className="px-6 pb-6">
          <div className="flex flex-col items-center -mt-16">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-32 h-32 rounded-full border-4 border-white bg-white"
            />
            <h1 className="mt-4 text-2xl font-bold">{user.name}</h1>
            <p className="text-gray-500">Student</p>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium">{user.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-medium">{user.location}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="font-medium">{user.phone}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="h-5 w-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Joined</p>
                <p className="font-medium">{user.joinDate}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Profile;