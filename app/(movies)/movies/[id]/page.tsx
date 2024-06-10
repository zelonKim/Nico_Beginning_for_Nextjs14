
/*
export default async function MovieDetail({params: {id}}: {params: {id: string}}) {
    console.log("start fetching");
    const movie = await getMovie(id);
    const videos = await getVideos(id);
    console.log("end fetching");
    return <h1>{movie.title}</h1>;
}

// the data is fetched sequentially

    // start fetching
    // Fetching movies: 1717995937719
    // Fetching videos: 1717995940727
    // end fetching
*/



//////////////////////////


/* 
export default async function MovieDetail({params: {id}}: {params: {id: string}}) {
    console.log("start fetching");
    const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)])
    console.log("end fetching");
    return <h1>{movie.title}</h1>;
}

// the data is fetched parallelly

    // start fetching
    // Fetching movies: 1717996479898
    // Fetching videos: 1717996479898
    // end fetching 
*/





//----------------------------------------



import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";


export async function generateMetadata({params: {id}}: {params: {id: string}}) {
    const movie = await getMovie(id)
    return {
        title: movie.title,
    }
}

export default async function MovieDetail({params: {id}}: {params: {id: string}}) {
    return (
        <div>
            <Suspense fallback={<h1>Loading movie info...</h1>}>
                <MovieInfo id={id} />
            </Suspense>

            <Suspense fallback={<h1>Loading movie videos...</h1>}>
                <MovieVideos id={id} />
            </Suspense>
        </div>
    )
}

// Fetching movies: 1718003156164
// Fetching videos: 1718003156165
