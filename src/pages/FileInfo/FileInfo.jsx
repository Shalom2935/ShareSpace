import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../../components/NavBar/NavBar';
import Header from '../../components/Header/Header';
import PDFViewer from '../../components/PDFViewer/PDFViewer'; // Import du composant PDFViewer
import './FileInfo.scss';

const FileInfo = () => {
  const { id } = useParams();
  const [document, setDocument] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pdfUrl, setPdfUrl] = useState(null); // Pour stocker l'URL du PDF
  const [showPreview, setShowPreview] = useState(false); // État pour contrôler la prévisualisation

  useEffect(() => {
    const fetchDocument = async () => {
      try {
        const response = await axios.get(`https://sharespace-backend-api-242787740646.us-central1.run.app/documents/${id}`);
        setDocument(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch document info. Refresh the page.');
        setLoading(false);
      }
    };

    fetchDocument();
  }, [id]);

  const handlePreview = async () => {
    try {
      const response = await axios.get(
        `https://sharespace-backend-api-242787740646.us-central1.run.app/preview/${id}`,
        { responseType: 'blob' }
      );
      const pdfBlob = new Blob([response.data], { type: 'application/pdf' });
      const pdfUrl = URL.createObjectURL(pdfBlob); // Crée une URL pour le blob
      setPdfUrl(pdfUrl);
      setShowPreview(true);
    } catch (err) {
      console.error('Error fetching PDF:', err);
    }
  };

  const closePreview = () => {
    setShowPreview(false);
    URL.revokeObjectURL(pdfUrl); // Révoquer l'URL blob pour éviter les fuites de mémoire
    setPdfUrl(null);
  };

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
          <div className="fileinfo_main__preview" style={{backgroundImage : `url('${document.previewImageUrl}')`}}></div>
          <div className="fileinfo_main__details">
            <div className="fileinfo_main__details___title">{document.title}</div>
            <div className="fileinfo_main__details___type">{document.type}</div>
            <div className="fileinfo_main__details___semnfield">s{document.semester}{`\u00A0 ${document.subfield}`}</div>
            <div className="fileinfo_main__details___description"><p>Description :</p>{document.description}</div>
          </div>
          <div className="fileinfo_main__action">
            <button className='preview' onClick={handlePreview}>View Online</button>
            {/* Commenter le bouton de téléchargement pour éviter le téléchargement */}
            {/* <button className="download" onClick={() => handleDownload(id)}>Télécharger</button> */}
          </div>
          {showPreview && pdfUrl && (
            <PDFViewer fileUrl={pdfUrl} closePreview={closePreview} /> 
          )}
        </main>
      )}
    </div>
  );
};

export default FileInfo;
