import { useState } from 'react';
import { fetchUserData } from '../services/githubService';

function Search() {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [status, setStatus] = useState(''); // 'loading', 'error', 'success'

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!username.trim() && !location.trim() && !minRepos.trim()) {
      setStatus('empty');
      return;
    }

    setStatus('loading');
    setUsers([]);

    try {
      const data = await fetchUserData(username, location, minRepos);
      setUsers(data);
      setStatus(data.length ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch} className="grid gap-2 mb-4">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          className="p-2 border rounded w-full"
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter location"
          className="p-2 border rounded w-full"
        />
        <input
          type="number"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          placeholder="Min number of repositories"
          className="p-2 border rounded w-full"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Search
        </button>
      </form>

      {/* Conditional Messages */}
      {status === 'loading' && <p className="text-blue-500">Loading...</p>}
      {status === 'error' && <p className="text-red-500">Looks like we can't find the user</p>}
      {status === 'empty' && <p className="text-yellow-500">Please enter at least one search parameter</p>}

      {/* Display Results */}
      <div className="grid gap-4">
        {users.map((user) => (
          <div key={user.id} className="p-4 border rounded">
            <h2 className="text-xl font-bold">{user.login}</h2>
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-24 h-24 rounded-full"
            />
            <p>Location: {user.location || 'N/A'}</p>
            <p>Repositories: {user.public_repos || 'N/A'}</p>
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-2 text-blue-500"
            >
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
