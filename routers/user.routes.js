import express from 'express';
import{
    getUsers,
    createUser,
    updateUser,
    // updateUser,
    deleteUser
    // getUsersthatId
} from '../controllers/user.controller.js';

import { checkAuth, validateUserId, tokenAuth } from '../middleware/auth.js';

import { validateCreateUserDTO } from '../dtos/user.dto.js';

// import { createUserService } from '../services/userservice.js';


const router = express.Router();
router.get("/",tokenAuth, getUsers);
router.post("/", validateCreateUserDTO, createUser);
router.patch("/:id", validateUserId, updateUser);
router.delete("/:id", validateUserId, deleteUser);
// router.get("/id", getUserById, getUsersthatId);


export default router;