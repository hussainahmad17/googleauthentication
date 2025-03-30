"use client";

import Link from "next/link";
import { signIn , signOut , useSession } from "next-auth/react";

const Navbar = () => {
  const {status} = useSession()
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      {/* App Name */}
      <h1 className="text-xl font-bold text-gray-800">Google Auth</h1>

      {/* Sign Up Button */}
    {
      status === "authenticated" ? (
        <button onClick={()=>signOut()}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
      >
        Sign Out
      </button>
      ) : (
        <button onClick={()=>signIn("google")}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
      >
        Sign Up
      </button>
      )
    }
    </nav>
  );
};

export default Navbar;
