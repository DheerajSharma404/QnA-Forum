"use client";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { SignedOut } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { sidebarLink } from "@/constants";
import { usePathname } from "next/navigation";

const NavContent = () => {
  const pathname = usePathname();
  return (
    <section className='flex h-full flex-col gap-6 pt-8'>
      {sidebarLink.map((item) => {
        const isActive =
          (pathname.includes(item.route) && item.route.length > 1) ||
          pathname === item.route;
        return (
          <SheetClose asChild key={item.route}>
            <Link
              href={item.route}
              className={`${
                isActive && "bg-black text-white rounded-full"
              } flex items-center justify-start gap-2 p-4`}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={24}
                height={24}
                className={`${isActive && "filter invert"} cursor-pointer`}
              />
              <p className={`${isActive && "font-bold"}`}>{item.label}</p>
            </Link>
          </SheetClose>
        );
      })}
    </section>
  );
};

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src='assets/menu.svg'
          alt='Menue'
          width={36}
          height={36}
          className='cursor-pointer  sm:hidden'
        />
      </SheetTrigger>
      <SheetContent
        side='left'
        className=' flex flex-col border-none min-h-screen'
      >
        <Link href='/' className='flex items-center gap-1'>
          <Image src='assets/logo_dark.svg' alt='Logo' width={38} height={38} />
          <p className='text-2xl font-bold'>Forum</p>
        </Link>
        <div>
          <SheetClose asChild>
            <NavContent />
          </SheetClose>

          <SignedOut>
            <div className='flex flex-col gap-2'>
              <SheetClose asChild>
                <Link href='/sign-in'>
                  <Button className='w-full rounded-full bg-black'>
                    <span>Log In</span>
                  </Button>
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link href='/sign-up'>
                  <Button className='w-full rounded-full border border-black bg-transparent'>
                    <span className='text-black'>Sign Up</span>
                  </Button>
                </Link>
              </SheetClose>
            </div>
          </SignedOut>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
