'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const page = ({params}:{params:Params}) => {
  const {id} = params
  const router = useRouter();
  const handleDelete = async () => {
    try {
      const res = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        router.push('/')
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-lg text-center mx-5">
        <h1 className="text-3xl font-semibold text-red-600 mb-4">Are you sure?</h1>
        <p className="text-gray-700 text-lg mb-6">This action cannot be undone. Do you really want to delete this post?</p>
        
        <div className="flex justify-center gap-x-4">
          <button onClick={()=>handleDelete()} className="bg-red-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-600 transition">
            Yes, Delete
          </button>
          <Link 
            href="/"
            className="bg-gray-300 text-gray-700 px-6 py-2 rounded-full font-semibold hover:bg-gray-400 transition"
          >
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
