"use client"
import React from 'react'
import Image from 'next/image'
import SignInBtn from './SignInBtn'
import { useSession } from 'next-auth/react'

const UserInfo = () => {
  const { status, data: session } = useSession();

  if (status === "authenticated") {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
          <Image 
            src={session?.user?.image} 
            width={80} 
            height={80} 
            alt="User Profile" 
            className="rounded-full border-2 border-blue-500 shadow-md"
          />
          <h2 className="mt-4 text-xl font-semibold text-gray-800">
            {session?.user?.name}
          </h2>
          <p className="text-gray-600 text-sm mt-1">
            📧 {session?.user?.email}
          </p>
        </div>
      </div>
    )
  } else {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <SignInBtn />
      </div>
    )
  }
}

export default UserInfo;
