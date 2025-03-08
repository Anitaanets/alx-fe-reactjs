import ProtectedRoute from './components/ProtectedRoute';

function App() {
    const isAuthenticated = true; // Simulated authentication

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />

                {/* Protected Route */}
                <Route 
                    path="/profile/*" 
                    element={
                        <ProtectedRoute isAuthenticated={isAuthenticated}>
                            <Profile />
                        </ProtectedRoute>
                    } 
                />

                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}
