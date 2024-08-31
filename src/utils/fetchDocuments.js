import axios from 'axios';

export const fetchDocuments = async () => {
  try {
    const response = await axios.get('http://localhost:5000/documents');
    return response.data;
  } catch (error) {
    console.error('There was an error fetching the documents!', error);
    return [];
  }
};