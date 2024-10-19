import CreateForm from "@/components/CreateForm";

const page = () => {
  
  return (
    <div className="max-w-3xl mx-auto p-4 pt-32">
      <h1 className="sm:text-6xl text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">Create a New Post</h1>
      <p className="mt-2 mb-10 text-lg text-gray-600">Share your ideas with the world! Just add a title, write your post, and publish!</p>
      
      <CreateForm/>
    </div>
  );
};

export default page;
