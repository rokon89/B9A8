import { NavLink } from "react-router-dom";

const Nav = () => {
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/Listed_Books', name: 'Listed Books' },
        { id: 3, path: '/Pages_to_Read', name: 'Pages to Read' },
    ];
    return (
        <div>

            <div>
                <ul className="hidden md:flex text-lg space-x-8 ">
                    {
                        routes.map(route => <li className="" key={route.id}><NavLink className={({ isActive }) => isActive ? "text-lg  text-green-400  border border-green-500 p-2 rounded-md " : ""}
                            to={route.path}>
                            {route.name}
                        </NavLink>
                        </li>
                        )
                    }
                </ul>
            </div>

        </div>
    );
};

export default Nav;