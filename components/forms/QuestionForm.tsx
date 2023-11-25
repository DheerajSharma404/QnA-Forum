"use client";

import * as z from "zod";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { QuestionSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Editor } from "@tinymce/tinymce-react";
import { Badge } from "../ui/badge";
import Image from "next/image";
import { createQuestion } from "@/lib/actions/question.actions";
import { useRouter, usePathname } from "next/navigation";

const type: any = "create";

interface Props {
  mongoUser: string;
}

const QuestionForm = ({ mongoUser }: Props) => {
  const pathname = usePathname();
  const router = useRouter();

  const editorRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  // 1. Define your form.
  const form = useForm<z.infer<typeof QuestionSchema>>({
    resolver: zodResolver(QuestionSchema),
    defaultValues: {
      title: "",
      explanation: "",
      topics: [],
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof QuestionSchema>) {
    setIsSubmitting(true);

    try {
      // make an async call to our api  to create  a content
      //1. containing all the form data
      await createQuestion({
        title: values.title,
        content: values.explanation,
        topics: values.topics,
        author: JSON.parse(mongoUser),
        path: pathname,
      });
    } catch (error) {
    } finally {
      setIsSubmitting(false);
    }

    router.push("/");
  }

  const handleInputKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    field: any
  ) => {
    if (e.key === "Enter" && field.name === "topics") {
      e.preventDefault();

      const topicInput = e.target as HTMLInputElement;
      const topicValue = topicInput.value.trim();

      if (topicValue !== "") {
        if (topicValue.length > 15) {
          return form.setError("topics", {
            type: "required",
            message: "Topics must be less than 15 characters.",
          });
        }

        if (!field.value.includes(topicValue as never)) {
          form.setValue("topics", [...field.value, topicValue]);
          topicInput.value = "";
          form.clearErrors("topics");
        }
      } else {
        form.trigger();
      }
    }
  };

  const handleTagRemove = (topic: string, field: any) => {
    const newTopics = field.value.filter((t: string) => t !== topic);
    form.setValue("topics", newTopics);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='flex w-full flex-col gap-10'
      >
        <FormField
          control={form.control}
          name='title'
          render={({ field }) => (
            <FormItem className='flex w-full flex-col'>
              <FormLabel className='text-xl  font-meduim text-black'>
                Question Title
                <span className='text-red-600'> *</span>
              </FormLabel>
              <FormControl className='mt-3.5'>
                <Input {...field} className='min-h-[46px] rounded-full px-6' />
              </FormControl>
              <FormDescription className='text-[11px]'>
                Be specific and imagine you&apos;re adking a question to another
                person.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='explanation'
          render={({ field }) => (
            <FormItem className='flex w-full flex-col gap-3'>
              <FormLabel className='text-xl  font-meduim text-black'>
                Detailed exaplanation of your problem{" "}
                <span className='text-red-600'> *</span>
              </FormLabel>
              <FormControl className='mt-3.5'>
                <Editor
                  apiKey={process.env.NEXT_PUBLIC_TINY_EDITOR_API}
                  onBlur={field.onBlur} // save the value to form on blur
                  onEditorChange={(content) => field.onChange(content)}
                  initialValue=''
                  init={{
                    height: 350,
                    menubar: false,
                    plugins: [
                      "mentions",
                      "anchor",
                      "autolink",
                      "charmap",
                      "codesample",
                      "emoticons",
                      "image",
                      "link",
                      "lists",
                      "media",
                      "searchreplace",
                      "table",
                      "visualblocks",
                      "wordcount",
                      "checklist",
                      "mediaembed",
                      "casechange",
                      "export",
                      "formatpainter",
                      "pageembed",
                      "permanentpen",
                      "footnotes",
                      "advtemplate",
                      "advtable",
                      "advcode",
                      "editimage",
                      "tableofcontents",
                      "mergetags",
                      "powerpaste",
                      "tinymcespellchecker",
                      "autocorrect",
                      "a11ychecker",
                      "typography",
                      "inlinecss",
                    ],
                    toolbar:
                      "undo redo | blocks  | codesample | bold italic underline strikethrough forecolor| align lineheight | checklist numlist bullist indent outdent",
                    content_style: "body { font-family:Inter; font-size:16px }",
                    ai_request: (request: any, respondWith: any) =>
                      respondWith.string(() =>
                        Promise.reject("See docs to implement AI Assistant")
                      ),
                  }}
                />
              </FormControl>
              <FormDescription className='text-[11px]'>
                Introduce the problem and expand on what you put in the title.
                Minimum 20 characters.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='topics'
          render={({ field }) => (
            <FormItem className='flex w-full flex-col'>
              <FormLabel className='text-xl  font-meduim text-black'>
                Topics<span className='text-red-600'> *</span>
              </FormLabel>
              <FormControl className='mt-3.5'>
                <>
                  <Input
                    placeholder='Add Topics'
                    onKeyDown={(e) => handleInputKeyDown(e, field)}
                    className='min-h-[46px] rounded-full px-6'
                  />
                  {field.value.length > 0 && (
                    <div className='flex justify-start mt-2.5 gap-2.5'>
                      {field.value.map((topic) => (
                        <Badge
                          key={topic}
                          className='text-xs rounded-full px-3 py-1 bg-slate-100 gap-2 text-black capitalize'
                          onClick={() => {
                            handleTagRemove(topic, field);
                          }}
                        >
                          {topic}
                          <Image
                            src='assets/closed.svg'
                            alt='close icon'
                            width={14}
                            height={1}
                            className='cursor-pointer object-contain invert-0 dark:invert'
                          />
                        </Badge>
                      ))}
                    </div>
                  )}
                </>
              </FormControl>
              <FormDescription className='text-[11px]'>
                Add up to 3 topics to describe what your question is about. You
                need to press enter to add a topic.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type='submit'
          className='rounded-full bg-black dark:bg-white min-h-[52px]'
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>{type === "edit" ? "Editiong" : "Posting..."}</>
          ) : (
            <>{type === "edit" ? "Edit Question" : "Ask a Question"}</>
          )}
        </Button>
      </form>
    </Form>
  );
};

export default QuestionForm;
