import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const AddInfoMovieLink = () => {

    const location = useLocation();
    console.log(location)
    
    return (
        <>
            <h4>Additional Information</h4>
            <ul>
                <li key={'Cast'}>
                    <Link to="cast" state={location.state}>Cast</Link> 
                </li>
                <li key={'Reviews'}>
                    <Link to="reviews" state={location.state}>Reviews</Link>
                </li>
            </ul>
            
        </>
    )
}