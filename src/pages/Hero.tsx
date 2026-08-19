import { TbDna2 } from "react-icons/tb"
import footprint2 from "../assets/footprint2.png"
import { GoArrowRight } from "react-icons/go";
import { IoGridOutline } from "react-icons/io5";
import { SlotNumber } from "../components/SlotDigit";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
<section className="relative h-full overflow-hidden">
  <img
    src={footprint2}
    alt=""
    className="
      absolute
      left-1/2
      top-1/2
      -translate-x-1/2
      -translate-y-1/2
      w-full
      h-full
      opacity-20
      pointer-events-none
    "
  />
  <div
    className="relative z-10 flex min-h-screen flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8"
  >
    <p className="text-rust uppercase tracking-[0.4em] font-mono text-xs sm:text-sm md:text-base">
      Est. 230m years ago
    </p>

    <h1 className="text-bone text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold font-display tracking-widest mt-4 sm:mt-6">
      DINOCOMP
    </h1>

    <p className="text-acid uppercase tracking-[0.3em] mt-4 text-lg sm:text-xl md:text-2xl">
      Species Comparator
    </p>

    <span className="flex gap-4 text-stone mt-4 text-sm sm:text-base">_______________ <TbDna2 className="text-xl sm:text-2xl text-lime-500 mt-1 sm:mt-2"/>_______________ 
    </span>

    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 uppercase mt-6 sm:mt-8 text-sm sm:text-base md:text-2xl flex-wrap">
      <p className="text-bone">Search</p>
      <span className="text-acid hidden sm:inline">·</span>
      <p className="text-bone">Filter</p>
      <span className="text-acid hidden sm:inline">·</span>
      <p className="text-bone">Compare</p>
    </div>

    <p className="max-w-xs sm:max-w-sm md:max-w-xl text-stone mt-6 sm:mt-8 font-sans text-sm sm:text-base md:text-lg">
      Forty species. Every period, diet, and continent.
      Stacked side by side so you can see exactly how they
      measure up.
    </p>

    <div className="mt-8 sm:mt-10 md:mt-12 flex flex-col sm:flex-row gap-4 w-full sm:w-auto sm:justify-center">
      <NavLink to="/compare" className="w-full sm:w-auto">
        <button className="group flex items-center justify-center gap-4 bg-acid/80 px-6 sm:px-12 md:px-24 py-3 sm:py-4 rounded text-surface uppercase cursor-pointer font-medium hover:bg-acid hover:-translate-y-1 hover:shadow-lg duration-300 transition-all w-full">Start Comparing <GoArrowRight className="text-lg sm:text-2xl transition-transform duration-300 group-hover:translate-x-1"/> </button>
      </NavLink>
      <NavLink to="/browse" className="w-full sm:w-auto">
        <button className="group flex items-center justify-center gap-4 border border-stone px-6 sm:px-12 md:px-24 py-3 sm:py-4 rounded text-bone uppercase cursor-pointer font-medium hover:bg-surface-raised hover:-translate-y-1 hover:shadow-lg duration-300 transition-all w-full">Browse Species <IoGridOutline className="text-lg sm:text-2xl transition-transform duration-300 group-hover:rotate-180" /> </button>
      </NavLink>
    </div>
    <div className="flex flex-col sm:flex-row items-center justify-center mt-10 sm:mt-12 lg:mt-16 gap-6 sm:gap-8 md:gap-12 text-base sm:text-lg md:text-2xl font-bold text-bone uppercase flex-wrap">
      <div>
        <SlotNumber value={40} baseDelay={200} />
        <span className="text-xs sm:text-sm md:text-md font-light ml-2">species </span>
      </div>
      <span className="font-light text-2xl sm:text-3xl md:text-5xl">|</span>
      <div>
        <SlotNumber value={4} baseDelay={200} />
        <span className="text-xs sm:text-sm md:text-md font-light ml-2">periods</span>
      </div>
      <span className="font-light text-2xl sm:text-3xl md:text-5xl">|</span>
      <div>
        <SlotNumber value={7} baseDelay={200} />
        <span className="text-xs sm:text-sm md:text-md font-light ml-2">continents</span>
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero