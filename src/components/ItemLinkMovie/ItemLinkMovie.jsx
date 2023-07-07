import { ItemLink, ItemMovie, TitleMovie } from "components/ListPopularMovie/ListPopularMovie.styled"
import { BiCameraMovie } from "react-icons/bi";
import { routesData } from "routes";
import { useLocation } from "react-router-dom";


export const ItemLinkMovie = ({ id, title }) => {

    const location = useLocation();

    return (
        <ItemMovie>
            <ItemLink to={`${routesData.MOVIES}/${id}`} state={{ from: location }}>
                <BiCameraMovie />
                <TitleMovie>{title}</TitleMovie>
            </ItemLink>
        </ItemMovie>
    )
}
