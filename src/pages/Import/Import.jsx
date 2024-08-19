import React from 'react'
import Header from '../../components/Header/Header'
import NavBar from '../../components/NavBar/NavBar'
import ImportForm from '../../components/ImportForm/ImportForm'
import ImportSuccess from '../../components/ImportSuccess/ImportSuccess'
import ImportFail from '../../components/ImportFail/ImportFail'
import './Import.scss'

function Import() {
  return (
    <div className='import'>
      <Header />
      <NavBar />
      <main className='import_main'>
        <h1>Import a file</h1>
        <hr />
        <ImportForm />
        <ImportSuccess />
        <ImportFail />
      </main>
    </div>
  )
}

export default Import