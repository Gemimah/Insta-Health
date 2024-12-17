import { FC } from 'react';
import { FaEllipsisH } from 'react-icons/fa'

interface UserInfo {
  age: number;
  bloodType: string;
  height: number;
  name: string;
  pic: string;
  weight: number;
}

interface UserInfoCardProps {
  user: UserInfo;
}

// const UserInfoCard: FC = () => {
//   return (
//     <div className="bg-white shadow-md rounded-lg p-6">
//       <div className="items-center space-x-4">
//         <img
//           src={User.Pic}
//           alt="User"
//           className="w-20 h-20 rounded-full"
//         />
//         <h3 className="text-lg font-semibold text-gray-600 ">{User.Name}</h3>
//         <a href=""><FaEllipsisH /></a>
//         <div className='grid-cols-2 '>
//           <div className="text-gray-600">Age  <p>{User.Age} years</p> </div>
//           <div className="text-gray-600">Blood <p>{User.BloodType}</p></div>
//           <div className="text-gray-600">Height <p>{User.Height} cm</p> </div>
//           <div className="text-gray-600">Weight <p>{User.Weight} kg</p> </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserInfoCard;




const UserInfoCard: FC<UserInfoCardProps> = ({ user }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-sm mx-auto">
      <div className="flex items-center space-x-4 mb-4">
        <img
          src={user.pic}
          alt={`${user.name}'s profile`}
          className="w-20 h-20 rounded-full object-cover"
        />
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-800">{user.name}</h3>
        </div>
        <button
          className="text-gray-500 bg-white hover:text-gray-700 focus:outline-none"
          aria-label="More options"
        >
          <FaEllipsisH />
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
        <div>
          <span className="block font-semibold">Age</span>
          <p>{user.age} years</p>
        </div>
        <div>
          <span className="block font-semibold">Blood Type</span>
          <p>{user.bloodType}</p>
        </div>
        <div>
          <span className="block font-semibold">Height</span>
          <p>{user.height} cm</p>
        </div>
        <div>
          <span className="block font-semibold">Weight</span>
          <p>{user.weight} kg</p>
        </div>
      </div>
    </div>
  );
};

export default UserInfoCard;
