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
    className="relative z-10 flex min-h-screen flex-col items-center justify-center text-center"
  >
    <p className="text-rust uppercase tracking-[0.4em] font-mono">
      Est. 230m years ago
    </p>

    <h1 className="text-bone text-9xl font-bold font-display tracking-widest">
      DINOCOMP
    </h1>

    <p className="text-acid uppercase tracking-[0.3em] mt-4 text-2xl">
      Species Comparator
    </p>

    <span className="flex gap-4 text-stone">_______________ <TbDna2 className="text-2xl text-lime-500 mt-2"/>_______________ 
    </span>

    <div className="flex items-center justify-center gap-6 uppercase mt-4">
      <p className="text-bone text-2xl">Search</p>
      <span className="text-acid text-2xl">·</span>
      <p className="text-bone text-2xl">Filter</p>
      <span className="text-acid text-2xl">·</span>
      <p className="text-bone text-2xl">Compare</p>
    </div>

    <p className="max-w-xl text-stone mt-4 font-sans text-lg">
      Forty species. Every period, diet, and continent.
      Stacked side by side so you can see exactly how they
      measure up.
    </p>

    <div className="mt-8 flex gap-4 ">
      <NavLink to="/compare">
        <button className="group flex items-center justify-center gap-4 bg-acid/80 px-24 py-4 rounded text-surface uppercase cursor-pointer font-medium hover:bg-acid hover:-translate-y-1 hover:shadow-lg duration-300 transition-all">Start Comparing <GoArrowRight className="text-2xl transition-transform duration-300 group-hover:translate-x-1"/> </button>
      </NavLink>
      <NavLink to="/browse">
        <button className="group flex items-center justify-center  gap-4 border border-stone px-24 py-4 rounded text-bone uppercase cursor-pointer font-medium hover:bg-surface-raised hover:-translate-y-1 hover:shadow-lg duration-300 transition-all">Browse Species <IoGridOutline className="text-2xl transition-transform duration-300 group-hover:rotate-180" /> </button>
      </NavLink>
    </div>
    <div className="flex items-center justify-center mt-12 gap-12 text-2xl font-bold text-bone uppercase">
      <div>
        <SlotNumber value={40} baseDelay={200} />
        <span className="text-md font-light ml-2">species </span>
      </div>
      <span className="font-light text-5xl">|</span>
      <div>
        <SlotNumber value={4} baseDelay={200} />
        <span className="text-md font-light ml-2">periods</span>
      </div>
      <span className="font-light text-5xl">|</span>
      <div>
        <SlotNumber value={7} baseDelay={200} />
        <span className="text-md font-light ml-2">continents</span>
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero