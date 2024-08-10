import { Metadata } from "next";
import getPostMetadata from "../../components/getPostMetadata";
import PostPreview from "../../components/PostPreview";

export const generateMetadata = (): Metadata => {
    return {
      title: "Writings",
      description: "Blog posts written by Arif Aulakh"
    };
  };

const WritingsPage = () => {
    const postMetadata = getPostMetadata();
    const postPreviews = postMetadata.map((post)=> (
        <PostPreview key={post.slug} {...post}/>
    ));

    return <div> 
        <h1 className="text-2xl font-bold text-black">Writings</h1>
        <br></br>
        {postPreviews} 
    </div>;
};

export default WritingsPage;