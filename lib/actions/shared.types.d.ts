import { Schema } from "mongoose";
import { IUser } from "@/models/user.model";

export interface GetQuestionParams {
  page?: number;
  pageSice?: number;
  searchQuery?: string;
  filter?: string;
}

export interface CreateQuestionParams {
  title: string;
  content: string;
  topics: string[];
  author: Schema.Types.ObjectId | IUser;
  path: string;
}

export interface GetUserByIdParams {
  userId: string;
}

export interface CreateUserParams {
  clerkId: string;
  name: string;
  username: string;
  email: string;
  picture: string;
}

export interface UpdateUserParams {
  clerkId: string;
  updateData: Partial<IUser>;
  path: string;
}

export interface DeleteUserParams {
  clerkId: string;
}
