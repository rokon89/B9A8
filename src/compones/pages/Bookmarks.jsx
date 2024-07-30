import { SlLocationPin } from "react-icons/sl";
import { MdOutlineRestorePage } from "react-icons/md";
import { IoMdPersonAdd } from "react-icons/io";
const Bookmarks = ({ display }) => {
    const { img, bookname, tags, author, id, rating, category, yearOfPublishing, publisher, totalPages } = display
    return (
        <div className="flex my-7">
            <div className="w-1/4 bg-slate-100 rounded-lg ">
                <img className="p-4 " src={img} alt="" />
            </div>
            <div className=" rounded-lg w-3/4 ">
                <div className="pl-3 space-y-3">
                    <p className="text-xl font-serif font-semibold "> {bookname}</p>
                    <p className="font-medium"> By : {author}</p>
                    <div className="flex items-center">
                        <div className=' my-2 flex justify-around w-2/6'>
                            <p className='font-bold'>Tag</p>
                            {
                                tags.map(tag => <p className=' text-green-500 border px-4 py-1 rounded-full bg-slate-100 font-semibold ' > #{tag}</p>)
                            }
                        </div>
                        <div className="flex pl-4 items-center">
                            <span className="pr-3"><SlLocationPin /></span> <p>Year of Publishing: {yearOfPublishing}</p>
                        </div>
                    </div>
                    <div className=" flex">
                        <p className="items-center flex">
                            <span className="pr-2"><IoMdPersonAdd /></span> publisher :  {publisher}
                        </p>
                        <p className="pl-6 items-center flex">
                            <span className="pr-2"><MdOutlineRestorePage /></span> page : {totalPages}
                        </p>
                    </div>
                    <hr />
                    <div className="flex justify-around w-2/4">
                        <button className="bg-blue-100 text-blue-600 rounded-full px-4 py-2" >category: {category}</button>
                        <button className="bg-blue-100 rounded-full px-4 py-2" > rating : {rating}</button>
                        <button className="bg-green-400 rounded-full px-4 py-2" >view details { }</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bookmarks;

