import axios from 'axios';

export const fetchDocuments = async () => {
  try {
    const response = await axios.get('http://localhost:3001/files');
    return response.data;
  } catch (error) {
    console.error('There was an error fetching the documents!', error);
    return [];
  }
};