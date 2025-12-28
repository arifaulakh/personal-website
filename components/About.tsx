import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";


const getAboutContent = () => {
    const file = "components/about.md";
    const content = fs.readFileSync(file, "utf8");
    const matterResult = matter(content);
    return matterResult;
}
const About = () => {
    const about = getAboutContent();
    return (
        <div>
            <article className="prose prose-gray max-w-none">
                <Markdown>{about.content}</Markdown>
            </article>
        </div>
    )
};

export default About;