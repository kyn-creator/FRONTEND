import React from 'react';

const AcceptedStatus = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col justify-start items-center py-20">
      {/* Main container */}
      <div className="container mx-auto p-6">
        {/* Title and Back Button Section */}
        <div className="flex justify-between items-center mb-12">

          {/* Title */}
          <div>
            <h1 className="text-3xl font-semibold text-green-800 mb-4">Accepted Applicants</h1>
          </div>
          
          {/* Back Button */}
          <a href="/ApplicantStatus">
            <button className="bg-green-700 text-white py-2 px-4 rounded-lg hover:bg-green-600">
              &larr; Back
            </button>
          </a>



        </div>

        {/* Applicant Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Applicant 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
            <div className="flex items-center space-x-6 mb-4">
              <img
                src="/PICTURES/images.jpg"
                alt="Profile Picture"
                className="w-20 h-20 rounded-full object-cover border-2 border-green-500"
              />
              <div>
                <h5 className="text-xl font-semibold text-gray-800">John Doe</h5>
                <p className="text-sm text-gray-500">BS-VAL</p>
              </div>
            </div>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et sapien diam. Nam sit amet libero gravida, auctor ligula at, interdum nisl.
            </p>
          </div>

          {/* Applicant 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
            <div className="flex items-center space-x-6 mb-4">
              <img
                src="/PICTURES/images.jpg"
                alt="Profile Picture"
                className="w-20 h-20 rounded-full object-cover border-2 border-green-500"
              />
              <div>
                <h5 className="text-xl font-semibold text-gray-800">Jane Doe</h5>
                <p className="text-sm text-gray-500">BS-IT</p>
              </div>
            </div>
            <p className="text-gray-600">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
          </div>

          {/* Add more applicants as needed */}
        </div>
      </div>
    </div>
  );
};

export default AcceptedStatus;