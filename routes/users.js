import express from 'express';
const router = express.Router();
import {getuser,getusers,createuser,deleteuser,updateuser} from '../controllers/users.js';

// route to get all users.
router.get('/',getusers);

// route to create new user.
router.post('/',createuser);

// route to search for a user.
router.get('/:id',getuser);

// route to delete a user.
router.delete('/:id',deleteuser);

// route to update the user details.
router.patch('/:id',updateuser);

export default router; 