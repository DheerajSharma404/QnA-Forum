"use server";

import Question from "@/models/question.model";
import { connectToDatabase } from "../mongoose";
import Topic from "@/models/topic.model";
import { CreateQuestionParams, GetQuestionParams } from "./shared.types";
import { revalidatePath } from "next/cache";

export const createQuestion = async (params: CreateQuestionParams) => {
  try {
    connectToDatabase();
    const { title, content, topics, author, path } = params;

    //create the question

    const question = await Question.create({
      title,
      content,
      author,
    });

    const topicDocument = [];

    //  Create the topics or get them if they already exist

    {
      /** Summary
       * 1. It Searches for the document in the Topics Collection where the "name" is equal to the regex.
       * 2. If it finds such a document, it updates it by pushing the ID of the question into the "question" array.
       * 3. If it doesn't find such a document, it inserts a new document with the "name" set to the value of the "Topic" and adds the question ID to the "questions" array.
       * 4. It then returns the document.
       */
    }
    for (const topic of topics) {
      const existingTopic = await Topic.findOneAndUpdate(
        { name: { $regex: new RegExp(`^${topic}$`, "i") } },
        { $setOnInsert: { name: topic }, $push: { questions: question._id } },
        { upsert: true, new: true }
      );
      topicDocument.push(existingTopic);
    }
    await Question.findByIdAndUpdate(question._id, {
      $push: { topics: { $each: topicDocument } },
    });

    // Create an interaction record for the user's ask_question action

    // Increment author's repustation by +5 for creating a question.

    revalidatePath(path);
  } catch (error) {}
};

export const getQuestions = async (params: GetQuestionParams) => {
  try {
    connectToDatabase();
    const questions = await Question.find({})
      .populate({ path: "topics", model: "Topic" })
      .populate({ path: "author", model: "User" })
      .sort({ createdAt: -1 });
    return { questions };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
