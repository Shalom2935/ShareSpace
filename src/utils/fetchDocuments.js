import axios from 'axios';

export const fetchDocuments = async () => {
  try {
    const response = await axios.get('https://sharespace-backend-api-242787740646.us-central1.run.app/documents');
    return response.data;
  } catch (error) {
    console.error('There was an error fetching the documents!', error);
    return [];
  }
};