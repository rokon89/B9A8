import React, { useEffect, useState } from 'react';
import Books from './Books';

const Book = () => {
    const [books, setbooks] = useState([])
    useEffect(() => {
        fetch("api.json")
            .then(res => res.json())
            .then(data => setbooks(data))
    }, [])
    console.log(books)
    return (
        <div>
            <p className=' text-center font-bold my-5 font-serif text-3xl'>Books </p>
            <div className='container mx-auto' >
                <div className=' grid lg:grid-cols-3 gap-4'>
                    {
                        books.map(book => <Books key={book.id} book={book}></Books>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Book;