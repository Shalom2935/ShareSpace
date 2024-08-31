import React from 'react'
import DocumentCard from '../DocumentCard/DocumentCard'
import './DocumentGrid.scss'


const DocumentGrid = ({ documents, onSearchClick }) => {

    return (
        <div className='grid'>
            {documents.map(doc => (
                <DocumentCard 
                    key={doc._id} 
                    title={doc.title} 
                    fileType={doc.fileType}
                    id = {doc._id}
                />
            ))}
        </div>
      );
}


export default DocumentGrid