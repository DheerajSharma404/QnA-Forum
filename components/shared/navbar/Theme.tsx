"use client";
import React from "react";
import { useTheme } from "@/context/ThemeProvider";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Image from "next/image";
import { theme } from "@/constants";

const Theme = () => {
  const { mode, setMode } = useTheme();
  return (
    <Menubar className='relative border-none bg-transparent shadow-none'>
      <MenubarMenu>
        <MenubarTrigger>
          {mode === "dark" ? (
            <Image
              src='/assets/moon.svg'
              alt='Dark Mode'
              width={24}
              height={24}
              className='cursor-pointer'
            />
          ) : (
            <Image
              src='/assets/sun.svg'
              alt='Light Mode'
              width={24}
              height={24}
              className='cursor-pointer'
            />
          )}
        </MenubarTrigger>
        <MenubarContent className='absolute right-[-3rem] min-w-[120px] rounded border'>
          {theme.map((item) => (
            <MenubarItem
              key={item.value}
              className='flex items-center gap-4'
              onClick={() => {
                setMode(item.value);
                if (item.value !== "system") {
                  localStorage.theme = item.value;
                } else {
                  localStorage.removeItem("theme");
                }
              }}
            >
              <Image src={item.icon} alt={item.value} width={16} height={16} />
              <p className='font-semibold'>{item.label}</p>
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default Theme;
