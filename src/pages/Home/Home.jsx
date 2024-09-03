import React, { useState, useEffect } from 'react'
import Header from '../../components/Header/Header'
import NavBar from '../../components/NavBar/NavBar'
import DocumentGrid from '../../components/DocumentGrid/DocumentGrid'
import { fetchDocuments } from '../../utils/fetchDocuments'
import { filterDocuments } from '../../utils/filterDocuments'
import './Home.scss'

const Home = () => {
  const [documents, setDocuments] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredDocuments, setFilteredDocuments] = useState([]);
  const [selectedDocument, setSelectedDocument] = useState(null);


  useEffect(() => {
    const loadDocuments = async () => {
      const allDocuments = await fetchDocuments();
      setDocuments(allDocuments);
      setFilteredDocuments(allDocuments);
    };

    loadDocuments();
  }, []);

  const handleSearch = () => {
    const filteredDocs = filterDocuments(documents, searchTerm);
    setFilteredDocuments(filteredDocs);
  }

  const handleSuggestionClick = (document) => {
    setSelectedDocument(document);
    console.log(selectedDocument);
  };

  return (
    <div className='home'>
      <Header searchTerm={searchTerm} onSearch={setSearchTerm} onSearchClick={handleSearch} disableSearch={false} onClickSuggestion={handleSuggestionClick}/>
      <NavBar />
      <main className="home_main">
        <h1>Ressources available in every subject</h1>
        <hr />
        <DocumentGrid selectedDocument={selectedDocument} documents={filteredDocuments}/>
      </main>
    </div>
  )
}

export default Home