import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { key } from '../../asset/pass';
import { Loader } from 'components/Loader/Loader';

const Providers = () => {
  const [providers, setProviders] = useState([]);
  const { movieId } = useParams();
  const [countries, setCountries] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchProviders = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/watch/providers?api_key=${key}`
        );
        const data = await response.json();
        setProviders(data.results.PL);
        setCountries(data.results);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.error('Error fetching providers:', error);
      }
    };

    fetchProviders();
  }, [movieId]);

  const otherCountries =
    countries && Object.keys(countries).filter(country => country !== 'PL');

  const Switch = () => {
    setIsOpen(isOpen => !isOpen);
  };

  return (
    <div>
      {isLoading && <Loader />}
      <h2>Watch Providers</h2>
      {!providers || providers.length === 0 || !providers.flatrate ? (
        <p>No providers available for this movie in Poland.</p>
      ) : (
        <>
          <p>Available providers for this movie in Poland:</p>
          <ul>
            {providers.flatrate.map(provider => (
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
        </>
      )}
      {otherCountries.length > 0 && (
        <>
          <p>
            Is available in the following countries: {otherCountries.join(', ')}
          </p>
          <button onClick={Switch}>Show more</button>
        </>
      )}
      {isOpen && otherCountries.length > 0 && (
        <div>
          {Object.keys(countries).length === 0 && (
            <p>No providers available for this movie.</p>
          )}
          {Object.keys(countries).map(countryCode => {
            const country = countries[countryCode];
            if (!country.flatrate) {
              return <p>{countryCode} buy or rent only</p>;
            }
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
      )}
    </div>
  );
};

export default Providers;