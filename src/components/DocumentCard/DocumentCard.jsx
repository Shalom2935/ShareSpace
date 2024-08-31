import React from 'react'
import axios from 'axios';
import PropTypes from 'prop-types'
import './DocumentCard.scss'

function DocumentCard({ id, title, fileType }) {
  const fileTypeMapping = {
    'application/pdf': 'pdf',
    'application/msword': 'word',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'word',
};

const fileTypeKey = fileTypeMapping[fileType]

// const getFileName = async () => {
//   try{
//     const response = await axios.get('http://localhost:5000/filename')
//     console.log(response.data)
//     console.log('yes')
//     return response.data
//   } catch(error){
//     console.error('Error while fetching the file name')
//   }
// }

const handleDownload = async () => {
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
};
  return (
    <div className="card">
      <div className="card_intro">
        <div className={`card_intro__icon ${fileTypeKey}`}></div>
        <div className="card_intro__title">{title}</div>
      </div>
      <div className="card_content"></div>
      <div className="card_action">
        <button className="card_action__view">
          <svg width="25" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.2683 6.19667C15.8456 3.11278 12.6389 0 8.66667 0C4.69444 0 1.48778 3.11278 0.065 6.19667C0.022153 6.29205 0 6.39543 0 6.5C0 6.60457 0.022153 6.70795 0.065 6.80333C1.48778 9.88722 4.69444 13 8.66667 13C12.6389 13 15.8456 9.88722 17.2683 6.80333C17.3112 6.70795 17.3333 6.60457 17.3333 6.5C17.3333 6.39543 17.3112 6.29205 17.2683 6.19667ZM8.66667 10.1111C7.95246 10.1111 7.25429 9.89932 6.66044 9.50253C6.0666 9.10574 5.60375 8.54176 5.33044 7.88191C5.05712 7.22207 4.98561 6.49599 5.12494 5.79551C5.26428 5.09502 5.6082 4.45158 6.11323 3.94656C6.61825 3.44154 7.26169 3.09761 7.96217 2.95828C8.66266 2.81894 9.38873 2.89045 10.0486 3.16377C10.7084 3.43708 11.2724 3.89993 11.6692 4.49377C12.066 5.08762 12.2778 5.78579 12.2778 6.5C12.2766 7.45737 11.8958 8.37521 11.2188 9.05217C10.5419 9.72914 9.62404 10.11 8.66667 10.1111Z" fill="black"/>
          <path d="M8.66667 8.66668C9.86328 8.66668 10.8333 7.69663 10.8333 6.50001C10.8333 5.30339 9.86328 4.33334 8.66667 4.33334C7.47005 4.33334 6.5 5.30339 6.5 6.50001C6.5 7.69663 7.47005 8.66668 8.66667 8.66668Z" fill="black"/>
          </svg>
        </button>
        <button className="card_action__download" onClick={handleDownload}>
          <svg width="25" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.75 10.5C15.5511 10.5 15.3603 10.579 15.2197 10.7197C15.079 10.8603 15 11.0511 15 11.25V14.25C15 14.4489 14.921 14.6397 14.7803 14.7803C14.6397 14.921 14.4489 15 14.25 15H3.75C3.55109 15 3.36032 14.921 3.21967 14.7803C3.07902 14.6397 3 14.4489 3 14.25V11.25C3 11.0511 2.92098 10.8603 2.78033 10.7197C2.63968 10.579 2.44891 10.5 2.25 10.5C2.05109 10.5 1.86032 10.579 1.71967 10.7197C1.57902 10.8603 1.5 11.0511 1.5 11.25V14.25C1.5 14.8467 1.73705 15.419 2.15901 15.841C2.58097 16.2629 3.15326 16.5 3.75 16.5H14.25C14.8467 16.5 15.419 16.2629 15.841 15.841C16.2629 15.419 16.5 14.8467 16.5 14.25V11.25C16.5 11.0511 16.421 10.8603 16.2803 10.7197C16.1397 10.579 15.9489 10.5 15.75 10.5ZM8.4675 11.7825C8.53883 11.8508 8.62294 11.9043 8.715 11.94C8.80477 11.9797 8.90185 12.0002 9 12.0002C9.09815 12.0002 9.19522 11.9797 9.285 11.94C9.37706 11.9043 9.46117 11.8508 9.5325 11.7825L12.5325 8.7825C12.6737 8.64127 12.7531 8.44973 12.7531 8.25C12.7531 8.05027 12.6737 7.85873 12.5325 7.7175C12.3913 7.57627 12.1997 7.49693 12 7.49693C11.8003 7.49693 11.6087 7.57627 11.4675 7.7175L9.75 9.4425V2.25C9.75 2.05109 9.67098 1.86032 9.53033 1.71967C9.38968 1.57902 9.19891 1.5 9 1.5C8.80109 1.5 8.61032 1.57902 8.46967 1.71967C8.32902 1.86032 8.25 2.05109 8.25 2.25V9.4425L6.5325 7.7175C6.46257 7.64757 6.37955 7.5921 6.28819 7.55425C6.19682 7.51641 6.09889 7.49693 6 7.49693C5.90111 7.49693 5.80318 7.51641 5.71181 7.55425C5.62045 7.5921 5.53743 7.64757 5.4675 7.7175C5.39757 7.78743 5.3421 7.87045 5.30426 7.96181C5.26641 8.05318 5.24693 8.1511 5.24693 8.25C5.24693 8.34889 5.26641 8.44682 5.30426 8.53819C5.3421 8.62955 5.39757 8.71257 5.4675 8.7825L8.4675 11.7825Z" fill="black"/>
          </svg>
        </button>
      </div>  
    </div>
  )
}

DocumentCard.propTypes = {
    title : PropTypes.string.isRequired,
    fileType : PropTypes.string.isRequired
}

export default DocumentCard
