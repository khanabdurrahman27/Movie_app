// import React from "react";
import { Link, NavLink } from "react-router-dom";
import Sidenav from "./unloaded/Sidenav";
import Topnav from "./unloaded/Topnav";
import Header from "./unloaded/Header";
import axios from '../utils/axios'
import { useEffect, useState } from "react";
import Trending from "./unloaded/Trending";
import Loader from "./Loader";
import Dropdown from "./unloaded/Dropdown";
const Home = () => {
    document.title = "Movie App"
    const [wallpaper, setWallpaper] = useState(null);
    const [trendingData, setTrendingData] = useState([]);
    const [type, setType] = useState("all");

    function category(ctg) {
        console.log(ctg);
        setType(ctg);
    }

    const getwallpaper = async () => {
        try {
            const { data } = await axios.get(`/trending/all/day`);
            let random = data.results[Math.floor(Math.random() * data.results.length)];
            setWallpaper(random);
            // settrendingData(data.results); // Uncomment this line if you want to set trendingData
        } catch (error) {
            console.log("Error:", error);
        }
    };

    const gettype = async () => {
        try {
            const { data } = await axios.get(`/trending/${type}/day`);
            let random = data.results[Math.floor(Math.random() * data.results.length)];
            setTrendingData(data.results);
        } catch (error) {
            console.log("Error:", error);
        }
    };

    useEffect(() => {
        !wallpaper && getwallpaper();
        gettype();
        // category(); // Comment or remove this line if you don't want to call category() immediately
    }, [type, wallpaper]);


    return wallpaper ? (
        <>
            <Sidenav></Sidenav>
            <div className="w-[80%] min-h-screen overflow-auto ">
                <Topnav></Topnav>
                <Header wallpaper={wallpaper}></Header>
                <div className='flex justify-between mb-3 mt-2'>
                    <h1 className='text-white pl-5 text-2xl font-semibold'>Trending</h1>
                    <Dropdown heading="Filter" options={["tv","movie","all"]} func={(e)=>setType(e.target.value)}/>
                </div>
                <Trending trend={trendingData}/>
            </div>
        </>
    ) : <Loader/>
};

export default Home;
