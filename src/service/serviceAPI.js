import axios from 'axios';
const API_KEY = 'e48a8dd7c5b93f416a546ee8dce04ad4';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';


export const getPopularMovies = async () => {
    const popularMovies = await axios.get(`movie/popular?api_key=${API_KEY}`)
    return popularMovies;
};

export const getMovieById = async (id) => {
    const objInfoMovie = await axios.get(`movie/${id}?api_key=${API_KEY}`);
    return objInfoMovie;
};

export const getMoviesByQuery = async (query) => {
    const objQueryMovies = await axios.get(`search/movie?api_key=${API_KEY}&query=${query}`);
    return objQueryMovies;
};

export const getActorsById = async (id) => {
    const objCastMovies = await axios.get(`movie/${id}/credits?api_key=${API_KEY}`);
    return objCastMovies;
};

export const getReviewsById = async (id) => {
    const objCastMovies = await axios.get(`movie/${id}/reviews?api_key=${API_KEY}`);
    return objCastMovies;
};