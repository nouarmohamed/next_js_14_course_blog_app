import { connectToDB } from "@/utils/database";
import Post from "@/utils/models/post";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
    try {console.log('no thing')
        await connectToDB();
        console.log('kaddooor')
        const posts = await Post.find({}).populate('author');
        console.log('mohemad', posts)
        return NextResponse.json(posts, { status: 200 });
    } catch (error) {
        console.log('error kbiiir')
        return NextResponse.json({ error: "Failed to fetch posts"}, { status: 500 });
    }
};
