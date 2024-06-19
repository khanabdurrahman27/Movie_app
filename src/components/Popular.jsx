import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react'
import Topnav from './unloaded/Topnav'
import Dropdown from './unloaded/Dropdown'
import axios from '../utils/axios'
import Card from './unloaded/Card'
import Loader from './Loader'
import InfiniteScroll from 'react-infinite-scroll-component';
const Populars = () => {
    const navigate = useNavigate()
  const[category,setcategory]=useState("movie")
  const [popular, setpopular] = useState([]);
  const[page,setpage]=useState(1)
  const[hasMore,sethasMore]=useState(true);
  const getData=async()=>{
    try {
      const { data } = await axios.get(`/${category}/popular?page=${page}`);
      if(data.results.length>0){
        setpage(page+1);
        setpopular((prevState)=>[...prevState, ...data.results]);
      }
      else{
        sethasMore(false)
      }

      // settrendingData(data.results); // Uncomment this line if you want to set trendingData
  } catch (error) {
      console.log("Error:", error);
  }
  }
  const refreshhandler=()=>{
    if(popular.length===0){
      getData()
    }else{
      setpage(1)
      setpopular([])
      getData()
    }
  }
  useEffect(()=>{
    refreshhandler()
  },[category])
  return (
    <div className='p-[3%] w-screen min-h-screen '>
      <div className="w-full flex items-center justify-between">
        
        <h1 onClick={() => { navigate(-1) }} className='w-[20%] text-1xl font-semibold text-zinc-400'> <i className="mr-4 hover:text-purple-400 text-red-200 ri-arrow-left-line"></i> Trending {category}</h1>
        <Topnav />
        <Dropdown heading="Category" options={["tv", "movie", "person"]} func={(e)=>setcategory(e.target.value)}></Dropdown>

      </div>
      <InfiniteScroll  dataLength={popular.length} next={getData} hasMore={true} loader={<Loader/>}>
        <Card data={popular} title="popular"></Card>:<Loader/>
      </InfiniteScroll>

    </div>

  )
}

export default Populars
