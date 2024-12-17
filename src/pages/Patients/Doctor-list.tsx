import { FC } from 'react';
import Sidebar from '../../components/Patient/Sidebar';
import Header from '../../components/Patient/Header';
import DoctorCard from '../../components/Patient/DoctorCard';
import CategoryFilter from '../../components/Patient/CategoryFilter';

const doctors = [
  {
    name: 'Dr King Marc',
    hospital: 'King Faisal Hospital Rwanda',
    location: 'Kigali | Rwanda',
    specialty: 'Neurologist',
    rating: 4.5,
    image: 'https://via.placeholder.com/80'
  },
  {
    name: 'Dr Aine Dushimire',
    hospital: 'CHUK',
    location: 'Kigali | Rwanda',
    specialty: 'Neurologist',
    rating: 3.7,
    image: 'https://via.placeholder.com/80'  
  },
  {
    name: 'Dr King Marc',
    hospital: 'King Faisal Hospital Rwanda',
    location: 'Kigali | Rwanda',
    specialty: 'Neurologist',
    rating: 4.5,
    image: 'https://via.placeholder.com/80'
  },
  {
    name: 'Dr Aine Dushimire',
    hospital: 'CHUK',
    location: 'Kigali | Rwanda',
    specialty: 'Neurologist',
    rating: 3.7,
    image: 'https://via.placeholder.com/80'  
  },
  {
    name: 'Dr King Marc',
    hospital: 'King Faisal Hospital Rwanda',
    location: 'Kigali | Rwanda',
    specialty: 'Neurologist',
    rating: 4.5,
    image: 'https://via.placeholder.com/80'
  },
  {
    name: 'Dr Aine Dushimire',
    hospital: 'CHUK',
    location: 'Kigali | Rwanda',
    specialty: 'Neurologist',
    rating: 3.7,
    image: 'https://via.placeholder.com/80'  
  },
];

const DoctorList: FC = () => {
  return (
    <div className="flex ">
      <Sidebar activeTab={'Doctors List'} onTabChange={function (): void {
        throw new Error('Function not implemented.');
      } } />
      <div className="flex-1">
        <Header title={'Doctors List'} />
        <CategoryFilter />
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {doctors.map((doctor, index) => (
            <DoctorCard 
              key={index}
              name={doctor.name}
              hospital={doctor.hospital}
              location={doctor.location}
              specialty={doctor.specialty}
              rating={doctor.rating}
              image={doctor.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorList;
