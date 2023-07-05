import { BiCameraMovie } from 'react-icons/bi';
import { ListMovie, ItemMovie, ItemLink, TitleMovie } from './ListPopularMovie.styled';
import { routesData } from 'routes';
import { useLocation } from 'react-router-dom';
import { Suspense } from "react";


export const ListPopularMovie = ({ arrayPopularMovies }) => {
    const location = useLocation();

    return (
    <ListMovie>
        {arrayPopularMovies !== [] && (arrayPopularMovies.map(({id, title}) => {
            return (
                <ItemMovie key={id}>
                    <ItemLink to={`${routesData.MOVIES}/${id}`} state={{from: location}}>
                        <BiCameraMovie />
                        <TitleMovie>{title}</TitleMovie>
                    </ItemLink>
                    </ItemMovie>)
        }))}
    </ListMovie>)

}