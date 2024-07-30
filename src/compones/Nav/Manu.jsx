import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { ImCross } from "react-icons/im";
const Manu = () => {

    const [open, setopen] = useState(true)

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/Listed_Books', name: 'Listed Books' },
        { id: 3, path: '/Pages_to_Read', name: 'Pages to Read' },
    ];
    return (
        <div>
            <div className="text-2xl" onClick={() => setopen(!open)}>
                {open ? <GiHamburgerMenu /> : <ImCross />}
            </div>
            <ul className={`absolute  ${open ? 'hidden' : ''}`}>
                {
                    routes.map(r => <li className={` `} key={r.id}>
                        <NavLink className={({ isActive }) => isActive ?
                            " text-green-400  border border-green-500 rounded-md " :
                            ""} to={r.path} > {r.name}</NavLink>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Manu;