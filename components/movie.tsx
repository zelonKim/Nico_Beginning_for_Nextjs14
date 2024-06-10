"use client";

import Link from "next/link";
import MovieStyles from "../styles/movie.module.css"
import { useRouter } from "next/navigation";

interface IMovieProps {
    title: string;
    id: string;
    poster_path: string;
}


export default function Movie({title, id, poster_path}: IMovieProps) {
    const router = useRouter();

    const onClick = () => {
        router.push(`/movies/${id}`)
    }

    return(
        <div className={MovieStyles.movie}>
            <img src={poster_path} alt={title} onClick={onClick} />
            <Link href={`/movies/${id}`}> {title} </Link>
        </div>
    )
}