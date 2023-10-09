const express = require('express');
const { registreAdmin, loginAdmin } = require('../controller/AdminController');
const router = express.Router();
router.post('/signup',registreAdmin)
router.post('/login',loginAdmin)

module.exports = router;