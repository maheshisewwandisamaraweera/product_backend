import { Router } from 'express';
import { login, logout } from '../controllers/authController';
import { body } from 'express-validator';

const router = Router();

router.post('/login', [
  body('username').notEmpty().withMessage('Username is required'),
  body('password').notEmpty().withMessage('Password is required')
], login);

router.post('/logout', logout);

export default router;
