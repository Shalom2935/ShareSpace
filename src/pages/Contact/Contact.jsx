import React from 'react'
import Header from '../../components/Header/Header'
import NavBar from '../../components/NavBar/NavBar'
import ContactForm from '../../components/ContactForm/ContactForm'
import './Contact.scss'

function Contact() {
  return (
    <div className='contact'>
      <Header />
      <NavBar />
      <main className='contact_main'>
        <h1>Contact Us</h1>
        <hr />
        <ContactForm />
      </main>
    </div>
  )
}

export default Contact