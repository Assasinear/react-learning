import {useState} from 'react';
import Post1 from "./Post 1";
import NavigationBar from "./NavigationBar";
import Post2 from "./Post 2";
import Post3 from "./Post 3";

function App() {
    const [currentPage, setCurrentPage] = useState('Post1');

    const handleNavigation = (page) => {
        setCurrentPage(page);
    }

    return (
        <div>
            <NavigationBar onNavigate={handleNavigation}/>
            {currentPage === 'Post 1' && <Post1/>}
            {currentPage === 'Post 2' && <Post2/>}
            {currentPage === 'Post 3' && <Post3/>}
        </div>
    );
}

export default App;
