import React from 'react'
import DocumentCard from '../DocumentCard/DocumentCard'
import './DocumentGrid.scss'


const DocumentGrid = ({ selectedDocument, documents }) => {
    
    const filteredDocuments = selectedDocument
    ? (console.log(true), documents.filter(doc => doc._id === selectedDocument._id))
    : documents;

    return (
        <div className='grid'>
            {filteredDocuments.map(doc => (
                <DocumentCard 
                    key={doc._id} 
                    title={doc.title} 
                    fileType={doc.fileType}
                    id = {doc._id}
                    image = {doc.previewImageUrl}
                />
            ))}
        </div>
      );
}


export default DocumentGrid