import { Schema, models, model, Document } from "mongoose";

export interface ITopic extends Document {
  name: string;
  description: string;
  questions: Schema.Types.ObjectId[];
  followers: Schema.Types.ObjectId[];
  createdOn: Date;
}

const TopicSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    minlength: 1,
    maxlength: 15,
  },
  description: { type: String, required: true, minlength: 10, maxlength: 150 },
  questions: [{ type: Schema.Types.ObjectId, ref: "Question" }],
  followers: [{ type: Schema.Types.ObjectId, ref: "User" }],
  createdOn: { type: Date, default: Date.now },
});

const Topic = models.Topic || model<ITopic>("Topic", TopicSchema);

export default Topic;
