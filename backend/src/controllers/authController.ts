import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';

export const login = (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { username, password } = req.body;

  // For demo purposes, using a hardcoded user.
  if(username === 'admin' && password === 'password'){
    const token = jwt.sign({ username }, process.env.JWT_SECRET as string, { expiresIn: '1h' });
    return res.json({ token });
  }
  return res.status(401).json({ message: 'Invalid credentials' });
};

export const logout = (req: Request, res: Response) => {
  // Client can simply discard the token. In production, consider token blacklisting.
  return res.json({ message: 'Logged out successfully' });
};
