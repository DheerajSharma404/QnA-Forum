"use client";
import { HomePageFilters } from "@/constants/filter";
import React from "react";
import { Button } from "../ui/button";

const HomeFilters = () => {
  const active = "newest";
  return (
    <div className='mt-4 hidden flex-wrap gap-3 md:flex px-4'>
      {HomePageFilters.map((item) => (
        <Button
          key={item.value}
          onClick={() => {}}
          className={`rounded-full bg-slate-100 text-black text-sm font-normal hover:text-white px-7 py-2
          ${active === item.value ? "bg-black text-white" : ""}
          `}
        >
          {item.name}
        </Button>
      ))}
    </div>
  );
};

export default HomeFilters;
