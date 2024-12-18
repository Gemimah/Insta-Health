import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { DoctorService } from './doctorsService';
import { Rating } from 'primereact/rating';
import AdminCards from './Card';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function SingleDoc() {
  const { id } = useParams(); // Get the ID from URL
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    // Fetch the specific doctor data based on ID
    DoctorService.getDoctor().then((doctors) => {
      const selectedDoctor = doctors.find((doc) => doc.id === parseInt(id));
      setDoctor(selectedDoctor); // Set the doctor details
    });
  }, [id]);

  if (!doctor) {
    return <div>Loading...</div>; // Show loading until the data is available
  }

  // Set up the chart data dynamically based on the selected doctor
  const consultationData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul','Aug','Sep','Oct','Nov','Dec'], // Months
    datasets: [
      {
        label: 'Consultations',
        data: doctor.consultations, // Doctor-specific consultation data
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
      {
        label: 'Appointments',
        data: doctor.appointments, // Doctor-specific appointment data
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: true,
      },
    ],
  };

  return (
    <div className="doctor-detail-container m-5 flex flex-col gap-10">
      <div className="doctor-detail-card p-5 shadow-md shadow-gray-100 rounded-lg flex gap-10">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-[300px] h-[300px] rounded-md object-cover"
        />
        <div className="flex flex-col gap-4 items-start">
          <h1 className="text-gray-600 font-bold text-2xl">{doctor.name}</h1>
          <p className="text-gray-500">{doctor.Department}</p>
          <Rating value={doctor.rating} readOnly cancel={false} />
          <p className="w-[400px] text-gray-500">{doctor.Description}</p>
        </div>
        <div className="flex-1">
          <h1 className="text-gray-600 font-semibold text-xl">Certificates</h1>
          <ul className="text-gray-500">
            {doctor.certificate.map((cert, idx) => (
              <AdminCards key={idx} image={cert.image} title={cert.name} numbers={cert.description} />
            ))}
          </ul>
        </div>
      </div>

      {/* Line Chart to display the consultations and appointments */}
      <div className="chart-container">
        <h2 className="text-gray-600 font-semibold text-xl mt-10">Consultations & Appointments Reports</h2>
        <div style={{ width: '1100px', height: '600px' }}>
          <Line
            data={consultationData}
            options={{
              responsive: true,
              plugins: {
                title: {
                  display: true,
                  text: `${doctor.name}'s Consultations vs Appointments (Last 6 Months)`,
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
