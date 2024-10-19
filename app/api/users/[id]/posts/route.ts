// pages/api/users/[id]/posts.ts
import { connectToDB } from '@/utils/database';
import Post from '@/utils/models/post';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  try {
    await connectToDB();
    const posts = await Post.find({ creator: id }).sort({ createdAt: -1 });
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch posts' });
  }
}