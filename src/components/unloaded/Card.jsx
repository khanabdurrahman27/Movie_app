import React from 'react'
import { Link } from 'react-router-dom'
const Card = ({ data ,title}) => {
  return (
    <div className='flex flex-wrap gap-4 w-full bg-[#1F1E24]'>
      {
        data.map((d, i) => (
          <Link to={`/${d.media_type || title}/details/${d.id}`} key={i} className='relative  w-[25vh] mr-[5%] mb-[5%]  bg-[#1F1E24]'>
            <img className='h-[40vh] object-cover' src={`https://image.tmdb.org/t/p/w500/${d.profile_path || d.backdrop_path || d.poster_path}`} alt="" />
            <h1 className='text-2xl text-zinc-200 font-semibold'>{d.name || d.title || d.original_title || d.original_name}</h1>
            {d.average_vote && <div className='text-sm absolute bottom-[30%] right-[-10%] text-white h-[5vh] w-[5vh] bg-yellow-600 rounded-full flex items-center justify-center'>
              {(d.vote_average*10).toFixed() } <sup>%</sup>
            </div>}
            {d.popularity && <div className='text-sm absolute bottom-[30%] right-[-10%] text-white h-[5vh] w-[5vh] bg-yellow-600 rounded-full flex items-center justify-center'>
              {(d.popularity).toFixed() }
            </div>}
          </Link>
        ))
      }

    </div>
  )
}

export default Card
