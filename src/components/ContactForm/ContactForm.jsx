import React from 'react'
import './ContactForm.scss'

function ContactForm() {
  return (
    <form className='contact_form' action="" method="post">
    <div className="name"> 
      <label htmlFor="name">Name</label>
      <input type="text" name='name' placeholder='Enter your name' required />
    </div>
    <div className="mail">
      <label htmlFor="mail">Type</label>
      <input type="text" name='mail' placeholder='xyz@gmail.com' required />
    </div> 
    <div className="phone">
      <label htmlFor="phone">Phone</label>
      <input type="number" name='phone' />
    </div>
    <div className="school">
      <label htmlFor="school">School</label>
      <select name="school" id="school">
        <option value="SJP">SJP</option>
        <option value="Other">Autre</option>
      </select>
    </div>
    <div className="level">
        <label htmlFor="level&field">Level and field</label>
        <div className="level_inputs">
            <select name="level" id="level">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <select name="field" id="field">
                <option value="TC">TC</option>
                <option value="GME">GME</option>
                <option value="GIT">GIT</option>
                <option value="GP">GP</option>
                <option value="GCI">GCI</option>
                <option value="GMI">GMI</option>
            </select>
        </div>
    </div>
    <div className="message">
      <textarea name="message" id="message" placeholder='Did you encountered any issues or do you have suggestions for us? tell us!'></textarea>
    </div>
    <div className="send">
        <input className='submit' type="submit" value={'SEND'} />
        <div className="send_icon">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.323063 8.29205L3.50218 10.5134V14.2259C3.48283 14.8938 4.30544 15.2666 4.74092 14.7747L6.6571 12.7243L9.3378 14.5987C9.45877 14.6815 9.59427 14.7281 9.73459 14.7281C10.0346 14.7281 10.3153 14.521 10.4169 14.2207L14.9605 1.03787C14.9944 0.934338 15.0089 0.825592 14.9944 0.722025C14.975 0.183538 14.4186 -0.153034 13.9637 0.0696092L0.410161 6.94063C-0.0930668 7.17365 -0.146289 7.98657 0.323063 8.29205ZM10.7991 3.39382L4.93932 9.66419L2.20053 7.74838L10.7991 3.39382Z" fill="#412A23"/>
            </svg>
        </div>
    </div>
      </form>
  )
}

export default ContactForm