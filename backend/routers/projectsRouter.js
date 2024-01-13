const express = require('express')
const router = express.Router()
const { getProjects } = require('../controllers/projectsController')

router.get('/api/', getProjects)


module.exports = router
