import React, { useState } from 'react';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { FaPlus } from 'react-icons/fa';
import Sidebar from '../../components/Patient/Sidebar';
import Header from '../../components/Patient/Header';
import Calendar from '../../components/Patient/Calendar';

// Localizer for BigCalendar
const localizer = momentLocalizer(moment);

// Sample Appointments Data
const appointmentsData = [
    {
        id: 1,
        title: 'Meeting Doctor Drew - Heart check-up',
        start: new Date('2024-05-21T09:00:00'),
        end: new Date('2024-05-21T11:00:00'),
        participants: [
            { id: 1, name: 'Doctor Drew', imageUrl: '/path/to/doctor1.jpg' },
            { id: 2, name: 'Patient John', imageUrl: '/path/to/patient1.jpg' },
        ],
    },
    {
        id: 2,
        title: 'Brain daily checkup',
        start: new Date('2024-05-23T13:00:00'),
        end: new Date('2024-05-23T14:00:00'),
        participants: [
            { id: 3, name: 'Doctor Amy', imageUrl: '/path/to/doctor2.jpg' },
            { id: 4, name: 'Patient Jane', imageUrl: '/path/to/patient2.jpg' },
        ],
    },
    {
        id: 3,
        title: 'Heart and Body Check-up',
        start: new Date('2024-05-25T11:00:00'),
        end: new Date('2024-05-25T14:00:00'),
        participants: [
            { id: 5, name: 'Doctor Mark', imageUrl: '/path/to/doctor3.jpg' },
            { id: 6, name: 'Patient Alice', imageUrl: '/path/to/patient3.jpg' },
        ],
    },
];

const AppointmentsPage: React.FC = () => {
    const [events, setEvents] = useState(appointmentsData);
    const [selectedDate, setSelectedDate] = useState(new Date());

    // Function to handle adding new appointment
    const handleAddAppointment = () => {
        // Create a new appointment object
        const newAppointment = {
            id: events.length + 1,
            title: 'New Sample Appointment - Consultation',
            start: new Date('2024-06-01T10:00:00'),
            end: new Date('2024-06-01T12:00:00'),
            participants: [
                { id: 7, name: 'Doctor Smith', imageUrl: '/path/to/doctor4.jpg' },
                { id: 8, name: 'Patient Bob', imageUrl: '/path/to/patient4.jpg' },
            ],
        };

        // Update the events state with the new appointment
        setEvents([...events, newAppointment]);
        alert('New appointment added successfully!');
    };

    return (
        <div className="flex">
            <Sidebar activeTab="Appointments" onTabChange={function (): void {
                throw new Error('Function not implemented.');
            }} />

            <div className="flex-1 min-h-screen">
                <Header title="Appointments" />

                <div className="p-8">
                    <div className="flex justify-between items-center mb-6">
                        <div>
                            <h2 className="text-2xl font-bold text-blue-500">Appointments</h2>
                            <p className='text-[#808080]'>Welcome back to your page where you will view your daily appointments</p>
                        </div>
                        <button
                            className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center"
                            onClick={handleAddAppointment}
                        >
                            <FaPlus className="mr-2" />
                            Add new appointment
                        </button>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <Calendar />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentsPage;
