import axios from "axios"

export const handleSignUp = async (formData) => {

    try {
        const response = await axios.post('https://sharespace-develop.uc.r.appspot.com/api/auth/signup', formData);
        return response.data;
    } catch (error) {
        if (error.response && error.response.data) {
            console.log(error.response.data);
            throw error.response.data;
        }
        throw new Error('Something went wrong, plese try again.');
    }
}