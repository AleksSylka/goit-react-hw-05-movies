import { AddInfoMovieLink } from "components/AddInfoMovie/AddInfoMovie";
import { MovieImg, MovieCardBox, ListGenres } from "./MovieCard.styled";
import { Route, Routes } from "react-router-dom";
import { Cast } from "components/Cast/Cast";
import { Reviews } from "components/Reviews/Reviews";
import { routesData } from "routes";
import { Outlet } from "react-router-dom"

const {MOVIES_ID} = routesData


export const MovieCard = ({id, poster_path, title, overview, vote_average, genres = []}) => {
    
    const URL = `https://image.tmdb.org/t/p/original/${poster_path}`;

    let vote = Math.round(Number(vote_average*10));

    return (
        <>
            <MovieCardBox>
                <MovieImg src={URL} alt={title} />
                <div>
                    <h2>{title}</h2>
                    <p>User Score: {vote}%</p>
                    <h3>Overviews</h3>
                    <p>{overview}</p>
                    <h3>Genres</h3>
                    <ListGenres>
                        {genres.map(({ id, name }) => { return (<li key={id}>{name}</li>)})}
                    </ListGenres>
                </div>
            </MovieCardBox>
            
        </> 
    )
}