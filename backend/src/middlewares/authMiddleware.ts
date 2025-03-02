import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const protect = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Not authorized' });
  }
  const token = authHeader.split(' ')[1];
  try {
    jwt.verify(token, process.env.JWT_SECRET as string);
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token not valid' });
  }
};
