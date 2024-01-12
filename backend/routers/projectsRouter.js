const express = require('express')
const router = express.Router()
const { getProjects } = require('../controllers/projectsController')

router.get('/', getProjects)


module.exports = router
