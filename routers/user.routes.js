import express from 'express';
import{
    getUsers,
    createUser,
    updateUser,
    // updateUser,
    deleteUser
    // getUsersthatId
} from '../controllers/user.controller.js';

import { checkAuth, validateUserId, tokenAuth, validateZod } from '../middleware/auth.js';

// import { createUserSchema } from '../dtos/user.zod.js'; 
import { validateCreateUserDTO } from "../dtos/user.dto.js";
import { createUserSchema, updateUserSchema } from "../dtos/user.zod.js";
// import { createUserService } from '../services/userservice.js';


const router = express.Router();
router.get("/",checkAuth, tokenAuth, getUsers);
router.post("/", validateZod(createUserSchema), createUser);
router.patch("/:id", validateUserId, updateUser);
router.delete("/:id", validateUserId, deleteUser);
// router.get("/id", getUserById, getUsersthatId);


export default router;