import React from 'react';
import { useEffect, useState } from "react";
import { GetbookApplication } from "../Javascript/Javascript";
import { useLoaderData } from 'react-router-dom';
import Bookmarks from './Bookmarks';

const Bookmark = () => {
    const data = useLoaderData()
    const [displays, setdisplay] = useState([])
    useEffect(() => {
        const Stroed = GetbookApplication()
        if (Stroed.length > 0) {
            const see = data?.filter(ds => Stroed.includes(ds.id));
            setdisplay(see)
        }
    }, []);
    console.log(displays)

    return (
        <div className='container mx-auto border  '>
            <div>
                {
                    displays.map(display => <Bookmarks key={display.id} display={display}></Bookmarks>)
                }
            </div>
        </div>
    );
};

export default Bookmark;