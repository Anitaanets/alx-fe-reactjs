import axios from 'axios';

const BASE_URL = 'https://api.github.com/users/';

export const fetchGitHubUser = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}${username}`, {
      headers: {
        Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
  
};

export default fetchGitHubUser