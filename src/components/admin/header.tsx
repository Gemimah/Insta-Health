import { FC } from 'react';
import { FiSearch, FiBell, FiSettings } from 'react-icons/fi';

interface HeaderProps {
  title: string;
}

const Header: FC<HeaderProps> = ({ title }) => {
  return (
    <header className="flex justify-between items-center px-6 py-3 w-[80rem] bg-white shadow-md sticky top-0">
      <div>
        <h1 className="text-gray-600 text-lg">Pages / {title}</h1>
      </div>
      <div className="flex items-center space-x-6">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search any Doctor" 
            className="p-2 pl-10 border rounded-md bg-white h-[2.5rem] w-[35rem] focus:outline-none" 
          />
          <FiSearch className="absolute top-2 left-3 text-gray-500" />
        </div>
        <FiBell className="text-gray-600 text-xl mx-6" />
        <FiSettings className="text-gray-600 text-xl mx-6" />
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-300">
          <img src="/patient.jpg" alt="Profile" className="w-full h-full object-cover" />
        </div>
      </div>
    </header>
  );
};

export default Header;
