import React from 'react';
import { IoStar } from "react-icons/io5";
import { Link } from 'react-router-dom';
const Books = ({ book }) => {
    console.log(book)
    const { img, bookname, tags, author, id, rating, category } = book
    return (
        <div>
            <Link to={`details/${id}`} >
                <div className=" card card-compact bg-base-100 w-96 shadow-xl">
                    <figure className='mb-2'>
                        <img className='h-60'
                            src={img}
                            alt="Shoes" />
                    </figure>

                    <div className=' my-2 flex justify-around'>
                        
                        {
                            tags.map(tag => <p className=' text-green-500 font-semibold border px-4 py-1 rounded-full bg-slate-100 ' >{tag}</p>)
                        }
                    </div>

                    <div className=" space-y-2 card-body">
                        <h2 className="text-3xl font-medium font-serif ">{bookname}</h2>
                        <p className='border-b border-dashed font-semibold pb-7'> By : {author}</p>

                        <div className='flex justify-around'>
                            <div>
                                <p>{category}</p>
                            </div>
                            <div className='flex items-center space-x-2 '>
                                <p >{rating}</p> <IoStar />
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Books;