import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

interface Props {
  title: string;
  description: string;
  link: string;
  linkTitle: string;
}

const NoResult = ({ title, description, link, linkTitle }: Props) => {
  return (
    <div className='mt-4 flex w-full flex-col items-center justify-center'>
      <Image
        src='/assets/images/no_result_illustration.png'
        alt='No Result Illustration'
        width={200}
        height={200}
        className='block object-contain dark:hidden '
      />

      <h2 className='text-xl font-bold mt-4'>{title}</h2>
      <p className='text-xs my-2.5 max-w-md text-center'>{description}</p>
      <Link href='/ask_question'>
        <Button className='bg-black  rounded-full px-9 py-3'>
          {linkTitle}
        </Button>
      </Link>
    </div>
  );
};

export default NoResult;
