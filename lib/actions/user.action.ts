"use server";

import User from "@/models/user.model";
import { connectToDatabase } from "../mongoose";
import { GetUserByIdParams } from "./shared.types";

export const getUserById = async (params: GetUserByIdParams) => {
  try {
    connectToDatabase();

    const { userId } = params;

    const user = await User.findOne({ clerkId: userId });

    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
