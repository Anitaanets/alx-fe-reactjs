import { useState } from 'react';
import { fetchUserData } from '../services/githubService';

function Search() {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [status, setStatus] = useState(''); // 'loading', 'error', 'success', 'empty'

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!username.trim()) {
      setStatus('empty'); // Show empty field error
      return;
    }

    setStatus('loading'); // Show loading message
    setUser(null); // Clear previous data

    try {
      const data = await fetchUserData(username);
      setUser(data);
      setStatus('success'); // Show user data on success
    } catch (error) {
      console.error('Error fetching user data:', error);
      setStatus('error'); // Show error message
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

      {/* Conditional Rendering for Loading and Error Messages */}
      {status === 'loading' && <p className="text-blue-500">Loading...</p>}
      {status === 'error' && (
        <p className="text-red-500">Looks like we can't find the user</p>
      )}
      {status === 'empty' && (
        <p className="text-yellow-500">Please enter a GitHub username</p>
      )}

      {/* User Data Display */}
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
