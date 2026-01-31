import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
    return (
        <Link href={`/posts/${props.slug}`}>
            <div className="group py-3 border-b border-gray-100 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-600 transition-colors duration-200">
                <h2 className="font-medium text-gray-900 dark:text-gray-100 group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors duration-200 mb-1">
                    {props.title}
                </h2>
                <p className="text-sm text-gray-400 dark:text-gray-500">{props.date}</p>
            </div>
        </Link>
    );
};
export default PostPreview;