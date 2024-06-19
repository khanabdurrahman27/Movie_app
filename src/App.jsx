import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import 'remixicon/fonts/remixicon.css'
import Loader from "./components/Loader";
import Trendings from "./components/Trendings";
import Populars from "./components/Popular";
import Movie from "./components/Movie";
import Tvshows from "./components/Tvshows";
import People from "./components/People";
import MovieDetails from "./components/MovieDetails";
import PeopleDetails from "./components/PeopleDetails";
import TvDetails from "./components/TvDetails";
function App() {
  return (
    //max width set karna baaki hai....
    <div className="bg-[#1F1E24] w-screen min-h-screen flex">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/trending" element={<Trendings/>}></Route>
        <Route path="/popular" element={<Populars/>}></Route>
        <Route path="/movie" element={<Movie/>}></Route>
        <Route path="/tv" element={<Tvshows/>}></Route>
        <Route path="/people" element={<People/>}></Route>
        <Route path="/movie/movie/details/:id" element={<MovieDetails/>} />
        <Route path="/movie/details/:id" element={<MovieDetails/>} />
        <Route path="/tv/details/:id" element={<TvDetails/>} />
        <Route path="/people/details/:id" element={<PeopleDetails/>} />
      </Routes>
    </div>
  );
}

export default App;
