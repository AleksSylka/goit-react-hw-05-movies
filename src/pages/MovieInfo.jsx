import { getMovieById } from "service/serviceAPI";
import { useState, useEffect } from "react";
import { useParams, Outlet, useLocation } from "react-router-dom";
import { TailSpin } from 'react-loader-spinner';
import { Loader } from "components/MovieCard/MovieCard.styled";
import { MovieCard } from "components/MovieCard/MovieCard";
import { ToastContainer, toast } from "react-toastify";
import { AddInfoMovieLink } from "components/AddInfoMovie/AddInfoMovie";
import { BtnGoBack } from "components/BtnGoBack/BtnGoBack";
import { routesData } from "routes";

const MovieInfo = () => {

    const [objInfoMovie, setObjInfoMovie] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const { movieId } = useParams();
    const location = useLocation();
    console.log(location);
    const { poster_path, title, overview, vote_average, genres = [] } = objInfoMovie;

    useEffect(() => {
        setIsLoading(true);
        const getObjInfoMovie = async () => {
        try {
            const {data} = await getMovieById(movieId);
            setObjInfoMovie(data);
        } catch (err) {
            setError(err.message);
            toast(error);
        } finally {
            setIsLoading(false);
        }
    }
        getObjInfoMovie();
    }, [movieId, error]);

    const GoBackLink = location?.state?.from ?? routesData.HOME;

    return (
        <div>
            <BtnGoBack path={GoBackLink}>Go Back</BtnGoBack>
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
            {poster_path && <MovieCard
                poster_path={poster_path}
                title={title}
                overview={overview}
                vote_average={vote_average}
                genres={genres} />}
            
            <AddInfoMovieLink/>
            <Outlet/>
            <ToastContainer />
        </div>
    )
}

export default MovieInfo;