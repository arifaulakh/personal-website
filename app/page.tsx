import getPostMetadata from "../components/getPostMetadata";
import PostPreview from "../components/PostPreview";
import About from "../components/About";
import Image from "next/image";
import profilePicture from "../public/profile.png";
import Link from "next/link";

const HomePage = () => {

    const postMetadata = getPostMetadata();
    
    const postPreviews = postMetadata.map((post)=> (
        <PostPreview key={post.slug} {...post}/>
    ));
    
    const aboutDetails = <About></About>;
    return (
        <div> 
            <div className="flex flex-wrap justify-center">
                <Image 
                    src={profilePicture} 
                    alt="profile" 
                    width={150} 
                    height={0}
                    priority
                    style={{ width: '150px', height: 'auto' }}
                ></Image>
            </div>
            <br></br>
            {aboutDetails}
            <br></br>
            <Link href="/posts">
                <h1 className="text-2xl font-bold text-black">Writings</h1>
            </Link>
            <br></br>
            {postPreviews} 
            <br></br>
            <p className=" text-gray-500">(Updated February 3, 2025)</p>
        </div>
    );
    
};

export default HomePage;