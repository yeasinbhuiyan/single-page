import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Book from './Book';

const Books = () => {
    // const [books, setBooks] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.itbook.store/1.0/new')
    //     .then(res => res.json())
    //     .then(data => console.log(data.books))
    // },[])

    const { books } = useLoaderData()
    console.log(books)
    return (
        <div className='my-container grid grid-cols-2 lg:grid-cols-4 gap-6 m-5'>
            {
                books.map(book => <Book key ={book.isbn13} book={book}></Book>

                )
            }

        </div>
    );
};

export default Books;