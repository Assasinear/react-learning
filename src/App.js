import {useEffect, useState} from 'react';
import axios from "axios";
import Posts from "./components/Posts";
import Pagination from "./components/Pagination";

function App() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10)

    useEffect(() => {
        const getPosts = async () => {
            setLoading(true)
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
            setPosts(res.data)
            setLoading(false)
        }
        getPosts()

    }, []);

    const handleNavigation = (page) => {
        setCurrentPage(page);
    }

    const lastPostIndex = currentPage * postsPerPage
    const firstPostIndex = lastPostIndex - postsPerPage
    const currentPost = posts.slice(firstPostIndex, lastPostIndex)

    const paginate = pageNumber => setCurrentPage(pageNumber)

    return (
        <div>
            <h1>Posts</h1>
            <Posts posts={currentPost} loading={loading}/>
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={posts.length}
                paginate={paginate}
            />
        </div>
    );
}


export default App;
