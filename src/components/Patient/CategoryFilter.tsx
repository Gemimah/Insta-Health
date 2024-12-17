import { FC } from 'react';

const categories = ['All', 'Cardiology', 'Dentist', 'Optician', 'Surgery', 'Dermery', 'Oncology'];

const CategoryFilter: FC = () => {
  return (
    <div className="flex gap-4 px-6 py-4 space-x-3">
      {categories.map((category, index) => (
        <button
          key={index}
          className={`py-2 px-4 rounded-full ${index === 0 ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600'} hover:bg-blue-500 hover:text-white`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
