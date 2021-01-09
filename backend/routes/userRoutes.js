import express from 'express';
const router = express.Router();

import {
  authUser,
  getUserProfile,
  registerUser,
} from '../controllers/userControllers.js';
import { protect } from '../middleware/authMiddleware.js';

router.route('/').post(registerUser);
router.post('/login', authUser);
//Add protect middleware for the route i want to be protected
router.route('/profile').get(protect, getUserProfile);

export default router;
