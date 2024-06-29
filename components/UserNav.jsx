import React from 'react'

export default function UserNav() {
  return (
    <nav className='flex px-5 py-2 bg-white justify-between items-center'>
        <div className='text-center items-center flex gap-2'>
            <h1 className='font-extrabold'>User:</h1>
            <p className='font-bold'>User Name</p>
        </div>
        
        <div className='py-3 px-5 bg-stone-900 hover:bg-stone-950 text-stone-100 hover:text-stone-50'>Sign In</div>
    </nav>
  )
}
