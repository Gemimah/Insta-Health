import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';
import { PatientService } from './PatientService';

import 'primereact/resources/themes/lara-light-blue/theme.css'; // PrimeReact Theme
import 'primereact/resources/primereact.min.css'; // PrimeReact Core CSS
import 'primeicons/primeicons.css'; // PrimeIcons

export default function PatientTable() {
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        // Fetch patient data from PatientService
        PatientService.getPatients().then((data) => setPatients(data));
    }, []);

    const imageBodyTemplate = (patient) => {
        return (
            <img
                src={patient.image}
                alt="Patient"
                className="w-12 h-12 rounded-full object-cover shadow-md border-2 border-gray-200"
            />
        );
    };

    const ratingBodyTemplate = (patient) => {
        return <Rating value={patient.rating} readOnly cancel={false} />;
    };

    const statusBodyTemplate = (patient) => {
        return (
            <Tag
                value={patient.status}
                className={`px-2 py-1 text-white rounded-full text-xs font-semibold ${
                    getSeverity(patient)
                }`}
            />
        );
    };

    const getSeverity = (patient) => {
        switch (patient.status) {
            case 'Stable':
                return 'bg-green-500';
            case 'Recovering':
                return 'bg-yellow-500';
            case 'Critical':
                return 'bg-red-500';
            default:
                return 'bg-gray-500';
        }
    };

    const header = (
        <div className="flex gap-[60rem] items-center rounded-t-lg ">
            <span className="text-xl font-bold text-gray-800">Patients List</span>
            <a className='text-md text-blue-600 font-medium' href=''>See more</a>
        </div>
    );

    return (
        <div className="m-5 shadow-lg rounded-lg overflow-hidden" style={{ maxWidth: '1200px' }}>
            {/* Make the container width match the table's width */}
            <DataTable
                value={patients}
                header={header}
                tableStyle={{ minWidth: '1200px' }}  
                stripedRows
            >
                <Column field="name" header="Name" className="text-gray-700"></Column>
                <Column header="Image" body={imageBodyTemplate}></Column>
                <Column field="age" header="Age" className="text-gray-700"></Column>
                <Column field="condition" header="Condition" className="text-gray-700"></Column>
                <Column header="Reviews" body={ratingBodyTemplate}></Column>
                <Column header="Status" body={statusBodyTemplate}></Column>
            </DataTable>
        </div>
    );
}
