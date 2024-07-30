import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Bookmarks from "./Bookmarks";

const Listed_Books = () => {

    const [active, setactive] = useState(1)

    return (
        <div className="container mx-auto ">
            <div className="bg-slate-200 text-center py-6 w-full rounded-2xl text-3xl font-bold  ">Book</div>

            <div className=" w-2/6 my-2">

                <div className=" md:text-xl font-semibold flex " >
                    <Link
                        to={"bookmark"}
                        onClick={() => { setactive(1) }}
                        className={` rounded-md px-2 ${active === 1 ? "border border-b-0" : "border-b"} `} >Read Book</Link>
                    <Link
                        to={"wishlist"}
                        onClick={() => { setactive(2) }}
                        className={`border-b rounded-md px-1 ${active === 2 ? "border border-b-0" : "border-b"} `}>Wishlist Books</Link>
                </div>

            </div>

            <div className="my-5">
                <Outlet></Outlet>
            </div>
        </div>
    );
};


export default Listed_Books;


