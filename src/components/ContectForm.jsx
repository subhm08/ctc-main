import React, { useState } from 'react';
import axios from 'axios';

const ContectForm = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const handleClose = () =>{
    setSuccess(false);
    setError(false);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

  };

  const validateForm = () => {
    const {
      name,
      phone,
    } = formData;

    if (
      !name || !phone 
    ) {
      setError(true)
      setErrMsg("Please fill out all required fields.")
      return false;
    }

    if (!/^[6-9]\d{9}$/.test(phone)) {
      setError(true)
      setErrMsg("Please enter a valid 10-digit mobile number.")
      return false;
    }

    return true;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;
    setLoading(true);

    try {
      console.log(formData);
      
      const res = await axios.post('https://ctc-backend-service.onrender.com/enquiry', formData);
      setSuccess(true);
      setFormData({
        name: '',
        phone: '',
        message: '',
      });
    } catch (error) {
      console.error(error);
      
      
      setError(true)
      setErrMsg("Something went wrong. Please try again later.")
      if (error.response) {
        setErrMsg(error.response.data?.message || 'Something went wrong. Try again later.');
      } else if (error.request) {
        setErrMsg('Something went wrong. Try again later.');
      } else {

        setErrMsg('Unexpected error occurred.');
      }
    }
    finally{
      setLoading(false);
    }
  };

  return (
    <div className="mt-8 flex flex-col px-4 gap-2 pb-8 mx-2">

      <h2 className="text-3xl font-bold text-gray-700 pb-4 ">Have any Question ?</h2>
      {
        success && 
        <div className="bg-green-400 text-green-800 font-semibold p-2 rounded-md flex items-center justify-between">
          <div className='flex'>
          <i class="bi bi-check-lg px-2"></i>
          <p>Thanks for connecting with us! We will reach out to you shortly.</p>
          </div>
          <i className=' bi bi-x-lg bg-green-200 rounded-md p-2 hover:bg-green-50  transition-all font-extrabold text-green-700' onClick={handleClose}></i>
        </div>
      }
      {
        error &&
        <div className="bg-red-200 text-red-800  font-semibold p-2 rounded-md flex items-center justify-between ">
         <div className='flex'>
         <i class="bi bi-exclamation-triangle px-2"></i>
         {errMsg}
         </div>
         <i className=' bi bi-x-lg bg-red-100 rounded-md p-2 hover:bg-red-50  transition-all font-extrabold text-red-800' onClick={handleClose}></i>
        </div>
      }
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={formData.name}
        onChange={handleChange}
        className="p-3 rounded-md border border-gray-300 bg-white"
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        className="p-3 rounded-md border border-gray-300 bg-white"
      />
     
      <textarea
        name="message"
        placeholder="Additional Message (optional)"
        value={formData.message}
        onChange={handleChange}
        className="p-3 rounded-md border border-gray-300 bg-white"
      ></textarea>

      <button
        onClick={handleSubmit}
        disabled={loading}
        className={`bg-amber-700 text-white py-3 px-6 rounded-xl transition w-fit ${loading ? 'opacity-50 cursor-not-allowed':'hover:bg-amber-800'}`}
      >
        {
        loading?
        <>  <svg className="animate-spin h-5 w-5 mr-2 inline" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4" fill="none" />
        <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8z" />
      </svg>Sending Your Request...</>
        :<><i className='bi bi-telephone-fill mr-2'></i> Request a Callback </>}
      </button>
    </div>
  );
};

export default ContectForm;
