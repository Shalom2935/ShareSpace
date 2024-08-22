import React from 'react'
import DocumentCard from '../DocumentCard/DocumentCard'
import './DocumentGrid.scss'


const DocumentGrid = ({ documents, onSearchClick }) => {

    return (
        <div className='grid'>
            {documents.map(doc => (
                <DocumentCard 
                    key={doc.id} 
                    title={doc.title} 
                    type={doc.type}
                />
            ))}
        </div>
      );
}


export default DocumentGrid