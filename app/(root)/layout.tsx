import LeftSideBar from "@/components/shared/LeftSideBar";
import Navbar from "@/components/shared/navbar/Navbar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className=' bg-white text-black dark:bg-black dark:text-white relative p-2'>
      <Navbar />
      <div className='flex border-red-600 '>
        <LeftSideBar />
        <section className='flex  flex-1 flex-col min-h-screen '>
          <div className='w-full mx-auto max-w-5xl'>{children}</div>
        </section>
        RightSidebar
      </div>
    </main>
  );
};

export default Layout;
