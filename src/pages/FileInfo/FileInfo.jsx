import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { handlePreview } from '../../utils/handlePreview'
import { handleDownload } from '../../utils/handleDownload'
import axios from 'axios'
import NavBar from '../../components/NavBar/NavBar'
import Header from '../../components/Header/Header'
import './FileInfo.scss'

const FileInfo = () => {
    const { id } = useParams()
    const [document, setDocument] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        
        const fetchDocument = async () => {
            try {
              const response = await axios.get(`https://sharespace-develop.uc.r.appspot.com/documents/${id}`);
              setDocument(response.data);
              setLoading(false)
              //console.log(document)
            } catch (err) {
              setError('Failed to fetch document info refresh the page');
              setLoading(false);
            }
          };

          fetchDocument();
    }, [id]);
    return (
        <div className='fileinfo'>
          <Header />
          <NavBar />
          {loading ? (
            <p className='fileinfo_loading'>loading<span>...</span></p>
          ) : error ? (
            <p className="fileinfo_error">{error}</p>
          ) : (
            <main className='fileinfo_main'>
              <div className="fileinfo_main__preview" style={{backgroundImage : `url('${document.previewImageUrl}')`}}>
                
              </div>
              <div className="fileinfo_main__details">
                <div className="fileinfo_main__details___title">{document.title}</div>
                <div className="fileinfo_main__details___type">{document.type}</div>
                <div className="fileinfo_main__details___semnfield">s{document.semester}{`\u00A0 ${document.subfield}`}</div>
                <div className="fileinfo_main__details___description"><p>description :</p>{document.description}</div>
              </div>
              <div className="fileinfo_main__action">
                <button className='preview' onClick={() => handlePreview(id)}>preview</button>
                <button className="download" onClick={() => handleDownload(id)}>download</button>
              </div>
            </main>
          )}
        </div>
      );
}
export default FileInfo