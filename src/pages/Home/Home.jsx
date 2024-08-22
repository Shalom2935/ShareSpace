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


  return (
    <div className='home'>
      <Header searchTerm={searchTerm} onSearch={setSearchTerm} onSearchClick={handleSearch} />
      <NavBar />
      <main className="home_main">
        <h1>Ressources available in every subject</h1>
        <hr />
        <DocumentGrid documents={filteredDocuments}/>
      </main>
    </div>
  )
}

export default Home