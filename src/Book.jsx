import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    return (
        <Link to={`../book/${book.isbn13}`}>

            <div className='overflow-hidden rounded shadow-lg hover:shadow-2xl relative transition duration-200 transform hover:translate-y-2'>


                <img className='object-cover w-full h-56 md:h-64 xl:h-80'
                    src={book.image} alt="" />

                <div className='bg-black text-white px-6 py-6 bg-opacity-75 transition-opacity duration-200
         opacity-0 hover:opacity-100 absolute inset-0'>
                    <p>{book.title}</p>
                    <br />
                    <p>{book.subtitle.substring(0, 40)}...See More</p>
                    <br />
                    <p>Price: {book.price}</p>

                </div>
            </div>

        </Link>
    );
};

export default Book;