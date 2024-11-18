import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET_KEY || 'your_secret_key';

interface AuthenticatedRequest extends Request {
  user?: any;
}

const authenticateToken = (req: Request, res: Response, next: NextFunction): void => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    res.status(401).json({ message: 'Access Denied: No token provided' });
    return; // Ensure middleware returns void
  }

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      res.status(403).json({ message: 'Invalid token' });
      return; // Ensure middleware returns void
    }

    (req as any).user = user; // Attach the user to the request object
    next(); // Call the next middleware
  });
};


export default authenticateToken;
