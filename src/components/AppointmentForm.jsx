import React, { useState } from 'react';
import axios from 'axios';

const AppointmentForm = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const today = new Date();
  const minDate = today.toISOString().split('T')[0];

  const maxDateObj = new Date();
  maxDateObj.setMonth(maxDateObj.getMonth() + 2);
  const maxDate = maxDateObj.toISOString().split('T')[0];

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    gender: '',
    preferredDate: '',
    preferredTime: '',
    selectedServices: '',
    message: '',
  });

  const timeSlots = [
    '9:00AM - 10:00AM',
    '10:00AM - 11:00AM',
    '11:00AM - 12:00PM',
    '12:00PM - 1:00PM',
    '1:00PM - 2:00PM',
    '2:00PM - 3:00PM',
    '3:00PM - 4:00PM',
    '4:00PM - 5:00PM',
    '5:00PM - 6:00PM',
    '6:00PM - 7:00PM',
  ];

  const services = [
    'Manual Therapy',
    'Dry Needling',
    'IASTM',
    'Taping',
    'Electrotherapy',
    'Exercise Therapy',
    'Home Visit',
    'Posture Correction',
    'Pediatric Therapy',
    'Geriatric Therapy',
    'Sports Rehab',
    "Others"
  ];

  const handleChange = (e) => {
    setError(false);
    setSuccess(false);
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const validateForm = () => {
    const {
      name,
      phone,
      email,
      address,
      gender,
      preferredDate,
      preferredTime,
      selectedServices,
    } = formData;

    if (
      !name ||
      !phone ||
      !email ||
      !address ||
      !gender ||
      !preferredDate ||
      !preferredTime ||
      !selectedServices
    ) {
      setError(true);
      setErrMsg('Please fill out all required fields');
      return false;
    }

    if (!/^[6-9]\d{9}$/.test(phone)) {
      setError(true);
      setErrMsg('Please enter a valid 10-digit mobile number.');
      return false;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError(true);
      setErrMsg('Invalid email address.');
      return false;
    }

    return true;
  };

  const handleClose = () =>{
    setError(false)
    setSuccess(false)
   
  }

  const handleSubmit = async () => {
    if (!validateForm()) return;
    setLoading(true)

    const payload = {
      ...formData,
      preferredDate: new Date(formData.preferredDate) // ✅ force convert to Date
    };

    try {
      console.log("Sending formData payload",payload);

      const res = await axios.post('https://ctc-backend-service.onrender.com/appointments', payload);
      setSuccess(true)
      setFormData({
        name: '',
        phone: '',
        email: '',
        address: '',
        gender: '',
        preferredDate: '',
        preferredTime: '',
        selectedServices: '',
        message: '',
      });
      
    } catch (error) {
      setError(true)
      if (error.response) {
        console.log(error)
        setErrMsg("Booking failed. Please try again later.");
      } else if (error.request) {
        setErrMsg("Unexpected error occurred. Please try again later.");
      } else {
        setErrMsg("Unexpected error occurred. Please try again later.");   
      }
    } finally{
      setLoading(false)
    }
  };

  return (
    <div className="mt-8 flex flex-col px-4 gap-4 max-w-xl mx-auto ">
      {
        success && 
        <div className="bg-green-400 text-green-800 font-semibold p-2 rounded-md flex items-center justify-between">
          <div className='flex'>
          <i class="bi bi-check-lg px-2"></i>
          Your Appointment has been booked successfully.
          </div>
          <i className=' bi bi-x-lg bg-green-200 rounded-md p-2 hover:bg-green-50  transition-all font-extrabold ' onClick={handleClose}></i>
        </div>
      }
      {
        error &&
        <div className="bg-red-200 text-red-800 font-semibold p-1 rounded-md flex items-center justify-between">
         <div>
          <i className="bi bi-exclamation-triangle px-2"></i>
          {errMsg}error
         </div>
          <i className=' bi bi-x-lg bg-red-100 rounded-md p-2 hover:bg-red-50 transition-all font-extrabold ' onClick={handleClose}></i>
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
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
        className="p-3 rounded-md border border-gray-300 bg-white"
      />
      <textarea
        name="address"
        placeholder="Address"
        value={formData.address}
        onChange={handleChange}
        className="p-3 rounded-md border border-gray-300 bg-white"
      ></textarea>

      <select
        name="gender"
        value={formData.gender}
        onChange={handleChange}
        className="p-3 rounded-md border border-gray-300 bg-white"
      >
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>

      <div className="grid grid-cols-2 gap-4">
      <input
        type="date"
        name="preferredDate"
        value={formData.preferredDate}
        onChange={handleChange}
        min={minDate}
        max={maxDate}
        className="p-3 rounded-md border border-gray-300 bg-white"
      />

        <select
          name="preferredTime"
          value={formData.preferredTime}
          onChange={handleChange}
          className="p-3 rounded-md border border-gray-300 bg-white"
        >
          <option value="">Select Time Slot</option>
          {timeSlots.map((slot) => (
            <option key={slot} value={slot}>
              {slot}
            </option>
          ))}
        </select>
      </div>

      <select
        name="selectedServices"
        value={formData.selectedServices}
        onChange={handleChange}
        className="p-3 rounded-md border border-gray-300 bg-white "
      >
        <option value="">Select Services</option>
        {services.map((service) => (
          <option key={service} value={service}>
            {service}
          </option>
        ))}
      </select>

      <textarea
        name="message"
        placeholder="Additional Message (optional)"
        value={formData.message}
        onChange={handleChange}
        className="p-3 rounded-md border border-gray-300 bg-white"
      ></textarea>
      <button
        onClick={handleSubmit}
        disabled = {loading || success}
        className={`bg-amber-700 text-white py-3 px-6 rounded-xl  transition w-fit ${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-amber-800"} `}
      >
        {loading?
        <>
           <svg className="animate-spin h-5 w-5 mr-2 inline" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4" fill="none" />
            <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8z" />
          </svg> Booking...
        </>
       : success? "Booking Successfull" : 
       <> Book New Appointment <i className="bi bi-arrow-right-circle"></i> </>} 
      </button>
      
    </div>
  );
};

export default AppointmentForm;
