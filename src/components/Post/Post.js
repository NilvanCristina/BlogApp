import React, {useEffect, useState} from "react";
import './Post.css'
import { useCustomFetchDataBlogUrl } from "../../utils/ApiCalls";

function Post() {
    const { serverErrorBlogUrl, apiDataBlogUrl } = useCustomFetchDataBlogUrl();

    const [apiData, setApiData] = useState([]);

    useEffect(() => {
       if (apiDataBlogUrl)
           setApiData(apiDataBlogUrl);
    }, [apiDataBlogUrl]);

    useEffect(() => {
        if (serverErrorBlogUrl)
            throw Error("Error when fetching data");

    }, [serverErrorBlogUrl]);

    console.log(apiData);

    return (
        <div className="Posts">
            <ul>
                { apiData.map((item) => (
                    <div className="Post">
                        <br/>
                        { item.title }
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