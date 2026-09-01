import { Metadata } from "next";
import getPostMetadata from "../../components/getPostMetadata";
import PostPreview from "../../components/PostPreview";

export const generateMetadata = (): Metadata => {
    return {
      title: "Posts",
      description: "Blog posts written by Arif Aulakh"
    };
  };

const WritingsPage = () => {
    const postMetadata = getPostMetadata();
    const postPreviews = postMetadata.map((post)=> (
        <PostPreview key={post.slug} {...post}/>
    ));

    return <div className="index-page">
        <h1>Posts</h1>
        <div className="index-list">
            {postPreviews}
        </div>
    </div>;
};

export default WritingsPage;
