import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "../../../components/getPostMetadata";
import Link from "next/link";
import { Metadata } from "next";

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
      title: `${post.data.title} | Arif Aulakh`, // Use the title from the markdown file
      description: post.data.excerpt || "Post by Arif Aulakh",
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
    return (
        <div>
            <h1 className="text-2xl font-bold text-black">{post.data.title}</h1>
            <h2 className="text-slate-400">{post.data.date}</h2>
            <article className="prose lg:prose-base">
                <Markdown>{post.content}</Markdown>
            </article>
            <br></br>
            <Link href ="../posts">
                <h1 className="font-bold text-blue-600 hover:underline"> Back to all posts </h1>
            </Link>
        </div>
    )
};

export default PostPage;