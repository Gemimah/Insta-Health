import { useState } from 'react';
import { FaCaretDown } from 'react-icons/fa';

interface DropdownProps {
  options: string[];
  width?: string;
  height?: string;
  className?: string;
}

export default function Dropdown({ options, width = '20rem', height = '3rem', className }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>(options[0]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false); // Close dropdown after selection
  };

  return (
    <div className="relative z-50" style={{ width }}>
      <button
        type="button"
        className="flex justify-between w-full px-4 py-2 text-sm font-medium text-black z-50 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
        onClick={toggleDropdown}
        style={{ height }}
      >
        {selectedOption}
        <FaCaretDown className="ml-2" />
      </button>

      {isOpen && (
        <div
          className={`absolute left-0 w-full mt-1 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50 ${className}`}
          style={{ maxHeight: '200px', overflowY: 'auto' }}
        >
          {options.map((option, index) => (
            <button
              key={index}
              className="block w-full px-4 py-2 text-sm text-black text-left hover:bg-gray-100"
              onClick={() => handleSelect(option)}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
