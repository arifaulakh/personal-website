import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
    return (
        <div>
        <Link href = {`/posts/${props.slug}`}>
            <h1 className="font-bold text-violet-600 underline">{props.title}</h1>
        </Link>
        {/* <p className="text-sm text-slate-400">{props.subtitle}</p> */}
        <p className="text-sm text-slate-400">{props.date}</p>
    </div>
    );
};
export default PostPreview;