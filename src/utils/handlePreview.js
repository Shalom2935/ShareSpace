import axios from "axios";

export const handlePreview = async (id) => {
    try {
      const response = await axios({
        url: `http://localhost:5000/preview/${id}`,
        method: 'GET',
        responseType: 'blob',
      });
  
      const url = window.URL.createObjectURL(response.data);
      console.log(response)
      const newWindow = window.open(url, '_blank'); 
      
      newWindow.onload = () => {
        window.URL.revokeObjectURL(url); 
      };
    } catch (error) {
      console.error('Error previewing the file:', error);
    }
  };