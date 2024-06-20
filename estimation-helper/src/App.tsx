import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState<any>({
    companyName: '',
    effortDays: 80,
    numberOfResource: 3,
    numberOfTester: 2,
    numberOfProjectManager: 0,
    projectName: '',
    assumptions: [''],
    queries: [''],
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleArrayChange = (e: any, index: any, field: any) => {
    const newArray = [...formData[field]];
    newArray[index] = e.target.value;
    setFormData({ ...formData, [field]: newArray });
  };

  const addArrayField = (field: any) => {
    setFormData({ ...formData, [field]: [...formData[field], ''] });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const apiUrl = window.location.hostname === 'localhost'
        ? 'http://localhost:8080/estimate'
        : 'https://estimate-efforts.onrender.com/estimate';

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch');
      }
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = 'estimate.xlsx';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  return (
    <div className="max-w-md mx-auto my-10 bg-white p-8 rounded-md shadow-md justify-center">
      <h2 className="text-2xl font-semibold mb-6 text-center">Company Information</h2>
      <form onSubmit={handleSubmit}>
        {[
          { label: 'Company Name', name: 'companyName' },
          { label: 'Project Name', name: 'projectName' },
          { label: 'Effort Days', name: 'effortDays', type: 'number' },
          { label: 'Number of Resource', name: 'numberOfResource', type: 'number' },
          { label: 'Number of Tester', name: 'numberOfTester', type: 'number' },
          { label: 'Number of Project Manager', name: 'numberOfProjectManager', type: 'number' }
        ].map((field, index) => (
          <div className="mb-4" key={index}>
            <label htmlFor={field.name} className="block text-sm font-medium text-gray-700">
              {field.label}
            </label>
            <input
              type={field.type || 'text'}
              id={field.name}
              name={field.name}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              onChange={handleChange}
              required
            />
          </div>
        ))}
        {['assumptions', 'queries'].map((field, index) => (
          <div className="mb-4" key={index}>
            <label className="block text-sm font-medium text-gray-700">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
            {formData[field].map((value: any, idx: any) => (
              <div className="mb-2" key={idx}>
                <input
                  type="text"
                  value={value}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  onChange={(e) => handleArrayChange(e, idx, field)}
                  required
                />
              </div>
            ))}
            <button
              type="button"
              className="w-full bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300 focus:outline-none focus:bg-gray-300"
              onClick={() => addArrayField(field)}
            >
              Add More {field.charAt(0).toUpperCase() + field.slice(1)}
            </button>
          </div>
        ))}
        <div className="mb-4">
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
