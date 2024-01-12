import axios from 'axios'


const API_URL = 'https://thato-protfolio-server.vercel.app/projects'

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