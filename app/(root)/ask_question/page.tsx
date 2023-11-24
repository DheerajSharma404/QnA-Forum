import QuestionForm from "@/components/forms/QuestionForm";
import { getUserById } from "@/lib/actions/user.action";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";

const Page = async () => {
  const { userId } = auth();


  if (!userId) redirect("/sign-in");

  const mongoUser = await getUserById({ userId });

  console.log(mongoUser);
  return (
    <div className='px-4'>
      <h1 className='text-4xl font-bold mt-4 '>Ask a Question</h1>
      <div className='mt-9'>
        <QuestionForm mongoUser={JSON.stringify(mongoUser)} />
      </div>
    </div>
  );
};

export default Page;
