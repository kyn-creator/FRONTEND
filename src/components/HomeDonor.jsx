import React, { useState, useRef, useEffect } from 'react';

const HomeDonor = () => {
    // State to control visibility of "Add Scholarship" modal
    const [showAddScholarshipModal, setShowAddScholarshipModal] = useState(false);

    // Static scholarships data with course tags and applicant count
    const scholarshipsData = [
        {
            id: 1,
            title: 'Computer Science Scholarship',
            description: 'A scholarship for students pursuing a degree in Computer Science.',
            status: 'Active',
            courses: ['Computer Science', 'Data Science'],
            applicantCount: 45, // Number of applicants
        },
        {
            id: 2,
            title: 'Engineering Excellence Scholarship',
            description: 'Awarded to exceptional engineering students.',
            status: 'Deactivated',
            courses: ['Engineering', 'Mechanical Engineering'],
            applicantCount: 10, // Number of applicants
        },
        {
            id: 3,
            title: 'Data Science Scholarship',
            description: 'A scholarship for students interested in Data Science.',
            status: 'Active',
            courses: ['Data Science'],
            applicantCount: 30, // Number of applicants
        },
    ];

    // States for scholarship input fields
    const [newScholarship, setNewScholarship] = useState({
        name: '',
        contact: '',
        deadline: '',
        requirements: ''
    });

    // Refs to detect click outside of modal
    const addScholarshipModalRef = useRef(null);

    // Toggle add scholarship modal visibility
    const toggleAddScholarshipModal = () => {
        setShowAddScholarshipModal(!showAddScholarshipModal);
    };

    // Close modal when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (addScholarshipModalRef.current && !addScholarshipModalRef.current.contains(event.target)) {
                setShowAddScholarshipModal(false); // Close the add scholarship modal
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Handle input changes for scholarship
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewScholarship((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <>
            {/* Page Content with White Background */}
            <div className="bg-white min-h-screen pt-1">
                <div className="container mx-auto mt-8 px-4 pb-8">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-2xl font-semibold">Scholarships Offered</h1>
                        <div className="flex space-x-4">
                            {/* Button to show add scholarship modal */}
                            <button
                                onClick={toggleAddScholarshipModal} // Toggle add scholarship modal
                                className="bg-green-700 text-white py-2 px-4 rounded-md hover:bg-green-600"
                            >
                                Add Scholarship
                            </button>
                            <button className="bg-red-700 text-white py-2 px-4 rounded-md hover:bg-red-600">Delete Scholarship</button>
                            {/* Static Dropdown, no state management */}
                            <div className="relative inline-block text-left">
                                <select
                                    className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-gray-50 text-sm font-medium text-gray-700 hover:bg-gray-100"
                                    disabled
                                >
                                    <option value="All Courses">All Courses</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Search Bar to Filter by Title */}
                    <div className="mb-6">
                        <input
                            type="text"
                            placeholder="Search Scholarships..."
                            className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    {/* Scholarship Items */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {scholarshipsData.map((scholarship) => (
                            <a
                                key={scholarship.id}
                                href="/ApplicantStatus"
                                className="block bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
                            >
                                <div
                                    className={`${scholarship.status === 'Active' ? 'bg-green-600' : 'bg-red-600'
                                        } text-white py-2 px-4 rounded-md flex items-center justify-between`}
                                >
                                    <span>{scholarship.status}</span>
                                    <span className="text-sm text-white-100">{scholarship.applicantCount} Applicants</span>
                                </div>
                                <div className="mt-4">
                                    <div className="text-lg font-semibold">{scholarship.title}</div>
                                    <p className="text-gray-600">{scholarship.description}</p>
                                </div>
                                <div className="mt-2 flex space-x-2">
                                    {/* Display course tags */}
                                    {scholarship.courses.map((course, index) => (
                                        <span key={index} className="text-sm bg-gray-200 text-gray-700 py-1 px-2 rounded-md">
                                            {course}
                                        </span>
                                    ))}
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Add Scholarship Modal */}
            {showAddScholarshipModal && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
                    <div
                        ref={addScholarshipModalRef}
                        className="max-w-screen-lg w-full mx-auto bg-white p-8 rounded-xl shadow-2xl space-y-6"
                    >
                        {/* Close Button */}
                        <button
                            onClick={toggleAddScholarshipModal}
                            className="absolute top-4 right-4 text-xl text-gray-600 hover:text-gray-800"
                        >
                            &times;
                        </button>
                        <h2 className="text-2xl font-semibold mb-6">Add New Scholarship</h2>

                        {/* Input Fields for Scholarship Details */}
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Scholarship Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={newScholarship.name}
                                    onChange={handleInputChange}
                                    className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Contact</label>
                                <input
                                    type="text"
                                    name="contact"
                                    value={newScholarship.contact}
                                    onChange={handleInputChange}
                                    className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Deadline</label>
                                <input
                                    type="date"
                                    name="deadline"
                                    value={newScholarship.deadline}
                                    onChange={handleInputChange}
                                    className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Requirements</label>
                                <textarea
                                    name="requirements"
                                    value={newScholarship.requirements}
                                    onChange={handleInputChange}
                                    rows="4"
                                    className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                            </div>
                        </div>

                        {/* Action Buttons (Save & Back) */}
                        <div className="flex justify-between mt-6">
                            {/* Back Button */}
                            <button
                                onClick={toggleAddScholarshipModal} // Close the modal without saving
                                className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600"
                            >
                                Back
                            </button>
                            {/* Save Button (just logs for now) */}
                            <button
                                onClick={() => console.log('Scholarship Added:', newScholarship)} // You can replace this with the actual save function
                                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                            >
                                Save Scholarship
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default HomeDonor;
