import { Schema, model, models, Document } from "mongoose";

export interface IQuestion extends Document {
  title: string;
  content: string;
  topics: Schema.Types.ObjectId[];
  views: number;
  upvotes: Schema.Types.ObjectId[];
  downvotes: Schema.Types.ObjectId[];
  author: Schema.Types.ObjectId;
  answers: Schema.Types.ObjectId[];
  createdAt: Date;
}

export const QuestionSchema = new Schema({
  title: { type: String, required: true, minlength: 3, maxlenght: 255 },
  content: { type: String, required: true, minlength: 100 },
  topics: [{ type: Schema.Types.ObjectId, ref: "Topic" }],
  views: { type: Number, default: 0 },
  upvotes: [{ type: Schema.Types.ObjectId, ref: "User" }],
  downvotes: [{ type: Schema.Types.ObjectId, ref: "User" }],
  author: { type: Schema.Types.ObjectId, ref: "User" },
  answers: [{ type: Schema.Types.ObjectId, ref: "Answer" }],
  createdAt: { type: Date, default: Date.now },
});

const Question =
  models.Question || model<IQuestion>("Question", QuestionSchema);

export default Question;
