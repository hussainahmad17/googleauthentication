"use client"
import Image from "next/image";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
 const  SignInBtn = () => {
  const {status} = useSession();
  return (
    <div className="flex items-center justify-center h-screen">
     {
      status === "authenticated" ? (
        <button onClick={()=>signIn("google")} className="flex items-center gap-4 shadow-xl rounded-lg pl-3">
        <Image src="/logo.png" height={30} width={30} alt="Google Logo" />
        <span className="bg-blue-500 text-white px-4 py-3">
          Sign out
        </span>
      </button>
      ):(
        <button onClick={()=>signIn("google")} className="flex items-center gap-4 shadow-xl rounded-lg pl-3">
        <Image src="/logo.png" height={30} width={30} alt="Google Logo" />
        <span className="bg-blue-500 text-white px-4 py-3">
          Sign in with Google
        </span>
      </button>
      )
     }
    </div>
  );
}


export default SignInBtn
