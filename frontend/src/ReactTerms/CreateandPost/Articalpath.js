// Frontend - Axios POST request
import axios from 'axios';

const createArticle = async (title, article, name) => {
  try {
    const response = await axios.post('http://localhost:3000/articles', {
      title,
      article,
      name,
    });
    console.log(response.data); // Response from the backend
  } catch (error) {
    throw error;
  }
};

export default createArticle;
