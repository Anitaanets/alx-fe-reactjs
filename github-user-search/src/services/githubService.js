import axios from 'axios';
export const fetchUserData = async (username, location = '', minRepos = '') => {
  const query = [
    username && `user:${username}`,
    location && `location:${location}`,
    minRepos && `repos:>${minRepos}`
  ]
    .filter(Boolean)
    .join('+');

  const response = await axios.get (`https://api.github.com/search/users?q=${query}`);

  if (!response.ok) {
    throw new Error('Looks like we cant find the user');
  }

  const data = await response.json();
  return data.items; // Return array of users
};
