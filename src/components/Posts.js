import React from "react";

const Posts = ({posts, loading}) => {

    if (loading) {
        return <h2>Loading...</h2>
    }

    return (
        <ul>
            {
                posts.map((post, i) => (
                    <details>
                        <summary><b>{post.title}</b></summary>
                        <p>{post.body}</p>
                    </details>
                ))
            }
        </ul>

    )
}

export default Posts;