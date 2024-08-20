import React from 'react'
import Header from '../../components/Header/Header'
import NavBar from '../../components/NavBar/NavBar'
import ContactForm from '../../components/ContactForm/ContactForm'
import './Contact.scss'
import ContactFail from '../../components/ContactFail/ContactFail'
import ContactSuccess from '../../components/ContactSuccess/ContactSuccess'

function Contact() {
  return (
    <div className='contact'>
      <Header />
      <NavBar />
      <main className='contact_main'>
        <h1>Contact Us</h1>
        <hr />
        <ContactForm />
        <ContactFail />
        <ContactSuccess />
      </main>
    </div>
  )
}

export default Contact