import React from "react";
import './Post.css'
import useFetch from "react-fetch-hook";

function Post() {
    const { isLoading, error, data } = useFetch("http://localhost:8000/blog/");

    if (isLoading)
        return "Loading...";

    if (error)
        return "Error!";

    return (
        <div className="Posts">
            <ul>
                { data.map((item) => (
                    <div className="Post">
                        <br/>
                        { item.title }
                        <br/>
                        <br/>
                        { item.description }
                        <br/>
                        <br/>
                        { item.content }
                        <br/>
                        <br/>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default Post;