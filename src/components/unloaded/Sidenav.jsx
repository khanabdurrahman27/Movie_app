// import React from "react";
import React from "react";
import { NavLink } from "react-router-dom";
import Trendings from "../Trendings";
const Sidenav = () => {
  return (
    <div className="w-[20%] h-full border-r-2 border-zinc-400">
      <div className="text-2xl text-zinc-400 flex gap-2 mt-4 ml-4">
        <i className="ri-tv-fill text-[#F0BB40]"></i>
        <h1>UMEDIA</h1>
      </div>
      <nav className="flex flex-col text-zinc-400 text-2xl ml-4 mt-8 gap-4">
            <h1 >News Feed</h1>
            <NavLink to="/trending" className="ml-2 hover:bg-[#40A3F0] hover:text-[#F8EFEF] rounded-lg p-2"><i className="ri-fire-fill mr-2"></i>Trending</NavLink>
            <NavLink to="/popular" className="ml-2 hover:bg-[#40A3F0] hover:text-[#F8EFEF] rounded-lg p-2"><i className="mr-2 ri-magic-fill"></i> Popular</NavLink>
            <NavLink to="/movie" className="ml-2 hover:bg-[#40A3F0] hover:text-[#F8EFEF] rounded-lg p-2"><i className="mr-2 ri-movie-2-line"></i>Movies</NavLink>
            <NavLink to="/tv" className="ml-2 hover:bg-[#40A3F0] hover:text-[#F8EFEF] rounded-lg p-2"><i className="mr-2 ri-tv-line"></i>Tv Shows</NavLink>
            <NavLink to="/people" className="ml-2 hover:bg-[#40A3F0] hover:text-[#F8EFEF] rounded-lg p-2"><i className="mr-2 ri-team-fill"></i>People</NavLink>
        </nav>
        <hr className="ml-[10%] w-[80%] h-[1px] bg-zinc-400 mt-4"/>
        <nav className="flex flex-col text-zinc-400 text-2xl ml-4 mt-8 gap-4">
            <h1 >Web Information</h1>
            <NavLink className="ml-2 hover:bg-[#40A3F0] hover:text-[#F8EFEF] rounded-lg p-2"><i className="mr-2 ri-information-2-fill"></i>About UMEDIA</NavLink>
            <NavLink className="ml-2 hover:bg-[#40A3F0] hover:text-[#F8EFEF] rounded-lg p-2"><i className="mr-2 ri-phone-fill"></i> Contact Us</NavLink>
        </nav>
    </div>
  );
};

export default Sidenav;
