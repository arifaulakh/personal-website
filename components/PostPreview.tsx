import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
    return (
        <Link className="post-preview" href={`/posts/${props.slug}`}>
            <span>{props.title}</span>
            <time dateTime={props.dateISO}>{props.date}</time>
        </Link>
    );
};
export default PostPreview;
