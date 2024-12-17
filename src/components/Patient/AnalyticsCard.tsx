import React from "react";

interface AnalyticsCardProps {
  title: string;
  value: string;
  icon?: string;
}

const AnalyticsCard: React.FC<AnalyticsCardProps> = ({ title, value, icon }) => {
  return (
    <div className="bg-white shadow rounded-lg p-4 flex items-center space-x-4">
      {icon && <div className="icon-placeholder">{icon}</div>}
      <div>
        <div className="text-sm text-gray-600">{title}</div>
        <div className="text-2xl font-bold">{value}</div>
      </div>
    </div>
  );
};

export default AnalyticsCard;
