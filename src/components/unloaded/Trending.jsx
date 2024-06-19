import React, { useState } from 'react'
import Card from "./Card"
import noimage from '/noimage.jpg'
import { Link } from 'react-router-dom'
import Dropdown from './Dropdown'
const Trending = ({ trend }) => {
  const [more, setmore] = useState(false)
  function morehandler() {
    setmore(true);
  }

  return (
      <div className='w-[100%] flex overflow-y-hidden'>
        {trend.map((s, i) => (
          <Link to={`${s.media_type}/details/${s.id}`} key={i} className='min-w-[15%] bg-zinc-900 mr-5 mb-5'>
            <img src={s.backdrop_path || s.profile_path ? `https://image.tmdb.org/t/p/w500/${s.backdrop_path || s.profile_path}` : noimage} alt={s.name || s.title || s.original_title || s.original_name} className="w-full h-[45%] object-cover rounded" />
            <div className="p-3 text-white">
              <h1 className="text-xl font-semibold">{s.name || s.title || s.original_title || s.original_name}</h1>
              <p className='h-[30%]'>
                {more
                  ? s.overview
                  : `${s.overview.slice(0, 30)}...`
                }
                {!more && (
                  <Link to={`/details/`} onClick={morehandler} className='text-purple-400'>
                    more
                  </Link>
                )}
              </p>
            </div>
          </Link>
        ))}
      </div>
  )
}

export default Trending
