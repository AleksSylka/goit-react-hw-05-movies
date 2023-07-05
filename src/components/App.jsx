import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
import { lazy } from "react";

/* import { HomePage } from 'pages/Home'; */
/* import { MoviesSearch } from 'pages/MoviesSearch'; */
/* import { MovieInfo } from 'pages/MovieInfo'; */
import { routesData } from 'routes';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';
const HomePage = lazy(() => import("../pages/Home"));
const MoviesSearch = lazy(() => import("../pages/MoviesSearch"));
const MovieInfo = lazy(()=> import("../pages/MovieInfo"))

const {HOME, MOVIES, MOVIES_ID} = routesData

export const App = () => {
  return (
    <>
        <Routes>
          <Route path={HOME} element={<Layout/>}>
            <Route index element={<HomePage/>} />
            <Route path={MOVIES} element={<MoviesSearch />} />
            <Route path={MOVIES_ID} element={<MovieInfo />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />}/>
            </Route>
          </Route>
        </Routes>
      </>
  );
};
