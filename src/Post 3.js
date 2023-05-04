import React, {useState, useEffect} from "react";

function Post3() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts/3")
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <div>
            <h1>{JSON.stringify(data.title)}</h1>
            <ul>
                {JSON.stringify(data.body)}
            </ul>
        </div>
    );
}

export default Post3;