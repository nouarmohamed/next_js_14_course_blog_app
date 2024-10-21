import Card from "@/components/Card"; 
import Link from "next/link";
export const dynamic = 'force-dynamic';

const page = async()=>{
  // Use relative path for fetch
  const res = await fetch('/api/posts', { cache: 'no-store' });

  if (!res.ok) {
    console.error('Failed to fetch posts', res.status);
    return []; // Handle the error appropriately
  }

  const posts = await res.json();
  
  return (
    <>
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen">
        <section className="text-center pt-40 pb-12">
          <h1 className="sm:text-7xl text-5xl font-extrabold text-gray-900">Welcome to <span className="text-purple-600">Blogo</span></h1>
          <p className="mt-4 text-lg text-gray-600">
            Share your stories, ideas, and experiences with the world.
          </p>
          <Link
            href="/post/create-post"
            className="mt-6 inline-block bg-gradient-to-r from-purple-500 to-blue-500  text-white sm:px-10 px-5 py-3 rounded-full text-lg font-normal hover:opacity-90"
          >
            Start Creating
          </Link>
        </section>

        <section className="py-12">
            {posts.length>0 ? (
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post:Post)=>(
                  <Card 
                    key={post._id}
                    id={post._id}
                    title={post.title}
                    content={post.content}
                    author={post.author.username}
                    authorId={post.author._id}
                    authorImg={post.author.image}
                    createAt={post.createAt}
                  />  
                ))}
              </div>
            ):(<div className='pt-24 flex justify-center items-center'>
                <h2 className="text-sm sm:text-5xl font-semibold text-gray-700">
                    No posts yet !
                  </h2>
                </div>
              )
            }
        </section>
      </main>
    </>
  );
}
export default page