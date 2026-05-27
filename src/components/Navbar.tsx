import { TbDna2 } from "react-icons/tb";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-neutral-700 text-white">
        <TbDna2 className="text-2xl text-lime-500"/>
        <h1 className="text-xl font-bold">Dino <span className="text-lime-500">Comp</span></h1>
        <ul className="flex gap-8 ml-auto cursor-pointer forced-colors:appearance-auto font-bold">
            <NavLink to="/browse"
            className={({ isActive }) => isActive ? "bg-neutral-800 px-3 py-1 rounded-md" : "px-3 py-1"}
            >
                Browse
            </NavLink>
            <NavLink to="/compare"
            className={({ isActive }) => isActive ? "bg-neutral-800 px-3 py-1 rounded-md" : "px-3 py-1"}
            >
                Compare
            </NavLink>
            <NavLink to="/about"
            className={({ isActive }) => isActive ? "bg-neutral-800 px-3 py-1 rounded-md" : "px-3 py-1"}
            >
                About
            </NavLink>
            <NavLink to="/tray"
            className={({ isActive }) => isActive ? "bg-neutral-800 px-3 py-1 rounded-md" : "px-3 py-1"}
            >
                Tray
            </NavLink>
        </ul>
    </div>
)}

export default Navbar;