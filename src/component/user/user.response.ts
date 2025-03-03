import { User } from "@prisma/client";

export type LoginResponse = {
  status: string;
  error: boolean;
  statusCode: number;
  data: { username: string; id: string };
  token?: string;
};

export type CreateUserResponse = {
  status: string;
  error: boolean;
  statusCode: number;
  data: {
    id: string;
    username: string;
    email: string;
    profile: string;
  };
};

export type DeleteUserResponse = {
  status: string;
  error: boolean;
  statusCode: number;
  message: string;
};

export type GetUserResponse = {
  status: string;
  error: boolean;
  statusCode: number;
  message: string;
  data?: User | null;
};
export type UserServiceResponse = {
  status: string;
  statusCode: number;
  message?: string;
  data?: any;
  error?: boolean;
};
