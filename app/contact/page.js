// app/contact/page.js

"use client";

import Link from 'next/link';
import { useState } from 'react';
import {  } from '@heroicons/react/24/solid'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    tel: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if any field is empty
    if (!formData.name || !formData.email || !formData.tel || !formData.message) {
      alert('Please fill in all fields.');
      return;
    }

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        tel: '',
        message: ''
      });
    } else {
      alert('Failed to send message.');
    }
  };

  return (
    <main className='container mx-auto my-2 bg-white flex lg:flex-row flex-col'>
      <div className='md:w-4/5'>
        <div className='md:pl-24 md:w-2/3 px-3 py-16'>
          <h1 className='md:text-7xl text-4xl mb-5 font-extrabold tracking-widest'>Contact Us</h1>
          <p className='md:text-xl text-sm font-light tracking-wider'>Feel free to contact us any time. We will get back to you as soon as we can!</p>
          <form onSubmit={handleSubmit}>
            <div className='form-label'>
              <input className='c-input' type="text" name="name" id="name" placeholder=" " value={formData.name} onChange={handleChange} />
              <label className='c-label' htmlFor="name">Name</label>
            </div>
            <div className='form-label'>
              <input className='c-input' type="email" name="email" id="email" placeholder=" " value={formData.email} onChange={handleChange} />
              <label className='c-label' htmlFor="email">Email</label>
            </div>
            <div className='form-label'>
              <input className='c-input' type="tel" name="tel" id="tel" placeholder=" " value={formData.tel} onChange={handleChange} />
              <label className='c-label' htmlFor="tel">Mobile</label>
            </div>
            <div className='form-label'>
              <input className='c-input' type="text" name="message" id="message" placeholder=" " value={formData.message} onChange={handleChange} />
              <label className='c-label' htmlFor="message">Message</label>
            </div>
            <button type="submit" className="w-full bg-neutral-800 text-white py-3 px-4 hover:bg-neutral-900">Send</button>
          </form>
        </div>
      </div>
      <div className='bg-neutral-900 shadow-md lg:w-1/3 hover:shadow-green-600 lg:my-32 lg:right-6 m-4 text-neutral-50 p-10 lg:absolute'>
        <div>
          <h2 className='text-2xl mb-10 font-bold md:text-4xl'>Info</h2>
          <p className='md:mb-5 text-sm font-light mb-3'>example@email.com</p>
          <p className='md:mb-5 text-sm font-light mb-3'>+91 807 752 3098</p>
          <p className='md:mb-5 text-sm font-light mb-3'>IMH Computer Education Centre, Bajpayee Residential Building, Subhash Nagar, Bareilly, 243001</p>
          <p className='md:mb-5 text-sm font-light mb-3'>Mon - Sat : 08.00 AM - 08.00 PM</p>
        </div>
      </div>
      <div className='md:w-1/5 text-white text-lg md:flex md:justify-center items-end py-2 bg-yellow-300'>
        <div className='flex justify-center items-center lg:pb-14 gap-4'>
          <Link target='_blank' href="https://www.facebook.com/share/6PGVaWpS1uPYuZfR/?mibextid=qi2Omg"></Link>
          <Link target='_blank' href="https://www.instagram.com/s.k_smart_hub?utm_source=qr&igsh=MXIzZjY5ejdhbnBnYw=="></Link>
          <Link target='_blank' href="https://wa.me/c/919997947577"></Link>
          <Link target='_blank' href="https://www.youtube.com/@S.K.Smarthub"></Link>
        </div>
      </div>
    </main>
  );
}
