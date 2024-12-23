import React from 'react';
import { Switch } from '../ui/Switch';

export const NotificationSettings: React.FC = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-medium">Email Notifications</p>
          <p className="text-sm text-gray-500">
            Receive updates about your transactions
          </p>
        </div>
        <Switch />
      </div>

      <div className="flex items-center justify-between">
        <div>
          <p className="font-medium">Budget Alerts</p>
          <p className="text-sm text-gray-500">
            Get notified when you're close to your budget limit
          </p>
        </div>
        <Switch />
      </div>

      <div className="flex items-center justify-between">
        <div>
          <p className="font-medium">Goal Achievements</p>
          <p className="text-sm text-gray-500">
            Notifications for reaching savings goals
          </p>
        </div>
        <Switch />
      </div>
    </div>
  );
};