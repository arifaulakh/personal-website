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
        <h1 className="text-2xl font-medium text-gray-900 mb-8">
            Writings
        </h1>
        <div className="space-y-6">
            {postPreviews}
        </div>
    </div>;
};

export default WritingsPage;