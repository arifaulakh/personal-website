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
    const socialImage = post.data.ogImage || post.data.image;

    return {
      title: post.data.title,
      description: post.data.description || "Post by Arif Aulakh",
      openGraph: {
        title: post.data.title,
        description: post.data.description || "Post by Arif Aulakh",
        ...(socialImage ? { images: [
          {
            url: socialImage,
            width: 1200,
            height: 630,
            alt: post.data.title,
          },
        ] } : {}),
      },
      twitter: {
        card: 'summary_large_image',
        title: post.data.title,
        description: post.data.description || "Post by Arif Aulakh",
        ...(socialImage ? { images: [socialImage] } : {}),
      }
    };
}
  
export const generateStaticParams = async () => {
    const posts = getPostMetadata();
    return posts.map((post) => ({
        slug: post.slug,
    }));
};
const PostPage = ({ params }: { params: { slug: string } }) => {
    const slug = params.slug;
    const post = getPostContent(slug);
    
    const options = {
        overrides: {
            Image: {
                component: Image,
            },
        },
    };

    return (
        <div className="post-page">
            <header>
                <h1>{post.data.title}</h1>
                <time dateTime={post.data.dateISO}>{post.data.date}</time>
            </header>
            <article className="prose">
                <Markdown options={options}>{post.content}</Markdown>
            </article>
            <Link className="back-link" href="/posts">← Back to all posts</Link>
        </div>
    )
};

export default PostPage;
