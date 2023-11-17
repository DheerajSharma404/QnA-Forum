import LeftSideBar from "@/components/shared/LeftSideBar";
import RightSideBar from "@/components/shared/RightSideBar";
import Navbar from "@/components/shared/navbar/Navbar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className=' text-black dark:text-white relative px-2 '>
      <Navbar />
      <div className='flex '>
        <LeftSideBar />
        <section className='flex rounded-xl mt-[16px] sm:mx-2 flex-1 flex-col  '>
          <div className='w-full mx-auto max-w-3xl  mt-2'>{children}</div>
        </section>
        <RightSideBar />
      </div>
    </main>
  );
};

export default Layout;
