'use client'

import Link from 'next/link';
import Image from 'next/image';
import { signOut, signIn, useSession } from 'next-auth/react';


export default function Navbar() {
  const {data:session} = useSession()

  return (
    <nav className="w-full fixed z-10 bg-gradient-to-r from-blue-100 via-purple-100 to-white">
        <div className="px-4 sm:px-6 lg:px-24 flex items-center justify-between h-16">
          <Link href="/">
            <p className="text-3xl text-purple-600 font-bold">Blogo</p>
          </Link>
          <div>
            {session?.user ? (
              <div className='flex items-center justify-center sm:gap-4 gap-2'>
                <Link 
                  href='/post/create-post'
                  className='bg-black text-white hover:bg-white hover:text-black font-light sm:px-4 px-2 py-1 transition duration-200 ease-in-out border border-gray-900 rounded-full'
                >
                  Create Post
                </Link>
                <button 
                  type='button' 
                  onClick={()=>{signOut({ callbackUrl: '/' })}}         
                  className='bg-white text-black hover:bg-gray-50 font-light sm:px-4 px-2 py-1 transition duration-200 ease-in-out border border-gray-900  hover:border-gray-600 rounded-full'
                >
                  Sign Out
                </button>
                <Link href='/profile'>
                  <Image
                    className='rounded-full'
                    src={session?.user?.image || ''}
                    alt={session?.user?.name || ''}
                    height={40}
                    width={40}
                  />
                </Link>
              </div>
            ): (
              <>
                <button 
                  onClick={()=>signIn()} 
                  className=' bg-black text-white hover:bg-white hover:text-black font-light px-4 py-1 transition duration-200 ease-in-out border border-gray-900 rounded-full'
                >
                  Sign In
                </button>
              </>
            )}
          </div>
      </div>
    </nav>
  );
}
