import { useState } from 'react';
import { fetchGitHubUser } from './services/githubService';
import SearchInput from './components/SearchInput';

function App() {
  const [user, setUser] = useState(null);

  const handleSearch = async (username) => {
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
      <SearchInput onSearch={handleSearch} />

      {user && (
        <div className="mt-4 p-4 border rounded">
          <h2 className="text-xl font-bold">{user.login}</h2>
          <img src={user.avatar_url} alt={user.login} className="w-24 h-24 rounded-full" />
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

export default App;
