import { SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Theme from "./Theme";
import MobileNav from "./MobileNav";
import GlobalSearch from "../search/GlobalSearch";

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between p-3 border  rounded-xl sticky top-2 backdrop-blur-xl'>
      <Link href='/' className='flex items-center gap-1'>
        <Image src={"assets/logo_dark.svg"} alt='Logo' width={38} height={38} />
        <p className='text-2xl font-bold  '>Forum</p>
      </Link>
      <GlobalSearch />
      <div className='flex gap-2 items-center'>
        <Theme />
        <SignedIn>
          <UserButton afterSignOutUrl='/' />
        </SignedIn>
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
