import React from 'react'

export const Footer = () => {
  return (
    <footer className='bg-slate-900 text-white mt-10'>
        {/* bottom */}
        <div className='border-t border-gray-700 py-4 text-center text-gray-400'>
            &copy; {new Date().getFullYear()} Travel Nepal. All Rigths Reserved.
        </div>
    </footer>
  )
}
