import User from '@/models/User';
import jwt from 'jsonwebtoken';

// Use environment variable with fallback for development
const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-jwt-key-change-this-in-production';

export async function verifyToken(req) {
  try {
    // Get token from authorization header
    const authHeader = req.headers.get?.('authorization') || req.headers.authorization;
    const token = authHeader?.replace('Bearer ', '');

    if (!token) {
      const error = new Error('No token provided');
      error.statusCode = 401;
      throw error;
    }

    // Verify the token
    const decoded = jwt.verify(token, JWT_SECRET);

    if (!decoded.userId) {
      const error = new Error('Invalid token format');
      error.statusCode = 401;
      throw error;
    }

    // Find the user
    const user = await User.findById(decoded.userId).select('-password');

    if (!user) {
      const error = new Error('User not found');
      error.statusCode = 401;
      throw error;
    }

    return user;
  } catch (error) {
    // Handle JWT-specific errors
    if (error.name === 'JsonWebTokenError') {
      const newError = new Error('Invalid token');
      newError.statusCode = 401;
      throw newError;
    }
    if (error.name === 'TokenExpiredError') {
      const newError = new Error('Token expired');
      newError.statusCode = 401;
      throw newError;
    }
    // Re-throw the error with status code if already set
    throw error;
  }
}

export function generateToken(userId) {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: '7d' });
}

