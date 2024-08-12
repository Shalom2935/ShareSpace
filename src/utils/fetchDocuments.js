import axios from 'axios';

export const fetchDocuments = async () => {
  try {
    const response = await axios.get('https://66d8dd5c-b863-46a9-a7f4-25163daa6c2b.mock.pstmn.io/Test');
    return response.data;
  } catch (error) {
    console.error('There was an error fetching the documents!', error);
    return [];
  }
};