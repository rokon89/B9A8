import Manu from "./Manu";
import Nav from "./Nav";

const MainNav = () => {
    return (
        <div className=" py-4 flex justify-around w-full fixed z-10 ">
            <div className=" md:hidden">
                <Manu></Manu>
            </div>
            <div>
                <p className="text-2xl font-bold font-mono">Book Vibe</p>
            </div>
            <div className="">
                <Nav></Nav>
            </div>
            <div>
                <button className=" bg-green-600 px-4 py-2 rounded-md text-lg font-semibold">sing in</button>
                <button className="ml-2 bg-emerald-300  px-4 py-2 rounded-md text-lg font-semibold">sung up</button>
            </div>
        </div>
    );
};

export default MainNav;