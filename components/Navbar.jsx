import Image from 'next/image'
import React from 'react'
import { Bars3Icon, ChevronDownIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className='flex px-3 sm:px-7 py-2 justify-between items-center bg-black'>

      <div className='flex justify-between text-white gap-4 items-center'>

        <details className='sm:hidden '>
          <summary className='list-none'>
            <Bars3Icon className='text-white bg-stone-800 w-9 p-1' />
          </summary>
          <div className='py-4 px-7 absolute min-h-screen bg-black w-2/3 left-0'>
            <ul className='list-none text-sm flex flex-col gap-4'>
              <li><Link className='hover:text-white active:font-bold' href="/courses">Courses</Link></li>
              <li><Link className='hover:text-white active:font-bold' href="/events">Events</Link></li>
              <li><Link className='hover:text-white active:font-bold' href="/contact">Contact</Link></li>
              <li>
                <details>
                  <summary className='list-none cursor-pointer flex justify-start pb-4 items-center gap-1'><p>User</p><ChevronDownIcon className='w-4' /></summary>
                  <ul className='list-none flex pl-10 flex-col justify-start items-start gap-5'>
                    <li><Link className='hover:text-white active:font-bold' href="/admin">Admin</Link></li>
                    <li><Link className='hover:text-white active:font-bold' href="/tutor">Tutor</Link></li>
                    <li><Link className='hover:text-white active:font-bold' href="/student">Student</Link></li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </details>

        <Link href="/"><Image width={40} height={40} src="/Logo.png" alt="IMH Logo" /></Link>

        <Link href="/"><h1 className='text-2xl font-bold hidden sm:block tracking-wider'>IMH</h1></Link>

      </div>

      <div className='hidden sm:block text-sm text-neutral-300'>
        <ul className='list-none flex gap-4'>
          <li><Link className='hover:text-white active:font-bold' href="/courses">Courses</Link></li>
          <li><Link className='hover:text-white active:font-bold' href="/events">Events</Link></li>
          <li><Link className='hover:text-white active:font-bold' href="/contact">Contact</Link></li>
          <li>
            <details>
              <summary className='list-none cursor-pointer flex justify-center items-center gap-1'><p>User</p><ChevronDownIcon className='w-4' /></summary>
              <ul className='list-none absolute shadow-2xl flex flex-col justify-start items-start gap-5 bg-black py-5 pl-10 pr-32 right-2'>
                <li><Link className='hover:text-white active:font-bold' href="/admin">Admin</Link></li>
                <li><Link className='hover:text-white active:font-bold' href="/tutor">Tutor</Link></li>
                <li><Link className='hover:text-white active:font-bold' href="/student">Student</Link></li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </nav>
  )
}
