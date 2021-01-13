import express from "express";
import {registerUser,authUser,getUserProfile,updateUserProfile } from '../controllers/userController.js'
import {protect} from '../middleware/authMiddleWare.js'
const router = express.Router()


router.route('/login').post(authUser)
router.route('/profile').get(protect,getUserProfile).put(protect,updateUserProfile)
router.route('/').post(registerUser)

export default router