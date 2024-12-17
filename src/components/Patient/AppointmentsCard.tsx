import { FC } from 'react';
import { FiCalendar } from 'react-icons/fi';

const AppointmentsCard: FC = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h3 className="text-lg font-semibold mb-4">Your Appointments</h3>
      <div className="space-y-4">
        {Array.from({ length: 5 }).map((_, idx) => (
          <div key={idx} className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <FiCalendar className="text-blue-500" />
              <span>Neuron Treatment</span>
            </div>
            <div className="text-gray-500">09:20 AM - 11:30 AM</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppointmentsCard;
