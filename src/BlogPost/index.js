import React from 'react'

function BlogPost({post, index, handleDeletePost, }){
    return(
        <li>
            <h3>{post.title}</h3>
            <h5>{post.author}</h5>
            <h6>{post.post}</h6>
            <button onClick={() => handleDeletePost(index)}>Delete</button>
        </li>
        )

}

export default BlogPost