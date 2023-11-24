"use client";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";

interface CustomInputProps {
  route: string;
  iconPosition: string;
  imgSrc: string;
  placeholder: string;
  otherClasses?: string;
}

const LocalSearchBar = ({
  route,
  iconPosition,
  imgSrc,
  placeholder,
  otherClasses,
}: CustomInputProps) => {
  return (
    <div
      className={`flex min-h-[56px] grow items-center gap-4 rounded-full relative ${otherClasses}`}
    >
      {iconPosition === "left" && (
        <Image
          src={imgSrc}
          alt='Search icon'
          width={24}
          height={24}
          className='absolute top-4 left-4 cursor-pointer'
        />
      )}

      <input
        type='text'
        placeholder={placeholder}
        className='w-full h-12  px-12 text-md text-black placeholder-gray-500 border rounded-full focus:outline-none focus:ring-1 focus:ring-black focus:border-transparent'
      />
      {iconPosition === "right" && (
        <Image
          src={imgSrc}
          alt='Search icon'
          width={24}
          height={24}
          className='absolute top-4 right-4 cursor-pointer'
        />
      )}
    </div>
  );
};

export default LocalSearchBar;
