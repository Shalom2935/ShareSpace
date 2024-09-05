import axios from "axios"

export const handleSignUp = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    try {
        const response = await axios.post('http://localhost:5000/api/auth/signup', data);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}