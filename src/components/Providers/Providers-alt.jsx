import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { key } from '../../asset/pass';

const Providers = () => {
  const [providers, setProviders] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    const fetchProviders = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/watch/providers?api_key=${key}`
        );
        const data = await response.json();
        setProviders(data.results);
      } catch (error) {
        console.error('Error fetching providers:', error);
      }
    };

    fetchProviders();
  }, [movieId]);

  return (
    <div>
      <h2>Watch Providers</h2>
      {Object.keys(providers).length === 0 && (
        <p>No providers available for this movie.</p>
      )}
      {Object.keys(providers).map(countryCode => {
        const country = providers[countryCode];
        return (
          <div key={countryCode}>
            <h3>{countryCode}</h3>
            {country.flatrate ? (
              <ul>
                {country.flatrate.map(provider => (
                  <li key={provider.provider_id}>
                    <img
                      src={`https://image.tmdb.org/t/p/original${provider.logo_path}`}
                      alt={`${provider.provider_name} logo`}
                      height="100"
                    />
                    <p>Provider: {provider.provider_name}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No providers available in this country.</p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Providers;