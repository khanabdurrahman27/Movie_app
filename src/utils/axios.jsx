import axios from "axios";
import React from "react";
const instance =axios.create({
    baseURL:"https://api.themoviedb.org/3",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNWFlMTIxM2UwM2NhOWNiYjI1ZDFlNmEzYjRjNTRmMCIsInN1YiI6IjY1ZTFjZjVlNmM0NDljMDE4NmZhODI5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AkP_yZpzjofbsgBdUirTvsyvVHSprnDyZVG5GV1pquA'
      }
})
export default instance