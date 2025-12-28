import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
    return (
        <Link href={`/posts/${props.slug}`}>
            <div className="group py-3 border-b border-gray-100 hover:border-gray-300 transition-colors duration-200">
                <h2 className="font-medium text-gray-900 group-hover:text-gray-600 transition-colors duration-200 mb-1">
                    {props.title}
                </h2>
                <p className="text-sm text-gray-400">{props.date}</p>
            </div>
        </Link>
    );
};
export default PostPreview;