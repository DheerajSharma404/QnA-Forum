import Navbar from "@/components/shared/navbar/Navbar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className=' bg-white text-black dark:bg-black dark:text-white relative border border-black'>
      <Navbar />
      <div className='flex border border-black'>
        LeftSideBar
        <section className='flex  flex-1 flex-col min-h-screen border border-black'>
          <div className='w-full border-red-500 border mx-auto max-w-5xl'>
            {children}
          </div>
        </section>
        RightSidebar
      </div>
      Toaster
    </main>
  );
};

export default Layout;
