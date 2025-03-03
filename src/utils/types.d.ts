import { Request } from "express";

// Extend the Request interface
declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
        username: string;
        email: string;
        profile: string;
      };
    }
  }
}
