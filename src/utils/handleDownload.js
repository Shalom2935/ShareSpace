import axios from "axios";

export const handleDownload = async (id) => {
    try {
  
      const response = await axios({
        url: `http://localhost:5000/download/${id}`,
        method: 'GET',
        responseType: 'blob',
    });
    
    const contentDisposition = response.headers['content-disposition'];
    
    if (contentDisposition) {
        const fileName = contentDisposition.split('filename=')[1].replace(/"/g, '');
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
    } else {
        console.error('Content-Disposition header not found');
    }
    
    } catch (error) {
      console.error('Error downloading the file:', error);
    }
  }