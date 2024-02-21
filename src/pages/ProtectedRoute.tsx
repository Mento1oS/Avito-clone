import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoute = ({
  redirectPath = '/signin',
  isAllowed,
}: {
  redirectPath: string;
  isAllowed: boolean;
}) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace={true} />;
  }
  return <Outlet />;
};
