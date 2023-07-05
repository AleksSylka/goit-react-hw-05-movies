import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getActorsById } from "service/serviceAPI";
import { ToastContainer, toast } from "react-toastify";

export const Cast = () => {
    const { movieId } = useParams();
    const [arrayCast, setArrayCast] = useState([]);
    const [error, setError] = useState(null);

    
    useEffect(() => {
        const getObjInfoMovie = async () => {
        try {
            const {data: {cast}} = await getActorsById(movieId);
            setArrayCast(cast);
        } catch (err) {
            setError(err.message);
            toast(error);
        }
    }
        getObjInfoMovie();
    }, [movieId, error])

    
    
    return (
        <>
            <ul>
                {arrayCast.map(({ id, name, character, profile_path }) => {
                    const URL = `https://image.tmdb.org/t/p/original/${profile_path}`;
                    return (
                        <li key={id}>
                            {profile_path && <img src={URL} alt={name} width={'75'} />}
                            <h4>{name}</h4>
                            <p>Character: {character}</p>
                        </li>
                )
                })}
            </ul>
        <ToastContainer/>
        </>
        )
};