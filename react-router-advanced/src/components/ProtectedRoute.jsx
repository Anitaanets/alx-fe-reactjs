import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = useAuth();

    // Redirect unauthenticated users to the login page
    return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
