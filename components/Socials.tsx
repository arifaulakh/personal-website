import { Linkedin, Github, Twitter, Email } from "./svgs";
import Link from "next/link";

const Socials = () => {
    return (
        <div className="flex justify-center space-x-5">
            <Link
                href="https://www.linkedin.com/in/arifaulakh"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200"
            >
                <Linkedin className="w-5 h-5" />
            </Link>
            <Link
                href="https://www.github.com/arifaulakh"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200"
            >
                <Github className="w-5 h-5" />
            </Link>
            <Link
                href="https://twitter.com/arifaulakh"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200"
            >
                <Twitter className="w-5 h-5" />
            </Link>
            <Link
                href="mailto:arifaulakh@gmail.com"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200"
            >
                <Email className="w-5 h-5" />
            </Link>
        </div>
    );
}

export default Socials;