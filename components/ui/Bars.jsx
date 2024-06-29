"use client";

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import React from 'react';

export default function Bars({ isActive, setIsActive }) {
  return (
    <div className='z-50' onClick={() => setIsActive(!isActive)}>
      {isActive ? (
        <XMarkIcon />        
      ) : (
        <Bars3Icon />
      )}
    </div>
  );
}
