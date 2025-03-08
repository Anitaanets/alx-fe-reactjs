import { useState } from 'react';

export const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Simulate login/logout for testing
    const login = () => setIsAuthenticated(true);
    const logout = () => setIsAuthenticated(false);

    return { isAuthenticated, login, logout };
};
