import axios from 'axios';

export const fetchDocuments = async () => {
  try {
    const response = await axios.get('https://sharespace-develop.uc.r.appspot.com/documents');
    return response.data;
  } catch (error) {
    console.error('There was an error fetching the documents!', error);
    return [];
  }
};