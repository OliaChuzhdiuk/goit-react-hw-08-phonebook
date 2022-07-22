import { useSelector } from 'react-redux';
import { useLocation, Navigate } from 'react-router-dom';

export function PublicRoute({ children }) {
  let location = useLocation();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  if (isLoggedIn) {
    return <Navigate to="/contacts" state={{ from: location }} replace />;
  }

  return children;
}
