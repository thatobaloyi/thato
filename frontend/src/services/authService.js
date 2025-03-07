import axios from 'axios'


const API_URL = 'https://githubprojectsapi.vercel.app/api/projects'

const getProjects = async () => {
    try {
        const response = await axios.get(API_URL)
        return response.data
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}

const authService = {
    getProjects,
}

export default authService
