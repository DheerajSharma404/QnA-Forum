import Image from "next/image";
import Link from "next/link";
import React from "react";
import RenderTopic from "./RenderTopic";

const RightSideBar = () => {
  const hotQuestions = [
    { _id: "1", title: "How do I Use Express as a custom server in NextJS?" },
    { _id: "2", title: "Cascading delete in SQLAlchemy?" },
    { _id: "3", title: "Redux Toolkit not updating states as Expected?" },
    { _id: "4", title: "Redux Toolkit not updating states as Expected?" },
    {
      _id: "5",
      title: "Redux Toolkit not updating states as Expected?",
    },
  ];
  const popularTopics = [
    { _id: "1", name: "javascript", totalQuestions: 5 },
    { _id: "2", name: "coding", totalQuestions: 5 },
    { _id: "3", name: "NextJS", totalQuestions: 5 },
    { _id: "4", name: "React", totalQuestions: 5 },
    { _id: "5", name: "Tailwind", totalQuestions: 5 },
  ];
  return (
    <section className='border w-[300px] h-[678px] rounded-xl mt-2 sticky max-xl:hidden px-5 overflow-y-auto '>
      <div className='pt-3 '>
        <h3 className='text-2xl font-bold '>Top Question</h3>
        <div className='mt-4 flex w-full flex-col gap-4 '>
          {hotQuestions.map((question) => (
            <Link
              key={question._id}
              href={`/questions/${question._id}`}
              className='flex cursor-pointer items-center justify-between gap-7 '
            >
              <p className='text-sm'>{question.title}</p>
              <Image
                src='assets/chevron_right.svg'
                alt='Right arrow'
                width={24}
                height={24}
              />
            </Link>
          ))}
        </div>
      </div>
      <div className='mt-6'>
        <h3 className='text-2xl font-bold'>Popular Topics</h3>
        <div className='mt-4 flex flex-col gap-3 '>
          {popularTopics.map((topic) => (
            <RenderTopic
              key={topic._id}
              _id={topic._id}
              name={topic.name}
              totalQuestions={topic.totalQuestions}
              showCount
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSideBar;
