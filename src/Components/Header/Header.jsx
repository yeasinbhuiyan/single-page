import React, { useState } from 'react';
import { BoltIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <div className='my-container'>
            <div className='flex items-center justify-between bg-gray-100 px-2 py-3'>

                {/* logo section  */}
                <Link to='/' className='inline-flex'>
                    <BoltIcon className="h-6 w-6 text-blue-500" />
                    <span className='ml-2 text-xl font-bold tracking-wide text-gray-800'>nextPage</span>
                </Link>



                {/* nav item section */}
                <ul className='lg:flex space-x-8 hidden px-5'>
                    <li>
                        <NavLink to='/' className={({ isActive }) => isActive ? 'text-blue-600' : 'default'}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/books' className={({ isActive }) => isActive ? 'text-blue-600' : 'default'}>Book</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about' className={({ isActive }) => isActive ? 'text-blue-600' : 'default'}>About</NavLink>
                    </li>

                </ul>

                {/* mobaile menu  */}
                <div className='md:hidden'>
                    <button title='Open Menu' onClick={() => setIsMenuOpen(!isMenuOpen)}><Bars3Icon
                        className='w-5 text-gray-600'>
                    </Bars3Icon></button>
                    {
                        isMenuOpen && (
                            <div className='duration-1000 '>
                                <ul className=' bg-slate-500 p-4 absolute top-0 left-1'>
                                    <XMarkIcon onClick={() => setIsMenuOpen(!isMenuOpen)} className='w-4 h-4 text-blue-600'></XMarkIcon>
                                    <li>
                                        <NavLink to='/' className={({ isActive }) => isActive ? 'text-blue-600' : 'default'}>Home</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/books' className={({ isActive }) => isActive ? 'text-blue-600' : 'default'}>Book</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/about' className={({ isActive }) => isActive ? 'text-blue-600' : 'default'}>About</NavLink>
                                    </li>

                                </ul>
                            </div>
                        )
                    }

                </div>



            </div>


        </div>
    );
};

export default Header;