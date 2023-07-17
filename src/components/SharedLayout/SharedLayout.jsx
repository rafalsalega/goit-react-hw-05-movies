import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Link } from './SharedLayout.styled';
import { Loader } from 'components/Loader/Loader'; 

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
        <Link to="/goit-react-hw-05-movies/" end>
            Home
          </Link>
          <Link to="/goit-react-hw-05-movies/movies">Movies</Link>
        </nav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};