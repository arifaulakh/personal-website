import getPostMetadata from "../components/getPostMetadata";
import PostPreview from "../components/PostPreview";
import About from "../components/About";
import Image from "next/image";
import profilePicture from "../public/profile.png";
import Link from "next/link";
import { books } from "../data/books";

const HomePage = () => {

    const postMetadata = getPostMetadata();

    const postPreviews = postMetadata.map((post) => (
        <PostPreview key={post.slug} {...post} />
    ));

    const currentlyReading = books.filter((book) => book.status === "reading");

    const aboutDetails = <About></About>;
    return (
        <div>
            <div className="flex justify-center mb-8">
                <Image
                    src={profilePicture}
                    alt="profile"
                    width={140}
                    height={140}
                    priority
                    className="rounded-full"
                    style={{ width: '140px', height: 'auto' }}
                />
            </div>

            <div className="mb-12">
                {aboutDetails}
            </div>

            <div className="mb-6">
                <Link href="/posts">
                    <h2 className="text-xl font-medium text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-200">
                        Writings
                    </h2>
                </Link>
            </div>

            <div className="space-y-6">
                {postPreviews}
            </div>

            {currentlyReading.length > 0 && (
                <>
                    <div className="mt-12 mb-6">
                        <Link href="/reading">
                            <h2 className="text-xl font-medium text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-200">
                                Currently Reading
                            </h2>
                        </Link>
                    </div>

                    <div className="space-y-3">
                        {currentlyReading.map((book) => (
                            <div key={`${book.title}-${book.author}`}>
                                <p className="text-gray-900 dark:text-gray-100">
                                    {book.title}
                                </p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    {book.author}
                                </p>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );

};

export default HomePage;
