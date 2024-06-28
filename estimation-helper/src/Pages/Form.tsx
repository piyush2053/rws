import React, { useState } from 'react';
import rwsLogo from '../assets/rwsbanner2.png'
import add from '../assets/add.png'
import del from '../assets/del.png'

import { initialFormData } from '../utils/constants/contants';
import ModelAI from '../Model/AI_response';
const Form = () => {

  const [ModalShow, setModalShow] = useState<any>(false);
  const [flip, setFlip] = useState<any>(false);
  const [formData, setFormData] = useState<any>(initialFormData);

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

  const deleteArrayField = (index: number, field: string) => {
    if (formData[field].length > 1) {
      const newArray = [...formData[field]];
      newArray.splice(index, 1);
      setFormData({ ...formData, [field]: newArray });
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setModalShow(true)
  };

  return (
    <section className="bg-white w-[99%] p-10 my-2 mx-2 rounded-lg animate-fade">
      <div className="flex flex-col lg:flex-row">
        <img alt='ait' src={rwsLogo} className='rounded-lg mr-4 mb-4 animate-fade'></img>
          <form onSubmit={handleSubmit} >
            <div className='flex gap-5'>
              <div>
                {[
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
              </div>
              <div>
                {['assumptions', 'queries'].map((field, index) => (
                  <div className="mb-4" key={index}>
                    <label className="block text-sm font-medium text-gray-700">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                    {formData[field].map((value: string, idx: number) => (
                      <div className="flex mb-2" key={idx}>
                        <input
                          type="text"
                          value={value}
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          onChange={(e) => handleArrayChange(e, idx, field)}
                          required
                        />
                        {formData[field].length > 1 &&
                          <button
                            type="button"
                            style={{ marginLeft: '-30px' }}
                            className='my-auto'
                            onClick={() => deleteArrayField(idx, field)}
                          >
                            <img alt='del' src={del} className='h-5 w-5 rounded-full' />
                          </button>}
                      </div>
                    ))}
                    <button
                      type="button"
                      className="w-fullhover:bg-gray-300"
                      onClick={() => addArrayField(field)}
                    >
                      <div className='flex'>
                        <img alt='add' src={add} className='h-5 w-5 rounded-full' />
                        <p className='text-gray-700 text-xs pl-2 py-auto'>Add More {field.charAt(0).toUpperCase() + field.slice(1)}</p>
                      </div>
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <button
                type="submit"
                className={`w-full bg-[#007373] text-white py-2 px-4 rounded-md hover:bg-[#009688] focus:outline-none focus:bg-[#009688] justify-center`}
              >
                Submit
              </button>
            </div>
          </form>
          {ModalShow && <ModelAI data={formData} close={setModalShow}></ModelAI>}
        </div>
    </section>
  );
};

export default Form;
