import axios from 'axios';

const BASE_URL = 'https://api.github.com';

// Fetch user data by username
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    throw new Error('User not found');
  }
};

// Advanced search for users with filters (location & repo count)
export const fetchAdvancedSearchResults = async (username, location, minRepos) => {
  try {
    const query = `q=${username}+location:${location}+repos:>${minRepos}`;
    const response = await axios.get(`${BASE_URL}/search/users?${query}`);
    return response.data.items; // GitHub Search API returns results in `.items`
  } catch (error) {
    throw new Error('Error fetching advanced search results');
  }
};
