import { connectToDB } from "@/utils/database";
import Post from "@/utils/models/post";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
    try {
        await connectToDB();

        const posts = await Post.find({}).populate('author').sort({'createAt': 'descending'});

        return NextResponse.json(posts, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Failed to fetch posts"}, { status: 500 });
    }
};
