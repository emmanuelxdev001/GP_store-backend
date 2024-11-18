import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface IProps {
  id: string;
  email: string;
}

const SECRET_KEY = process.env.JWT_SECRET_KEY || 'your_secret_key';

// Middleware function to verify the token
const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers['authorization']?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Access Denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY) as IProps;
    req.body = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ message: 'Invalid token. Access forbidden.' });
  }
};

export default verifyToken;
