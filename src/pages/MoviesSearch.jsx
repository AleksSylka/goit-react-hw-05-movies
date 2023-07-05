import { Searchbar } from "components/Searchbar/Searchbar";
import { getMoviesByQuery } from "service/serviceAPI";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { useLocation, useSearchParams } from "react-router-dom";
import { ItemLink, ItemMovie, ListMovie, TitleMovie } from "../components/ListPopularMovie/ListPopularMovie.styled";
import { BiCameraMovie } from 'react-icons/bi';
import { routesData } from "routes";
import { TailSpin } from 'react-loader-spinner';
import { Loader } from "components/MovieCard/MovieCard.styled";

const MoviesSearch = () => {

    const [arrMoviesByQuery, setArrMoviesByQuery] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();

    const location = useLocation();
    
    useEffect(() => {
        const queryData = searchParams.get('query');

        if (queryData === null) return
        setIsLoading(true);
        const getObjInfoMovieByQuery = async () => {
        try {
            const {data: {results}} = await getMoviesByQuery(queryData);
            setArrMoviesByQuery(results);
        } catch (err) {
            setError(err.message);
            toast(error);
        } finally {
            setIsLoading(false);
            }
        }
        getObjInfoMovieByQuery();
    }, [searchParams, error])
    
    const handleChangeSearchParams = (query) => {
        setSearchParams({query});
    }

    return (
        <div>
            <Searchbar onSubmit={handleChangeSearchParams} />
            <Loader>
                <TailSpin
                    height="80"
                    width="80"
                    color="#db2a5f"
                    ariaLabel="tail-spin-loading"
                    radius="1"
                    visible={isLoading}
                />
            </Loader>
            <ListMovie>
                {arrMoviesByQuery.map(({title, id}) => {
                    return (
                        <ItemMovie key={id}>
                            <ItemLink to={`${routesData.MOVIES}/${id}`} state={{from: location}}>
                                <BiCameraMovie/><TitleMovie>{title}</TitleMovie>
                            </ItemLink>
                        </ItemMovie>
                        )
                })}
            </ListMovie>
            <ToastContainer />
        </div>
    )
}

export default MoviesSearch;