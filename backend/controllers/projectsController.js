const asyncHandler = require('express-async-handler')
const axios = require('axios')

const TOKEN = process.env.GITHUB_TOKEN
const GITHUB_API_URL = process.env.GITHUB_API_URL

const getProjects = asyncHandler( async (req, res) =>{
    try {
        const response = await axios.get(GITHUB_API_URL, {
            headers: {
            Authorization: `Bearer ${TOKEN}`,
          }})

        res.status(200)
        res.json(response.data)

    } catch (error) {
        console.error(error)
        res.status(404).json({Error: "Not Found"})
    }
})


module.exports = {
    getProjects
}
