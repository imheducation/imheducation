
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import React from 'react'

export default function MobileMenu({ isActive, setIsActive }) {
    const handleLinkClick = () => {
        setIsActive(false);
      };

  return (
    <div id='mobileMenu' 
    className={`py-4 px-7 absolute min-h-screen bg-black w-2/3 left-0 ${isActive ? 'active' : ''}`} >
            <ul className='list-none text-sm flex flex-col gap-4'>
              <li><Link onClick={handleLinkClick} className='hover:text-white active:font-bold' href="/courses">Courses</Link></li>
              <li><Link onClick={handleLinkClick} className='hover:text-white active:font-bold' href="/events">Events</Link></li>
              <li><Link onClick={handleLinkClick} className='hover:text-white active:font-bold' href="/contact">Contact</Link></li>
              <li>
                <details>
                  <summary className='list-none cursor-pointer flex justify-start pb-4 items-center gap-1'><p>User</p><ChevronDownIcon className='w-4' /></summary>
                  <ul className='list-none flex pl-10 flex-col justify-start items-start gap-5'>
                    <li><Link onClick={handleLinkClick} className='hover:text-white active:font-bold' href="/admin">Admin</Link></li>
                    <li><Link onClick={handleLinkClick} className='hover:text-white active:font-bold' href="/tutor">Tutor</Link></li>
                    <li><Link onClick={handleLinkClick} className='hover:text-white active:font-bold' href="/student">Student</Link></li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
  )
}
