import { connectToDB } from "@/utils/database";
import Post from "@/utils/models/post";
import { NextResponse } from "next/server";


export const GET = async (req: Request, { params }: { params: Params }) => {
    try {
        await connectToDB();
        
        const post = await Post.findById(params.id).populate('author');
        if (!post) {
            return NextResponse.json({ error: "Post not found" }, { status: 404 });
        }
        
        return NextResponse.json(post, { status: 200 });

    } catch (error) {
        console.error(error); // Log the error for debugging
        return NextResponse.json({ error: "Failed to fetch post" }, { status: 500 });
    }
};

export const DELETE = async (req:Request, {params}:{ params:Params }) => {
    try {
        await connectToDB();
        await Post.findByIdAndDelete(params.id);

        return NextResponse.json("Post deleted successfully", { status: 200 });

    } catch (error) {
        return NextResponse.json("Error deleting post", { status: 500 });
    }
};
