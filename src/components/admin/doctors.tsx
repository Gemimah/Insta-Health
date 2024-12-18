import Dropdown from "../dropdown";
import Tables from "./table";

export default function DoctorList() {
  const doctors = [
    {
      image: "/person1.png",
      name: "Dr. Aine Smith",
      category: "Neurologist",
      rating: "4.5",
    },
    {
      image: "/person1.png",
      name: "Dr. Aine Smith",
      category: "Neurologist",
      rating: "4.5",
    },
    {
      image: "/person1.png",
      name: "Dr. Aine Smith",
      category: "Neurologist",
      rating: "4.5",
    },
  ];

  const titles = ["Image", "Name", "Category", "Rating"]; // Titles for the table

  return (
    <div className="flex flex-col gap-5 shadow-md shadow-gray-100 rounded-md px-10 py-2">
      <h1 className="text-gray-600 font-semibold text-xl">Our Doctors</h1>
      <div className="flex justify-between items-center">
        <h2 className="text-blue-600 font-bold text-2xl">50 Doctors</h2>

        {/* Ensure proper container for the dropdown */}
        <div className="relative z-10">
          <Dropdown
            options={["Neurologist", "Cardiologist", "Headache"]}
            width="150px"
            height="40px"
          />
        </div>
      </div>

      {/* Render Titles Once */}
      <div className="flex flex-col gap-2">
        <div className="grid grid-cols-4 gap-6 text-center">
          {titles.map((title, index) => (
            <h2 key={index} className="text-sm font-semibold text-gray-500">
              {title}
            </h2>
          ))}
        </div>
        {doctors.map((doctor, index) => (
          <div key={index} className="flex flex-col gap-1">
            <Tables
              image={doctor.image}
              name={doctor.name}
              category={doctor.category}
              rating={doctor.rating}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
