import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

// Mock appointment service to fetch appointment data
const AppointmentService = {
    getAppointments: () =>
        Promise.resolve([
            {
                id: 1,
                patientName: 'John Doe',
                doctorName: 'Dr. Sarah Connor',
                time: '10:00 AM',
                duration: '30 mins',
                type: 'Online',
                amountPaid: '$50',
            },
            {
                id: 2,
                patientName: 'Jane Smith',
                doctorName: 'Dr. John Smith',
                time: '2:00 PM',
                duration: '1 hour',
                type: 'Home',
                amountPaid: '$100',
            },
            {
                id: 3,
                patientName: 'Alex Johnson',
                doctorName: 'Dr. Clara Oswald',
                time: '9:00 AM',
                duration: '45 mins',
                type: 'Online',
                amountPaid: '$75',
            },
            {
                id: 4,
                patientName: 'John Doe',
                doctorName: 'Dr. Sarah Connor',
                time: '10:00 AM',
                duration: '30 mins',
                type: 'Online',
                amountPaid: '$50',
            },
            {
                id: 5,
                patientName: 'Jane Smith',
                doctorName: 'Dr. John Smith',
                time: '2:00 PM',
                duration: '1 hour',
                type: 'Home',
                amountPaid: '$100',
            },
            {
                id: 6,
                patientName: 'Alex Johnson',
                doctorName: 'Dr. Clara Oswald',
                time: '9:00 AM',
                duration: '45 mins',
                type: 'Online',
                amountPaid: '$75',
            },
        ]),
};

export default function AppointmentList() {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        // Fetch the appointment data
        AppointmentService.getAppointments().then((data) => setAppointments(data));
    }, []);

    return (
        <div className="card">
            <h2 className="text-gray-600 font-semibold text-xl mb-4">Appointment List</h2>
            <DataTable
                value={appointments}
                paginator
                rows={5}
                tableStyle={{ minWidth: '60rem' }}
                responsiveLayout="scroll"
            >
                <Column field="patientName" header="Patient Name" style={{ width: '20%' }}></Column>
                <Column field="doctorName" header="Doctor" style={{ width: '20%' }}></Column>
                <Column field="time" header="Time" style={{ width: '15%' }}></Column>
                <Column field="duration" header="Duration" style={{ width: '15%' }}></Column>
                <Column field="type" header="Type" style={{ width: '15%' }}></Column>
                <Column field="amountPaid" header="Amount Paid" style={{ width: '15%' }}></Column>
            </DataTable>
        </div>
    );
}
