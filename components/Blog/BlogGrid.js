import React from "react";
import Post from "./Post";

export default function BlogGrid({ posts = [], prefix= '', language }){
    const row = [];

    for(let index = 0; index < posts.length; index+= 3){
        row.push(posts.slice(index, index + 3));
    }

    return (
        <div className="container">
            {row.map((rw, k) => (
                <div className="row" key={k}>
                    {rw.map((post, index) => (
                        <div key={post.id} className="col-md-4 mb-50">
                            <Post post={post} prefix={prefix} language={language} />
                        </div>
                    ))}    
                </div>
            ))}
        </div>
    );
}