import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "../../../components/getPostMetadata";
import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";

const getPostContent = (slug: string) => {
    const folder = "posts/";
    const file =   `${folder}${slug}.md`;
    const content = fs.readFileSync(file, "utf8");
    const matterResult = matter(content);
    return matterResult;
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const { slug } = params;
    const post = getPostContent(slug);
  
    return {
      title: `${post.data.title} | Arif Aulakh`,
      description: post.data.description || "Post by Arif Aulakh",
      openGraph: {
        title: post.data.title,
        description: post.data.description || "Post by Arif Aulakh",
        images: [
          {
            url: post.data.ogImage || post.data.image,
            width: 1200,
            height: 630,
            alt: post.data.title,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: post.data.title,
        description: post.data.description,
        images: [post.data.ogImage || post.data.image],
      }
    };
}
  
export const generateStaticParams = async () => {
    const posts = getPostMetadata();
    return posts.map((post) => ({
        slug: post.slug,
    }));
};
const PostPage = (props: any) => {
    const slug = props.params.slug;
    const post = getPostContent(slug);
    
    const options = {
        overrides: {
            Image: {
                component: Image,
            },
        },
    };

    return (
        <div>
            <div className="mb-8">
                <h1 className="text-2xl font-medium text-gray-900 mb-2">{post.data.title}</h1>
                <p className="text-sm text-gray-400">{post.data.date}</p>
            </div>
            <article className="prose prose-gray max-w-none mx-auto" style={{ maxWidth: '65ch' }}>
                <Markdown options={options}>{post.content}</Markdown>
            </article>
            <div className="mt-12 pt-6 border-t border-gray-100">
                <Link href="../posts">
                    <span className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200">← Back to all posts</span>
                </Link>
            </div>
        </div>
    )
};

export default PostPage;