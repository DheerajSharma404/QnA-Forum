import { Schema, models, model, Document } from "mongoose";

export interface IUser extends Document {
  clerkId: string;
  name: string;
  username: string;
  email: string;
  password?: string;
  bio?: string;
  picture: string;
  location?: string;
  portfolioWebsite?: string;
  reputation?: number;
  savedQuestions?: Schema.Types.ObjectId[];
  joinedAt: Date;
}

const UserSchema = new Schema({
  clerkId: { type: String, required: true, unique: true },
  name: { type: String },
  username: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 30,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
    unique: true,
  },
  password: { type: String, minlength: 8 },
  bio: { type: String, maxlenght: 160 },
  picture: { type: String, required: true },
  location: { type: String, maxlenght: 30 },
  portfolioWebsite: { type: String },
  reputation: { type: Number, default: 0 },
  savedQuestions: [{ type: Schema.Types.ObjectId, ref: "Question" }],
  joinedAt: { type: Date, default: Date.now },
});

const User = models.User || model<IUser>("User", UserSchema);

export default User;
