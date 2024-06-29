"use client";

import { useState } from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

export default function Register() {
  const [form, setForm] = useState({
    name: '',
    fatherOrHusbandName: '',
    motherName: '',
    dateOfBirth: '',
    gender: '',
    socialCategory: '',
    highestQualification: '',
    status: '',
    courseName: '',
    mobile: '',
    email: '',
    transactionId: '',
    address: '',
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: type === 'file' ? files[0] : value,
    }));
  };

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData();
    for (const key in form) {
      formData.append(key, form[key]);
    }

    const response = await fetch('/api/register', {
      method: 'POST',
      body: formData,
    });

    const result = await response.json();
    if (response.ok) {
      alert('Student registered successfully!');
      setForm({
        name: '',
        fatherOrHusbandName: '',
        motherName: '',
        dateOfBirth: '',
        gender: '',
        socialCategory: '',
        highestQualification: '',
        status: '',
        courseName: '',
        mobile: '',
        email: '',
        transactionId: '',
        address: '',
        photo: null,
      });
    } else {
      alert(result.message);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-10/12 mx-auto p-8 my-2 bg-white rounded-lg shadow-md">
      <p className='text-center font-bold pb-2 underline text-blue-500'>Student's Enrollment Form I.M.H. Education Centre Bareilly</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="form-group">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input type="text" id="name" name="name" value={form.name} placeholder="Name" required onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500" />
        </div>
        <div className="form-group">
          <label htmlFor="fatherOrHusbandName" className="block text-sm font-medium text-gray-700">Father/Husband's Name</label>
          <input type="text" id="fatherOrHusbandName" name="fatherOrHusbandName" value={form.fatherOrHusbandName} placeholder="Father/Husband's Name" required onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500" />
        </div>
        <div className="form-group">
          <label htmlFor="motherName" className="block text-sm font-medium text-gray-700">Mother's Name</label>
          <input type="text" id="motherName" name="motherName" value={form.motherName} placeholder="Mother's Name" required onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500" />
        </div>
        <div className="form-group">
          <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700">Date of Birth</label>
          <input type="date" id="dateOfBirth" name="dateOfBirth" value={form.dateOfBirth} required onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500" />
        </div>
        <div className="form-group">
          <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
          <select id="gender" name="gender" value={form.gender} required onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500">
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="socialCategory" className="block text-sm font-medium text-gray-700">Social Category</label>
          <select id="socialCategory" name="socialCategory" value={form.socialCategory} required onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500">
            <option value="">Select Social Category</option>
            <option value="general">General</option>
            <option value="obc">OBC</option>
            <option value="sc">SC</option>
            <option value="st">ST</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="highestQualification" className="block text-sm font-medium text-gray-700">Highest Qualification</label>
          <select id="highestQualification" name="highestQualification" value={form.highestQualification} required onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500">
            <option value="">Select Highest Qualification</option>
            <option value="highschool">High School</option>
            <option value="intermediate">Intermediate</option>
            <option value="graduate">Graduate</option>
            <option value="postgraduate">Post Graduate</option>
            <option value="others">Others</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
          <select id="status" name="status" value={form.status} required onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500">
            <option value="">Select Status</option>
            <option value="student">Student</option>
            <option value="employed">Employed</option>
            <option value="Housewife">Housewife</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="courseName" className="block text-sm font-medium text-gray-700">Course Name</label>
          <input type="text" id="courseName" name="courseName" value={form.courseName} placeholder="Course Name" required onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500" />
        </div>
        <div className="form-group">
          <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">Mobile</label>
          <input type="text" id="mobile" name="mobile" value={form.mobile} placeholder="Mobile" required onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500" />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" id="email" name="email" value={form.email} placeholder="Email" required onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500" />
        </div>
        <div className="form-group">
          <label htmlFor="transactionId" className="block text-sm font-medium text-gray-700">Transaction ID</label>
          <input type="text" id="transactionId" name="transactionId" value={form.transactionId} placeholder="Transaction ID" required onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500" />
        </div>
        <div className="form-group">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
          <input type="text" id="address" name="address" value={form.address} placeholder="Address" required onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500" />
        </div>
        <div className="form-group">
          <label htmlFor="photo" className="block text-sm font-medium text-gray-700">Upload Photo</label>
          <input type="file" id="photo" name="photo" accept="image/*" required onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500" />
        </div>
      </div>

      <label className="flex items-center mt-6">
        <input type="checkbox" name="terms" required className="mr-2" />I agree to the terms and conditions as set out by I.M.H. Education Centre
      </label>

      <button type="submit" className="mt-4 bg-green-400 text-white hover:bg-green-600 rounded-md py-2 px-4 flex items-center">
        <CheckCircleIcon className="h-5 w-5 mr-2" />
        Register
      </button>
    </form>
  );
}
