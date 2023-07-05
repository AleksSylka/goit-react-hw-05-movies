import { Link } from "react-router-dom"

export const AddInfoMovieLink = () => {

    return (
        <>
            <h4>Additional Information</h4>
            <ul>
                <li key={'Cast'}>
                    <Link to="cast">Cast</Link> 
                </li>
                <li key={'Reviews'}>
                    <Link to="reviews">Reviews</Link>
                </li>
            </ul>
            
        </>
    )
}