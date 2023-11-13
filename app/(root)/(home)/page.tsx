import Image from "next/image";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className=' relative min-h-screen dotted-background  '>
      <UserButton afterSignOutUrl='/' />
    </main>
  );
}
