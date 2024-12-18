export const PatientService = {
    // Simulates an API call to fetch patient data
    getPatients: async () => {
        // Mocked patient data
        const patients = [
            {
                id: 1,
                name: 'John Doe',
                image: '/patient.jpg',
                age: 45,
                condition: 'Diabetes',
                status: 'Stable',
                rating: 4.5,
            },
            {
                id: 2,
                name: 'Jane Smith',
                image: '/patient.jpg',
                age: 34,
                condition: 'Hypertension',
                status: 'Critical',
                rating: 3.0,
            },
            {
                id: 3,
                name: 'Alice Brown',
                image: '/patient.jpg',
                age: 29,
                condition: 'Healthy',
                status: 'Recovering',
                rating: 5.0,
            },
        ];

        // Simulating a delay for an asynchronous request
        return new Promise((resolve) => {
            setTimeout(() => resolve(patients), 1000);
        });
    },
};
