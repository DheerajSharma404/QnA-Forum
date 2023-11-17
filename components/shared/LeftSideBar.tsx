"use client";
import { sidebarLink } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";
import { SignedOut } from "@clerk/nextjs";

const LeftSideBar = () => {
  const pathname = usePathname();
  return (
    <section className='border max-w-[240px] h-[680px] rounded-xl mt-2  hidden sm:block px-4 sticky left-0 top-20 bg-white'>
      <div className='flex flex-1 flex-col gap-6 pt-4 '>
        {sidebarLink.map((item) => {
          const isActive =
            (pathname.includes(item.route) && item.route.length > 1) ||
            pathname === item.route;
          return (
            <Link
              key={item.route}
              href={item.route}
              className={`${
                isActive && "bg-black text-white rounded-full"
              } flex items-center justify-start gap-4 p-4 hover:bg-black hover:text-white hover:rounded-full`}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={24}
                height={24}
                className={`${isActive && "filter invert"} cursor-pointer`}
              />
              <p className={`${isActive && "font-bold"} max-md:hidden`}>
                {item.label}
              </p>
            </Link>
          );
        })}
      </div>

      <SignedOut>
        <div className='flex flex-1 flex-col gap-2 mt-16'>
          <Link href='/sign-in'>
            <Button className='w-full rounded-full bg-black py-[28px] gap-4 items-center justify-start'>
              <Image
                src='assets/login.svg'
                alt='Sign Up'
                width={24}
                height={24}
                className='filter invert cursor-pointer'
              />
              <span className='max-md:hidden'>Log In</span>
            </Button>
          </Link>

          <Link href='/sign-up'>
            <Button className='w-full rounded-full border border-black bg-transparent py-[28px] flex items-center justify-start gap-4'>
              <Image
                src='assets/signup.svg'
                alt='Sign Up'
                width={24}
                height={24}
                className='filter  cursor-pointer '
              />
              <span className='text-black max-md:hidden'>Sign Up</span>
            </Button>
          </Link>
        </div>
      </SignedOut>
    </section>
  );
};

export default LeftSideBar;
