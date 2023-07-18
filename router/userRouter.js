const express = require('express');
const User = require('../model/user') ;
const {CreateData,getUser,getUserById,update,deleteUser} = require('../controllers/userController')



const router = express.Router();

router.post('/user', CreateData)
router.get('/getUser', getUser)
router.get('/getUser/:id', getUserById)
router.put('/users/:id', update)
router.delete('/users/:id',deleteUser )



module.exports = router





