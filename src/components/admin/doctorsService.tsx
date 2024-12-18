export const DoctorService = {
    // Simulates an API call to fetch doctor data
    getDoctor: async () => {
        // Mocked doctor data with consultations and appointments data
        const doctors = [
            {
                id: 1,
                name: 'Dr. John Doe',
                image: '/patient.jpg',
                age: 45,
                Department: 'Neurologist',
                rating: 4.5,
                Description: "Lorem ipsum dolor sit amet, consectetur adip odio null et non pro id adip dolor sit amet.",
                consultations: [5, 10, 7, 12, 8, 15],
                appointments: [3, 6, 4, 9, 5, 11],
                certificate: [
                    { image: "/patient.jpg", name: "Certified Neurologist", description: "Lorem ipsum dolor sit amet" },
                    { image: "/patient.jpg", name: "Certified Neurologist", description: "Lorem ipsum dolor sit amet" }
                ]
            },
            {
                id: 2,
                name: 'Dr. Jane Smith',
                image: '/patient.jpg',
                age: 50,
                Department: 'Cardiologist',
                rating: 4.7,
                Description: "Lorem ipsum dolor sit amet, consectetur adip odio null et non pro id adip dolor sit amet.",
                consultations: [3, 5, 6, 8, 9, 12],
                appointments: [2, 4, 5, 7, 6, 10],
                certificate: [
                    { image: "/patient.jpg", name: "Certified Cardiologist", description: "Lorem ipsum dolor sit amet" },
                    { image: "/patient.jpg", name: "Certified Cardiologist", description: "Lorem ipsum dolor sit amet" }
                ]
            },
            {
                id: 3,
                name: 'Dr. Robert Brown',
                image: '/patient.jpg',
                age: 38,
                Department: 'Orthopedist',
                rating: 4.2,
                Description: "Lorem ipsum dolor sit amet, consectetur adip odio null et non pro id adip dolor sit amet.",
                consultations: [4, 8, 5, 10, 7, 13],
                appointments: [3, 6, 7, 9, 5, 12],
                certificate: [
                    { image: "/patient.jpg", name: "Certified Orthopedist", description: "Lorem ipsum dolor sit amet" },
                    { image: "/patient.jpg", name: "Certified Orthopedist", description: "Lorem ipsum dolor sit amet" }
                ]
            }
        ];

        // Simulating a delay for an asynchronous request
        return new Promise((resolve) => {
            setTimeout(() => resolve(doctors), 1000);
        });
    },
};
