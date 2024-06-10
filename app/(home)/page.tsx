// Data fetching in React.js

// CSR
// doesn`t automatically cache the fetched data
// fetched the data in Client so, user can steal a look in browser (CSR is not secure)
// even if data fetching is not finished, user can see the website

/*
"use client"
import { useEffect, useState } from "react";

const URL = "https://nomad-movies.nomadcoders.workers.dev/movies"

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    const getMovies = async() => {
        const response = await fetch(URL); 
        const json = await response.json();
        setMovies(json);
        setIsLoading(false)
    }

    useEffect(()=> {
        getMovies();
    },[])

    return (
        <div>
            {isLoading ? "Loading in CSR..." : JSON.stringify(movies)}
        </div>
    )
} 
*/


//////////////////////////


// data fetching in Next.js

// SSR
// automatically caches the fetched data
// fetch the data in Server so, user can`t steal a look in browser (SSR is secure)
// after data fetching is finished, user can see the website 

/*
const URL = "https://nomad-movies.nomadcoders.workers.dev/movies"

async function getMovies() {
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    const response = await fetch(URL); 
    const json = await response.json();
    return json;
}

export default async function Home() {
    const movies = await getMovies();
    return <div>{JSON.stringify(movies)}</div>
} 
*/



//--------------------------------------------




import Link from "next/link";
import Movie from "../../components/movie";
import homeStyles from "../../styles/home.module.css"

export const metadata = {
    title: "Home"
}

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies"

async function getMovies() {
    const response = await fetch(API_URL); 
    const json = await response.json();
    return json;
}

export default async function Home() {
    const movies = await getMovies();
    return(
        <div className={homeStyles.container}>
            {movies.map((movie) => (
                <Movie
                    key={movie.id}
                    title={movie.title}
                    id={movie.id}
                    poster_path={movie.poster_path}
                />
            ))}
        </div>
    )
} 
