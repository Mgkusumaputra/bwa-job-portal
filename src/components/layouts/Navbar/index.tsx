import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    // <nav className="px-32 py-5 h-20 flex flex-row items-center justify-between">
    //   <div className="flex items-center justify-center gap-12 h-full">
    //     <Image alt="logo" src="/images/logo2.png" width={160} height={36} />
    //     <div className="flex flex-row justify-center items-center place-items-center">
    //       <p className="font-medium text-gray-400 mr-4 cursor-pointer">
    //         Find Jobs
    //       </p>
    //       <p className="font-medium text-gray-400 cursor-pointer">
    //         Browse Company
    //       </p>
    //     </div>
    //   </div>
    //   <div className="inline-flex items-center gap-4 h-8">
    //     <Button variant="link">Sign In</Button>
    //     <Button>Sign Up</Button>
    //   </div>
    // </nav>
    <nav className="flex items-center justify-center w-full py-5 px-32">
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-row justify-center items-center gap-12">
          <Link href="/">
            <Image alt="logo" src="/images/logo2.png" width={160} height={36} />
          </Link>
          <div>
            <Link
              href="/"
              className="font-medium text-gray-400 mr-4 cursor-pointer"
            >
              Find Jobs
            </Link>
            <Link href="/" className="font-medium text-gray-400 cursor-pointer">
              Browse Companies
            </Link>
          </div>
        </div>
        <div className="inline-flex items-center gap-4 h-8">
          <Button variant="link">Sign In</Button>
          <Button>Sign Up</Button>
        </div>
      </div>
    </nav>
  );
}
