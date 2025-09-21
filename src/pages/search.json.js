import { getCollection } from 'astro:content';

async function getPosts() {
    const posts = await getCollection("blog");
    return posts.map (post => ({
        title: post.data.title,
        description: post.data.description,
        slug: post.id,
        tags: post.data.tags,
        date: post.data.pubDate.toLocaleDateString()
    }));
}

export async function GET() {
    return new Response(JSON.stringify(await getPosts()), {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }