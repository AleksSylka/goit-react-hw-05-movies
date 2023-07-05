import { useParams } from "react-router-dom";
import { getReviewsById } from "service/serviceAPI";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

export const Reviews = () => {
    const { movieId } = useParams();
    const [arrayReviews, setArrayReviews] = useState([]);
    const [error, setError] = useState(null);

    
    useEffect(() => {
        getObjInfoMovie();
    }, [movieId])

    const getObjInfoMovie = async () => {
        try {
            const {data: {results}} = await getReviewsById(movieId);
            setArrayReviews(results);
        } catch (err) {
            setError(err.message);
            toast(error);
        }
    }
    
    return (<>
            <ul>
                {arrayReviews.map(({ id, author, content }) => {
                    return (
                        <li key={id}>
                            <h4>Author: {author}</h4>
                            <p>{content}</p>
                        </li>
                )
                })}
            </ul>
            {(arrayReviews.length === 0) && <p>No Reviews</p>}    
            <ToastContainer/>
        </>)
}