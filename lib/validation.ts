import * as z from "zod";

export const QuestionSchema = z.object({
  title: z.string().min(3).max(255),
  explanation: z.string().min(100),
  topics: z.array(z.string().min(1).max(15)).min(1).max(5),
});
