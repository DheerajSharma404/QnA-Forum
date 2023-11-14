import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const GlobalSearch = () => {
  return (
    <div className='relative w-full max-w-[600px] max-lg:hidden'>
      <button className='absolute top-0 right-0 mt-2 mr-3'>
        <Image src='/assets/search.svg' alt='Search' width={22} height={22} />
      </button>
      <input
        type='text'
        placeholder='Search globally'
        className='w-full h-10 px-4 pr-10 text-sm text-black placeholder-gray-500 border rounded-full focus:outline-none focus:ring-1 focus:ring-black focus:border-transparent'
      />
    </div>
  );
};

export default GlobalSearch;
