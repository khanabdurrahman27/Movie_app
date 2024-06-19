import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Header = ({wallpaper}) => {
    console.log(wallpaper)
    const[more,setmore]=useState(false)
    function morehandler(){
        setmore(true);
    }

  return (
    <Link to={`${wallpaper.media_type}/details/${wallpaper.id}`} className='h-[50vh] w-full flex flex-col justify-end items-start text-white gap-4 pl-16 pb-16' style={{
        background:`linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.4),rgba(0,0,0,0.5)),url(https://image.tmdb.org/t/p/w500/${wallpaper.backdrop_path || wallpaper.profile_path})`,backgroundPosition:"center",backgroundSize:'center'}}>
        <h1 className='w-[40%]  text-4xl text-white font-black'>{wallpaper.name || wallpaper.title || wallpaper.original_title || wallpaper.original_name}</h1>
        <p className='w-[40%] text-1xl'>
        {more
            ? wallpaper.overview
            : `${wallpaper.overview.slice(0, 100)}...`
        }
        {!more && (
            <Link  to={`/details/`} onClick={morehandler} className='text-purple-400'>
            more
            </Link>
        )}
        </p>

        <p>
            <i className="text-2xl ri-calendar-fill mr-4"></i> 
            {wallpaper.release_date?wallpaper.release_date:"Not available"}
            <i className="text-2xl ml-4 mr-4 ri-movie-2-line"></i> 
            {wallpaper.media_type.toUpperCase()}
        </p>
        <Link  to={``} className='ml-4 bg-purple-400 w-[10%] flex items-center justify-center rounded-lg'>Watch trailer</Link>
    </Link>
  )
}

export default Header
