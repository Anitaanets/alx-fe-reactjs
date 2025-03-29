export const fetchUserData = async (username, location = '', minRepos = '') => {
  const query = [
    username && `user:${username}`,
    location && `location:${location}`,
    minRepos && `repos:>${minRepos}`
  ]
    .filter(Boolean)
    .join('+');

  const response = await fetch(`https://api.github.com/search/users?q=${query}`);

  if (!response.ok) {
    throw new Error('User not found');
  }

  const data = await response.json();
  return data.items; // Return array of users
};
