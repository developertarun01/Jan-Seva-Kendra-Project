import React from "react";
import { useNavigate } from "react-router-dom";

function Services() {
    const navigate = useNavigate();

    // Array of services with descriptions
    const services = [
        {
            name: "Jaati Praman Patra",
            description: "Caste certificate for identification of community."
        },
        {
            name: "Nikaas Praman Patra",
            description: "Certificate required for extraction approval."
        },
        {
            name: "Aay Praman Patra",
            description: "Income certificate for financial eligibility verification."
        },
        {
            name: "Pension Form",
            description: "Assistance with pension application forms."
        },
        {
            name: "Jivan Praman Patra",
            description: "Digital life certificate for pensioners."
        },
        {
            name: "PAN Card",
            description: "Permanent Account Number for tax purposes."
        },
        {
            name: "Ration Card",
            description: "Essential document for subsidized food and services."
        },
        {
            name: "Rojgar Panjikaran",
            description: "Job registration assistance for employment seekers."
        },
        {
            name: "Online Form",
            description: "Filling and submission of various online forms."
        },
        {
            name: "Photo State Colour",
            description: "High-quality color photocopying services."
        },
        {
            name: "Aadhar Card Print",
            description: "Print services for Aadhaar cards."
        },
        {
            name: "Aayushman Card",
            description: "Assistance with Ayushman Bharat health cards."
        },
        {
            name: "Dukaanon ka Panjikaran",
            description: "Shop registration services for businesses."
        },
        {
            name: "Khasra Khatauni Nakal",
            description: "Land record copies for ownership verification."
        },
        {
            name: "Pahchan Patra",
            description: "Identification card services for various needs."
        },
        {
            name: "Vahan Bima",
            description: "Vehicle insurance application and renewal."
        },
        {
            name: "Passport Photo",
            description: "Instant passport-sized photo printing."
        },
        {
            name: "Charitra Praman Patra",
            description: "Character certificate for official requirements."
        },
        {
            name: "PM Kisan Yojana",
            description: "Enrollment in PM Kisan Samman Nidhi Yojana."
        },
        {
            name: "Driving Licence",
            description: "Assistance with driving license applications."
        },
        {
            name: "Shramik Panjikaran",
            description: "Worker registration services for laborers."
        },
        {
            name: "Bijali Bill",
            description: "Electricity bill payment and duplicate bill services."
        },
        {
            name: "Passport",
            description: "Support for passport application and renewal."
        },
        {
            name: "PF Withdrawal",
            description: "Provident fund withdrawal assistance."
        },
        {
            name: "A3 Colour Print",
            description: "High-quality A3-size color printing services."
        },
    ];

    // Redirect to Home page with selected service
    const handleServiceClick = (serviceName) => {
        navigate("/", { state: { selectedService: serviceName } });
    };

    return (
        <section className="bg-gray-100 py-10">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-blue-600 text-center mb-8">
                    Our Services
                </h1>
                <p className="text-gray-700 text-center mb-6">
                    We offer a wide range of services to meet your needs. Click on a service to request it.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            onClick={() => handleServiceClick(service.name)}
                            className="bg-white shadow-md rounded-lg p-4 text-center border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer"
                        >
                            <h3 className="text-lg font-semibold text-gray-800">{service.name}</h3>
                            <p className="text-sm text-gray-600 mt-2">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;
