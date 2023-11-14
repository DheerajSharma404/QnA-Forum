import Link from "next/link";
import React from "react";
import { Badge } from "../ui/badge";

interface Props {
  _id: string;
  name: string;
  totalQuestions?: number;
  showCount?: boolean;
}

const RenderTopic = ({ _id, name, totalQuestions, showCount }: Props) => {
  return (
    <Link
      href={`/topics/${_id}`}
      className='flex  items-center justify-between gap-2'
    >
      <Badge className='px-4 py-2 rounded-xl bg-slate-100 text-xs text-black hover:text-white'>
        {name}
      </Badge>
      {showCount && <p className='text-xs pr-3'> {totalQuestions}</p>}
    </Link>
  );
};

export default RenderTopic;
