import React, { useState } from 'react'
import axios from 'axios'
import './ImportForm.scss'
import { displayFail } from '../ImportFail/displayFail'
import { displaySuccess } from '../ImportSuccess/displaySuccess'
import ImportFail from '../ImportFail/ImportFail'
import ImportSuccess from '../ImportSuccess/ImportSuccess'
import LoadingSpinner from '../LoadingSpringer/LoadingSpinner'

function ImportForm() {
  const [fileName, setFileName] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)

    const handleFileChange = (event) => {
      setFileName(event.target.files[0]?.name || '')
    }

    const handleFormSubmit = (event) => {
      event.preventDefault();
      setIsLoading(true)
  
      const formData = new FormData();
      const matricule = localStorage.getItem('matricule');
      console.log(matricule)
      formData.append('author', matricule);
      formData.append('title', event.target.title.value);
      formData.append('type', event.target.type.value);
      formData.append('semester', event.target.semester.value);
      formData.append('subfield', event.target.subfield.value);
      formData.append('description', event.target.description.value);
      formData.append('file', event.target.file.files[0]);
      
      axios.post('https://sharespace-develop.uc.r.appspot.com/upload', formData)
        .then(response => {
          setIsLoading(false)
          console.log('Success:', response.data);
          displaySuccess();
        })
        .catch(error => {
          setIsLoading(false)
          console.error('Error:', error);
          setErrorMessage(error.response?.data?.message || 'An unexpected error occurred.');
          displayFail();
        });
    };

  return (
    <div>
    <form className='import_form' action="" method="post" onSubmit={handleFormSubmit}>
    <div className="title"> 
      <label htmlFor="title">Title</label>
      <input type="text" name='title' required />
    </div>
    <div className="type">
      <label htmlFor="type">Type</label>
      <select name="type" id="type" required>
        <option value="Support de cours">Support de cours</option>
        <option value="Travaux diriges">Travaux dirigés</option>
        <option value="CC">Sujet CC</option>
        <option value="Examen">Sujet Examen</option>
        <option value="Autre">Autre</option>
      </select>
    </div> 
    <div className="semester">
      <label htmlFor="semester">Semester</label>
      <select name="semester" id="sem">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </div>
    <div className="subjectfield">
      <label htmlFor="subfield">Subject field</label>
      <select name="subfield" id="subfield">
        <option value="TC">Tronc Commun</option>
        <option value="GCI">Génie Civil</option>
        <option value="GIT">Génie Infotronique</option>
        <option value="GME">Génie Mécatronique</option>
        <option value="GP">Génie des Procédés</option>
        <option value="GMI">Génie Minier</option>
      </select>
    </div>
    <div className="description">
      <label htmlFor="description">Add a description</label>
      <textarea name="description" id="descrip"></textarea>
    </div>
    <div className="file">
        <label htmlFor="file">Upload File</label>
        <input 
          type="file" 
          name="file" 
          id="file"
          onChange={handleFileChange}
          style={{display : 'none'}}
          required 
        />
        <span>
          <button type="button" onClick={() => document.getElementById('file').click()}>
          Choose File
          </button>
          <p id="file-name">{fileName || "No file chosen"}</p>
        </span>
              </div>
    <input className='submit' type="submit" value={'SHARE'} />
  </form>
  <ImportFail errorMessage = {errorMessage} />
  <ImportSuccess />
  {isLoading && <LoadingSpinner />}
  </div>
  )
}

export default ImportForm