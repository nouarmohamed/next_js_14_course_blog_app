import { connectToDB } from "@/utils/database";
import Post from "@/utils/models/post";
import { NextRequest } from "next/server";


export const POST = async(request: NextRequest)=>{
    try{
        const {userId, title, content} = await request.json()
        await connectToDB()
        const newPost = await Post.create({title: title, content: content, author: userId})
        return new Response(JSON.stringify(newPost), {status: 201})
    } catch(error){
        return new Response('Failed to create Post')
    }
}