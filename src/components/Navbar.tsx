import { TbDna2 } from "react-icons/tb";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();
    const isHome = location.pathname === '/';

  return (

        <div
      className={
        isHome
          ? `
            absolute
            top-0
            left-0
            right-0
            z-50
            flex
            justify-between
            items-center
            px-10
            py-8
            text-white
            bg-black/20
            border-b
            border-stone/20
          `
          : `
            flex
            justify-between
            items-center
            px-8
            py-4
            text-white
            bg-neutral-900
            border-b
            border-neutral-800
          `
      }
    >
        <TbDna2 className="text-4xl text-lime-500 pt-1 "/>
        <NavLink to="/" className="text-3xl font-bold font-display">Dino <span className="text-lime-500">Comp</span></NavLink>
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
        </ul>
        </div>
)}

export default Navbar;