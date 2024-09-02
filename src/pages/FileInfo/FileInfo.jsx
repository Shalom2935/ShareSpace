import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
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
              const response = await axios.get(`/api/documents/${id}`);
              setDocument(response.data);
              setLoading(false);
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
              <div className="fileinfo_preview">
                <img src={document.previewImageUrl} alt={`${document.title} preview`} />
              </div>
              <div className="fileinfo_details">
                <div className="fileinfo_details__title">{document.title}</div>
                <div className="fileinfo_details__type">{document.type}</div>
                <div className="fileinfo_details__semnfield">{document.semester} {document.subfield}</div>
              </div>
            </main>
          )}
        </div>
      );
}
export default FileInfo