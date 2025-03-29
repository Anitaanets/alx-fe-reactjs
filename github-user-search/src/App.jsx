import { useState, useEffect } from 'react';
import { fetchGitHubUser } from './services/githubService';

function App() {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState('');

  const handleSearch = async () => {
    try {
      const data = await fetchGitHubUser(username);
      setUser(data);
    } catch (error) {
      alert('User not found');
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">GitHub User Search</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub username"
        className="p-2 border rounded"
      />
      <button
        onClick={handleSearch}
        className="ml-2 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Search
      </button>

      {user && (
        <div className="mt-4 p-4 border rounded">
          <h2 className="text-xl font-bold">{user.login}</h2>
          <img src={user.avatar_url} alt={user.login} className="w-24 h-24 rounded-full" />
          <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="block mt-2 text-blue-500">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
