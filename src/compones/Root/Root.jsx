import { Outlet } from "react-router-dom";
import MainNav from "../Nav/MainNav";

const Root = () => {
    return (
        <div>
            <div className="pb-16 ">
                <MainNav></MainNav>
            </div>
            <div className="mt-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;