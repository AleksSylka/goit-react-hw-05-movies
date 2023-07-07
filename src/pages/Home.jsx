import { getPopularMovies } from "service/serviceAPI";
import { useState, useEffect } from "react";
import { TailSpin } from 'react-loader-spinner';
import { Container } from "components/Layout.styled";
import { ListPopularMovie } from "components/ListPopularMovie/ListPopularMovie";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const HomePage = () => {

    const [arrayPopularMovies, setArrayPopularMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        const getArrayPopularMovies = async () => {
        try {
            const {data: {results}} = await getPopularMovies();
            setArrayPopularMovies(results)
        } catch (err) {
            setError(err.message);
            toast(error);
        } finally {
            setIsLoading(false);
        }
    }
        getArrayPopularMovies()
    }, [error])

    return (
        <Container>
            <div>
                <TailSpin
                    height="80"
                    width="80"
                    color="#db2a5f"
                    ariaLabel="tail-spin-loading"
                    radius="1"
                    wrapperStyle={{marginLeft: "auto", marginRight: "auto"}}
                    visible={isLoading}
                />
            </div>
            <ListPopularMovie arrayPopularMovies={arrayPopularMovies} />
            <ToastContainer />
        </Container>
    )
}

export default HomePage;