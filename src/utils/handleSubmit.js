import axios from "axios"

export const handleSubmit= (event) => {
    event.preventDefault()

    const formData = new FormData();
    formData.append('title', event.target.title.value);
    formData.append('type', event.target.type.value);
    formData.append('semester', event.target.semester.value);
    formData.append('subfield', event.target.subfield.value);
    formData.append('description', event.target.description.value);
    formData.append('file', event.target.file.files[0]);

    axios.post('http://localhost:3001/submit-form', formData)
    .then(response => {
        console.log('Success:', response.data)
    })
    .catch(error => {
        console.error('Error:', error)
    })

}