import React, { useState } from 'react';

const ProviderSignUp = () => {
  // State for tracking form inputs
  const [formData, setFormData] = useState({
    providerName: '',
    contact: '',
    picture: null,
    requirements: [],
  });

  // Handle picture file input change
  const handleFileChange = (e, field) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, [field]: file });
    }
  };

  // Handle requirements file input change (can accept multiple files)
  const handleRequirementsChange = (e) => {
    const files = e.target.files;
    if (files.length) {
      const fileArray = Array.from(files);
      setFormData({ ...formData, requirements: fileArray });
    }
  };

  // Handle drag and drop for requirements
  const handleDragDrop = (e, field) => {
    e.preventDefault();
    e.stopPropagation();

    const files = e.dataTransfer.files;
    if (files.length) {
      const fileArray = Array.from(files);
      setFormData({ ...formData, [field]: fileArray });
    }
  };

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Provider Form Submitted:', formData);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-100 via-indigo-100 to-blue-300">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">Provider Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Provider Name */}
          <div>
            <label htmlFor="providerName" className="block text-sm font-medium text-blue-600">
              Provider Name
            </label>
            <input
              type="text"
              id="providerName"
              name="providerName"
              value={formData.providerName}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter provider name"
            />
          </div>

          {/* Contact Number */}
          <div>
            <label htmlFor="contact" className="block text-sm font-medium text-blue-600">
              Contact Number
            </label>
            <input
              type="text"
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter provider contact number"
            />
          </div>

          {/* Requirements Upload */}
          <div>
            <label htmlFor="requirements" className="block text-sm font-medium text-blue-600">
              Upload Requirements (for Legit Check)
            </label>
            <div
              className="mt-2 border-2 border-dashed border-gray-300 p-6 text-center rounded-lg"
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => handleDragDrop(e, 'requirements')}
            >
              <input
                type="file"
                id="requirements"
                name="requirements"
                multiple
                onChange={handleRequirementsChange}
                className="hidden"
              />
              <label
                htmlFor="requirements"
                className="cursor-pointer text-sm font-medium text-indigo-600 hover:text-indigo-500"
              >
                Drag and drop files here or click to upload
              </label>
              {formData.requirements.length > 0 && (
                <div className="mt-3 text-sm text-gray-600">
                  <strong>Selected Files:</strong>
                  <ul className="list-disc pl-5">
                    {formData.requirements.map((file, index) => (
                      <li key={index}>{file.name}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-4">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              Sign Up as Provider
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProviderSignUp;
