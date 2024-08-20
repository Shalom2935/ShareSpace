import axios from "axios"
import { displaySuccess } from '../ContactSuccess/displaySuccess';
import { displayFail } from "../ContactFail/displayFail";

export const handleSubmitContact= (event) => {
    event.preventDefault()

    const formData = {
        name: event.target.name.value,
        mail: event.target.mail.value,
        phone: event.target.phone.value,
        school: event.target.school.value,
        level: event.target.level.value,
        field: event.target.field.value,
        message: event.target.message.value
    }

    axios.post('http://localhost:3001/submit-contact-form', formData)
    .then(response => {
        console.log('Success:', response.data)
        displaySuccess()
    })
    .catch(error => {
        console.error('Error:', error)
        displayFail()
    })

}
