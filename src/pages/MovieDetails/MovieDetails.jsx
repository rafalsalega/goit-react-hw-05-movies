import { Suspense } from 'react';
import React, { useState, useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { BackLink } from '../../components/BackLink/BackLink';
import { key } from '../../asset/pass';
import { Loader } from 'components/Loader/Loader'; 

function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const location = useLocation();
  const backLinkHref = location.state?.from || '/';
  const movieId = useParams().movieId;

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&language=en-US`
        );
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        setError(error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  const userScoreCount = () => {
    if (movie.vote_average) return movie.vote_average.toFixed(1) * 10;
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!movie) {
    return <Loader />;
  }

  return (
    <div>
      <BackLink to={backLinkHref}>Go Back</BackLink>
      <h1>{movie.title}</h1>
      <b>User score:</b> {userScoreCount()}%<h3>Overview:</h3>
      <p>{movie.overview}</p>
      <p>
        <b>Release date:</b> {movie.release_date}
      </p>
      <p>
        <b>Runtime:</b> {movie.runtime} minutes
      </p>
      <p>
      <b>Genres:</b> {Array.isArray(movie.genres) && movie.genres.map(genre => genre.name).join(', ')}
      </p>
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : 'https://poster.keepcalmandposters.com/3253015.jpg'
        }
        alt={movie.title}
        width="500"
      />
      <ul>
        <li>
        <Link
            to={`/goit-react-hw-05-movies/movies/${movieId}/cast`}
            state={{ from: backLinkHref }}
          >
            View Cast
          </Link>
        </li>
        <li>
          <Link
          to={`/goit-react-hw-05-movies/movies/${movieId}/reviews`}
            state={{ from: backLinkHref }}
          >
            View Reviews
          </Link>
        </li>
        <li>
          <Link
            to={`/goit-react-hw-05-movies/movies/${movieId}/watch/providers`}
            state={{ from: backLinkHref }}
          >
            View Providers
          </Link>
        </li>
      </ul>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default MovieDetails;