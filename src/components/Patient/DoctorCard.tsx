import { FC } from 'react';

interface DoctorCardProps {
  name: string;
  hospital: string;
  location: string;
  specialty: string;
  rating: number;
  image: string;
}

const DoctorCard: FC<DoctorCardProps> = ({ name, hospital, location, specialty, rating, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-72 mb-6">
      <div className="flex justify-between items-center mb-4">
        <div className="bg-blue-500 text-white text-sm px-3 py-1 rounded-full">{rating.toFixed(1)}</div>
        <img src={image} alt={name} className="w-14 h-14 rounded-full" />
      </div>
      <h3 className="text-lg font-bold mb-1">{name}</h3>
      <p className="text-gray-500 text-sm">{hospital}</p>
      <p className="text-gray-500 text-sm mb-3">{location}</p>
      <button className="bg-blue-500 text-white py-2 px-4 rounded-full text-sm mb-3">{specialty}</button>
      <div className="flex justify-between text-gray-600 text-sm">
        <a href="#" className="hover:text-blue-600">Make an appointment</a>
        <a href="#" className="hover:text-blue-600">Start chat with doctor</a>
      </div>
    </div>
  );
};

export default DoctorCard;
