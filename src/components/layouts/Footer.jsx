import React from 'react'

export const Footer = () => {
  return (
    <footer className='bg-white'>
        {/* bottom */}
        <div className='py-4 text-center text-gray-400 font-sans'>
            &copy; {new Date().getFullYear()} Travel Nepal. All Rigths Reserved.
        </div>
    </footer>
  )
}
