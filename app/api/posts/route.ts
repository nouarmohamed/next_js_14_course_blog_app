import { connectToDB } from "@/utils/database";
import Post from "@/utils/models/post";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        await connectToDB();
        const posts = await Post.find({}).populate('author');
        if (!posts) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }
        return NextResponse.json(posts, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch posts"}, { status: 500 });
    }
};
