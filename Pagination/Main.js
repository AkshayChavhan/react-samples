import React ,{ useState , useEffect } from "react";
import axios from "axios";
import Post from "./Post";
import Pagination from "./Pagination";

export default function Main(){
   
    const [ posts , setPosts ] = useState([]);
    const [loading ,setLoading ] = useState(false);
    const [currentPage , setCurrentPage ] = useState(1);
    const [ postPerPage , setPostPerPage ] = useState(10);

    const paginate = (pageNumber) =>{
        setCurrentPage(pageNumber); 
    }
    
    useEffect(()=>{
        const fetchPosts = async () =>{
            setLoading(true);
            const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
            setPosts(res.data);
            setLoading(false);
        }
        fetchPosts();
    }, [] );

    //Get current posts
    const indexOfLastPost =currentPage * postPerPage ;
    const indexOfFirstPost = indexOfLastPost - postPerPage ;
    const currentPosts = posts.slice(indexOfFirstPost , indexOfLastPost);

    return(
       <div className="container">
           <h1 className="text-primary mb-3">My Blog</h1>
            <Post posts={ currentPosts } loading={ loading } />
            <Pagination postPerPage={postPerPage} 
            totalPosts={posts.length} 
            paginate={paginate}/>
       </div>
    )
}