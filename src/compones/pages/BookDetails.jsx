import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { saveApplication } from '../Javascript/Javascript';
const BookDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();
    const details = data?.find(da => da.id == id);
    const { img, bookname, category, rating, description, tags, publisher, layout, yearOfPublishing, totalPages, author, } = details

    const Applied = () => {

        saveApplication(id)
    }

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen w-4/5 mx-auto">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src={img} alt="add"
                        className="w-1/2 rounded-lg shadow-2xl" />

                    <div className='space-y-3'>
                        <p className='text-4xl font-serif font-semibold '>{bookname}</p>
                        <p className='font-semibold'>By : {author}</p>
                        <hr />
                        <p className='font-semibold'>{category}</p>
                        <hr />
                        <p className='font-semibold'></p>

                        <h1 className="font-bold">{description}</h1>
                        <div className=' my-2 flex justify-around'>
                            <p className='font-bold'>Tag</p>
                            {
                                tags.map(tag => <p key={tag} className=' text-green-500 border px-4 py-1 rounded-full bg-slate-100 font-semibold ' > #{tag}</p>)
                            }
                        </div>
                        <hr />

                        <div className=' w-3/5 flex justify-around '>
                            <div>
                                <p>Number of pages : </p>
                                <p>Publisher : </p>
                                <p>year of Publishing :</p>
                                <p>Rating : </p>
                            </div>

                            <div>
                                <p className=' font-bold'> {totalPages}</p>
                                <p className=' font-bold '> {publisher}</p>
                                <p className=' font-bold '> {yearOfPublishing}</p>
                                <p className=' font-bold '> {rating}</p>
                            </div>
                        </div>

                        <div className='space-x-3'>
                            <button onClick={Applied} className="border border-zinc-300 btn py-3 px-8 ">Read</button>
                            <button className="btn btn-primary">Wishlist</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BookDetails;