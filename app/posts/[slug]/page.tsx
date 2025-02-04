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
      description: post.data.excerpt || "Post by Arif Aulakh",
      openGraph: {
        title: post.data.title,
        description: post.data.excerpt || "Post by Arif Aulakh",
        images: [
          {
            url: post.data.image || '/profile.png', // fallback to your profile picture
            width: 1200,
            height: 630,
            alt: post.data.title,
          },
        ],
      },
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
            <h1 className="text-2xl font-bold text-black">{post.data.title}</h1>
            <h2 className="text-slate-400">{post.data.date}</h2>
            <article className="prose lg:prose-base">
                <Markdown options={options}>{post.content}</Markdown>
            </article>
            <br></br>
            <Link href ="../posts">
                <h1 className="font-bold text-blue-600 hover:underline"> Back to all posts </h1>
            </Link>
        </div>
    )
};

export default PostPage;