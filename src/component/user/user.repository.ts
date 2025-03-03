import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();

class UserRepository {
  // Find all users
  async findAll(): Promise<User[]> {
    return await prisma.user.findMany();
  }

  // Find user by ID
  async findById(id: string): Promise<User | null> {
    return await prisma.user.findUnique({
      where: { id },
    });
  }

  // Create a new user
  async createUser({
    username,
    password,
    email,
    profile,
  }: {
    username: string;
    password: string;
    email: string;
    profile: string;
  }): Promise<User> {
    return await prisma.user.create({
      data: { username, password, email, profile },
    });
  }

  // Update a user by ID
  async update(id: string, updatedUser: Partial<User>): Promise<User | null> {
    return await prisma.user.update({
      where: { id },
      data: updatedUser,
    });
  }

  // Delete a user by ID
  async delete(id: string): Promise<User | null> {
    return await prisma.user.delete({
      where: { id },
    });
  }

  // Find user by username
  async getUserByUsername(username: string): Promise<User | null> {
    return await prisma.user.findUnique({
      where: { username },
    });
  }
}

export default new UserRepository();
