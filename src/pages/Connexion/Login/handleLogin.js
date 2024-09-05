import axios from "axios"

export const handleLogin = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    try {
        const response = await axios.post('http://localhost:5000/api/auth/login', data);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}