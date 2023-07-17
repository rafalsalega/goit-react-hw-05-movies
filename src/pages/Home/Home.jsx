import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { key } from '../../asset/pass';
import { Loader } from 'components/Loader/Loader';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchTrendingMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/trending/movie/day?api_key=${key}`
        );
        const data = await response.json();
        setTrendingMovies(data.results);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching trending movies:', error);
        setTrendingMovies([]);
        setIsLoading(false);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <div>
      <h1>Trending Movies Today</h1>
      {isLoading && <Loader />}
      <ul>
        {trendingMovies.map(movie => (
          <li key={movie.id}>
            <Link
              to={`/goit-react-hw-05-movies/movies/${movie.id}`}
              state={{ from: location }}
            >
              {movie.title || movie.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;