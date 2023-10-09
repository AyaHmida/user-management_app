// UserRoute.js
const express = require('express');
const { getUsers, createUser, getUser, updateUser, deleteUser, viewUser } = require('../controller/UsersController');
const router = express.Router();

router.get('/users', getUsers); 
router.post('/create',createUser);
router.get('/getuser/:id',getUser);
router.put('/update/:id',updateUser)
router.delete('/delete/:id',deleteUser)
router.get('/view/:id',viewUser)
module.exports = router;
