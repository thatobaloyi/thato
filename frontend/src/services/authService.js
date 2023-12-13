import axios from 'axios'


const API_URL = 'http://localhost:5000/projects'

const getProjects = async () => {
    try {
        const response = await axios.get(API_URL)
        return response.data
    } catch (error) {
        
        throw error
    }
}

const authService = {
    getProjects,
}

export default authService