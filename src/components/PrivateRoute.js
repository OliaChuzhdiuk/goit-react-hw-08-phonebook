import { useSelector } from 'react-redux';
import { useLocation, Navigate } from 'react-router-dom';

export function PrivateRoute({ children }) {
  let location = useLocation();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
