import { formatAndDivideNumber, getTimestamp } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import RenderTopic from "../shared/RenderTopic";
import Metric from "../shared/Metric";

interface QuestionProps {
  _id: string;
  title: string;
  topics: {
    _id: string;
    name: string;
  }[];
  author: {
    _id: string;
    name: string;
    picture: string;
  };
  upvotes: number;
  views: number;
  answers: Array<object>;
  createdAt: Date;
}

const QuestionCard = ({
  _id,
  title,
  topics,
  author,
  upvotes,
  views,
  answers,
  createdAt,
}: QuestionProps) => {
  return (
    <div className='border p-6 sm:px-8 rounded-xl bg-white'>
      <div className='flex flex-col-reverse items-start justify-between gap-5 sm:flex-row'>
        <div>
          <span className='text-[10px] text-gray-500 line-clamp-1 flex sm:hidden'>
            {getTimestamp(createdAt)}
          </span>
          <Link href={`/question/${_id}`}>
            <h3 className='text-2xl font-bold'>{title}</h3>
          </Link>
        </div>
        {/** If signed in add edit delete actions */}
      </div>
      <div className='mt-2 flex flex-wrap gap-2'>
        {topics.map((topic) => (
          <RenderTopic key={topic._id} _id={topic._id} name={topic.name} />
        ))}
      </div>
      <div className='flex justify-between mt-4 w-full flex-wrap gap-3'>
        <Metric
          imgUrl={author.picture}
          alt='user'
          value={author.name}
          title={` - asked ${getTimestamp(createdAt)}`}
          href={`/profile/${author._id}`}
          isAuthor
          textStyles='text-gray-500 text-[12px]'
        />
        <Metric
          imgUrl='/assets/votes.svg'
          alt='upvotes'
          value={formatAndDivideNumber(upvotes)}
          title=' Votes'
          textStyles='text-gray-500 text-[10px] sm:text-[12px]'
        />
        <Metric
          imgUrl='/assets/answer.svg'
          alt='answers'
          value={formatAndDivideNumber(answers.length)}
          title=' Answers'
          textStyles='text-gray-500 text-[10px] sm:text-[12px]'
        />
        <Metric
          imgUrl='/assets/views.svg'
          alt='Views'
          value={formatAndDivideNumber(views)}
          title=' Veiws'
          textStyles='text-gray-500 text-[10px] sm:text-[12px]'
        />
      </div>
    </div>
  );
};

export default QuestionCard;
