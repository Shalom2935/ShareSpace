import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import DocumentCard from '../DocumentCard/DocumentCard'


const DocumentGrid = () => {
    const [documents, setDocuments] = useState([])

    useEffect(() => {
        axios.get('https://66d8dd5c-b863-46a9-a7f4-25163daa6c2b.mock.pstmn.io/Test')
        .then(response => {
            setDocuments(response.data)
        })
        .catch(error => {
            console.error('There was an error fetching the documents!', error)
        })
    }, [])
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