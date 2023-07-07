import { ListMovie } from './ListPopularMovie.styled';
import { ItemLinkMovie } from 'components/ItemLinkMovie/ItemLinkMovie';

export const ListPopularMovie = ({ arrayPopularMovies }) => {

    return (
    <ListMovie>
        {arrayPopularMovies !== [] && (arrayPopularMovies.map(({id, title}) => {
            return (<ItemLinkMovie key={id} id={id} title={title} />)
        }))}
    </ListMovie>)
}
