import React from 'react'
import Header from '../../components/Header/Header'
import NavBar from '../../components/NavBar/NavBar'
import DocumentGrid from '../../components/DocumentGrid/DocumentGrid'
import './Home.scss'

function Home() {
  return (
    <div className='home'>
      <Header />
      <NavBar />
      <main className="home_main">
        <h1>Ressources available in every subject</h1>
        <hr />
        <DocumentGrid />
      </main>
    </div>
  )
}

export default Home