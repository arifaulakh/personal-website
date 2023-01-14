import { Linkedin, Github, Twitter, Email } from "./svgs";
import Link from "next/link";

const Socials = () => {
    return (

        <div className="flex justify-center space-x-2">
                <Link href = "https://www.linkedin.com/in/arifaulakh">
                    <Linkedin className = "text-3xl"  />
                </Link>
                <Link href = "https://www.github.com/arifaulakh">
                    <Github className = "text-3xl"/>
                </Link>
                <Link href = "https://twitter.com/arifaulakh">
                    <Twitter className = "text-3xl"/>
                </Link>
                <Link href = "mailto:arifaulakh@gmail.com">
                    <Email className = "text-3xl"/>
                </Link>

        </div>

    );

}

export default Socials;