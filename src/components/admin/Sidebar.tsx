import { FC } from 'react';
import {
  FiLogOut,
  FiUser,
  FiCalendar,
  FiMessageCircle,
  FiCreditCard,
  FiList,
  FiGrid,
  FiCheckCircle,
} from 'react-icons/fi';

const TABS = [
  { label: 'Dashboard', icon: FiGrid, href: '#' },
  { label: 'Doctors List', icon: FiList, href: '#' },
  { label: 'Appointments History', icon: FiCalendar, href: '#' },
  { label: 'Messages', icon: FiMessageCircle, href: '#' },
  { label: 'Payments', icon: FiCreditCard, href: '#' },
  { label: 'Consultations History', icon: FiCheckCircle, href: '#' },
  { label: 'Reports and analytics', icon: FiCheckCircle, href: '#' },
  { label: 'Profile', icon: FiUser, href: '#' },
];

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Sidebar: FC<SidebarProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="w-64 bg-white h-screen p-6 shadow-lg space-y-[3rem] sticky top-0">
      <h2 className="text-2xl font-semibold text-blue-500 mb-8">Insta Health</h2>
      <nav className="space-y-[1rem]">
        {TABS.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.label;

          return (
            <a
              key={tab.label}
              href={tab.href}
              onClick={() => onTabChange(tab.label)}
              className={`flex items-center rounded-md px-2 py-2 ${
                isActive
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-700 hover:bg-blue-500 hover:text-white'
              }`}
            >
              <Icon className="mr-3  ml-[2rem]" />
              {tab.label}
            </a>
          );
        })}
      </nav>
      <button className="flex items-center bg-red-500 text-white mt-8 w-full pl-[2rem] py-2 rounded-md">
        <FiLogOut className="mr-3" />
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
