'use server'

export async function fetchPosts() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`, { cache: 'no-store' });
  
    if (!res.ok) {
      throw new Error('Failed to fetch posts');
    }
  
    const posts = await res.json();
    return posts;
  }