import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Home() {
    const location = useLocation();

    const [formData, setFormData] = useState({
        name: "",
        mobile: "",
        email: "",
        services: "",
        documents: null, // Updated to handle file input for multiple documents
    });

    // Set the selected service if redirected with state
    useEffect(() => {
        if (location.state?.selectedService) {
            setFormData((prevData) => ({
                ...prevData,
                services: location.state.selectedService,
            }));
        }
    }, [location.state]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            documents: e.target.files,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

        // Send form data via email or backend API integration
        alert("Form submitted successfully!");
    };

    return (
        <main className="bg-gray-100">
            <div className="container mx-auto p-10">
                {/* Two Sections */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Section 1: Customer Search */}
                    <section className="bg-white shadow-md rounded-lg p-6 flex items-center justify-center">
                        <div className="container mx-auto text-center">
                            <h1 className="text-3xl font-bold mb-6">Welcome to Dezire Online Works</h1>
                            <p className="mb-6 text-lg">
                                Your one-stop solution for government services, utility payments, and more.
                            </p>
                            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                                <Link to="/services">Explore Services</Link>
                            </button>
                        </div>
                    </section>

                    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                                Full Name:
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter your Full Name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded-lg"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2" htmlFor="mobile">
                                Mobile No:
                            </label>
                            <input
                                type="text"
                                id="mobile"
                                name="mobile"
                                value={formData.mobile}
                                placeholder="Enter your Mobile Number"
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded-lg"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                                Email:
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your Email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded-lg"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2" htmlFor="services">
                                Select Service:
                            </label>
                            <select
                                id="services"
                                name="services"
                                value={formData.services}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded-lg"
                                required
                            >
                                <option value="" disabled>
                                    Select a service
                                </option>
                                <option value="Jaati Praman Patra">Jaati Praman Patra</option>
                                <option value="Nikaas Praman Patra">Nikaas Praman Patra</option>
                                <option value="Aay Praman Patra">Aay Praman Patra</option>
                                <option value="Pension Form">Pension Form</option>
                                <option value="Jivan Praman Patra">Jivan Praman Patra</option>
                                <option value="PAN Card">PAN Card</option>
                                <option value="Ration Card">Ration Card</option>
                                <option value="Rojgar Panjikaran">Rojgar Panjikaran</option>
                                <option value="Online Form">Online Form</option>
                                <option value="Photo State Colour">Photo State Colour</option>
                                <option value="Aadhar Card Print">Aadhar Card Print</option>
                                <option value="Aayushman Card">Aayushman Card</option>
                                <option value="Dukaanon ka Panjikaran">Dukaanon ka Panjikaran</option>
                                <option value="Khasra Khatauni Nakal">Khasra Khatauni Nakal</option>
                                <option value="Pahchan Patra">Pahchan Patra</option>
                                <option value="Vahan Bima">Vahan Bima</option>
                                <option value="Passport Photo">Passport Photo</option>
                                <option value="Charitra Praman Patra">Charitra Praman Patra</option>
                                <option value="PM Kisan Yojana">PM Kisan Yojana</option>
                                <option value="Driving Licence">Driving Licence</option>
                                <option value="Shramik Panjikaran">Shramik Panjikaran</option>
                                <option value="Bijali Bill">Bijali Bill</option>
                                <option value="Passport">Passport</option>
                                <option value="PF Withdrawal">PF Withdrawal</option>
                                <option value="A3 Colour Print">A3 Colour Print</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2" htmlFor="documents">
                                Upload Documents:
                            </label>
                            <input
                                type="file"
                                id="documents"
                                name="documents"
                                placeholder="E.g., Aadhar Card, Pan Card"
                                multiple
                                onChange={handleFileChange}
                                className="w-full px-3 py-2 border rounded-lg"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div >
        </main >
    );
}

export default Home;