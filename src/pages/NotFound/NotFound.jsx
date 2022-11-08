import { useLocation } from 'react-router-dom';

import { Text } from './NotFound.styled';
import { BackLink } from 'pages/MoviesDetails/MoviesDetails.styled';

export const NotFound = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  return (
    <>
      <BackLink to={backLinkHref}>Go back</BackLink>
      <Text>NotFound</Text>
    </>
  );
};
