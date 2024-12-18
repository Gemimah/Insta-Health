import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';
import { DoctorService } from './doctorsService';
import { Link } from 'react-router-dom'; // Corrected import for Link

import 'primereact/resources/themes/lara-light-blue/theme.css'; // PrimeReact Theme
import 'primereact/resources/primereact.min.css'; // PrimeReact Core CSS
import 'primeicons/primeicons.css'; // PrimeIcons

export default function DoctorTable() {
    const [doctors, setDoctors] = useState([]);
    const [selectedDoctor, setSelectedDoctor] = useState(null); // For storing the selected doctor's details

    useEffect(() => {
        // Fetch doctor data from DoctorService
        DoctorService.getDoctor().then((data) => setDoctors(data));
    }, []);

    const imageBodyTemplate = (doctor) => {
        return (
            <img
                src={doctor.image}
                alt="Doctor"
                className="w-12 h-12 rounded-full object-cover"
            />
        );
    };

    const ratingBodyTemplate = (doctor) => {
        return <Rating value={doctor.rating} readOnly cancel={false} />;
    };

    // Action body template that includes a "View More" link
    const actionBodyTemplate = (doctor) => {
        return (
            <Tag
                value={<a href={`/admin/doctor/${doctor.id}`} className="text-white">View More</a>}  // Link updated with dynamic URL
                className="p-2 text-white rounded-md text-xs font-semibold"
            />
        );
    };

    const departmentBodyTemplate = (doctor) => {
        return (
            <Tag
                value={doctor.Department}
                className="px-2 py-1 text-white rounded-full text-xs font-semibold"
            />
        );
    };

    const header = (
        <div className="flex gap-[60rem] items-center rounded-t-lg ">
            <span className="text-xl font-bold text-gray-800">Doctor List</span>
            <a className="text-md text-blue-600 font-medium" href="#">See more</a>
        </div>
    );

    return (
        <div className="m-5 shadow-lg rounded-lg overflow-hidden" style={{ maxWidth: '1200px' }}>
            {/* Make the container width match the table's width */}
            <DataTable
                value={doctors}
                header={header}
                tableStyle={{ minWidth: '1200px' }}
                stripedRows
            >
                <Column field="name" header="Name" className="text-gray-700"></Column>
                <Column header="Image" body={imageBodyTemplate}></Column>
                <Column field="age" header="Age" className="text-gray-700"></Column>
                <Column field="Department" header="Department" className="text-gray-700" body={departmentBodyTemplate}></Column>
                <Column header="Rating" body={ratingBodyTemplate}></Column>
                <Column header="Action" body={actionBodyTemplate} className='bg-white text-blue-600 border-[1.5px] border-gray-100'></Column> {/* Use actionBodyTemplate here */}
            </DataTable>
        </div>
    );
}
