import { useState } from 'react';
import { fetchUserData } from '../services/githubService';

function Search() {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors
    setUser(null); // Clear previous user data

    try {
      const data = await fetchUserData(username);
      setUser(data);
    } catch {
      setError("Looks like we can't find the user");
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch} className="flex gap-2 mb-4">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          className="p-2 border rounded w-full"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Search
        </button>
      </form>

      {error && <p className="text-red-500">{error}</p>}

      {user && (
        <div className="mt-4 p-4 border rounded">
          <h2 className="text-xl font-bold">{user.login}</h2>
          <img
            src={user.avatar_url}
            alt={user.login}
            className="w-24 h-24 rounded-full"
          />
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-2 text-blue-500"
          >
            View Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default Search;
