import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from "lottie-react";
import readBoy from "../assets/94115-reading-boy.json";

const Home = () => {
    return (
        <div className='my-container md:flex justify-between items-center'>
            <div className='mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0'>
                <div className='max-w-xl mb-6 lg:mt-8'>
                    <div>
            <p className='p-1 bg-yellow-500 rounded-xl w-20'>On Sale!</p>
          </div>
                    <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>
                        A reader lives a <br className='hidden md:block' /> thousand lives{' '}
                        <span className='inline-block text-blue-400'>before he dies</span>
                    </h2>
                    <p className='text-base text-gray-700 md:text-lg'>
                        Books are a uniquely portable magic. Books serve to show a man that
                        those original thoughts of his aren’t very new after all. The man
                        who does not read good books is no better than the man who can’t.
                    </p>
                </div>
                <div className='flex flex-col items-center md:flex-row'>
                    <Link to='/books' className='btn md:w-auto md:mr-4 bg-blue-600 text-white p-2 rounded-xl'>
                        <div className='inline-flex items-center justify-center w-full h-full'>
                            <p className='mr-3'>Visit Store</p>
                            <ShoppingCartIcon className='w-5 text-gray-100' />
                        </div>
                    </Link>
                    <Link
                        to='/about'
                        className='inline-flex items-center bg-gray-600 p-2 rounded-xl text-white'
                    >
                        Learn More
                    </Link>
                </div>
            </div>

            {/* lottiefiles animation  */}

            <div className='relative lg:w-1/2 '>
                <div className='w-full lg:w-4/5 lg:ml-auto h-56  sm:h-96'>
                    <Lottie animationData={readBoy} loop={true} />
                </div>
            </div>
        </div>
    );
};

export default Home;