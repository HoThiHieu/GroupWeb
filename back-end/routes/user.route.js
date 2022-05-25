const express = require('express')
const userController = require('../controllers/user.controller')

const router = express.Router();

router.get('/', userController.getAllUser)
router.patch('/:id', userController.updateUserById)

module.exports = router
