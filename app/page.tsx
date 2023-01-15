import Link from "next/link";
import getPostMetadata from "../components/getPostMetadata";
import PostPreview from "../components/PostPreview";
import About from "../components/About";
import Socials from "../components/Socials";
import Image from "next/image";
import profilePicture from "../public/profile.png"

const HomePage = () => {
    const postMetadata = getPostMetadata();
    
    const postPreviews = postMetadata.map((post)=> (
        <PostPreview key={post.slug} {...post}/>
    ));
    
    const aboutDetails = <About></About>;
    const socials = <Socials></Socials>;
    return (
        <div> 
            <div className="flex flex-wrap justify-center">
                <Image src ={profilePicture} alt="profile" height={150} width={150}></Image>
            </div>
            {aboutDetails}
            <br></br>
            {/* {socials}
            <br></br> */}
            <h1 className="text-2xl font-bold text-black">Posts</h1>
            <br></br>
            {postPreviews} 
        </div>
    );
    
};

export default HomePage;