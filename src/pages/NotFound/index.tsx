import { Link } from 'react-router-dom';
import notFound from '../../assets/images/raining-money-14.gif';
import useScrollToTop from '../../hooks/useScrollToTop';
import useTitle from '../../hooks/useTitle';
import { routes } from '../../utils/config/routes';

const NotFound = () => {
  useScrollToTop();
  useTitle('Not Found');
  return (
    <div className="not-found">
      <img className="not-found__bg-video" src={notFound} alt="Not Found" />
      <div className="not-found__container">
        <span className="not-found__text not-found__text--main">404</span>
        <span className="not-found__text not-found__text--sub">Not found</span>
        <Link to={routes.homePath}>
          <span />
          <span />
          <span />
          <span />
          Back To Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
