import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comments from '../Comments/Comments';

const PostDetail = () => {
    const {id} = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([])
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
        .then((response) =>response.json())
        .then(data => setPost(data));
    },[id]);

    useEffect (() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postID/${id}`;
        fetch(url)
        .then((response) => response.json())
        .then(data => setComments(data));
    },[id])
    return (
        <div>
            <h3>this is post Detail: {id}</h3>
            <p>user posted : {post.id}</p>
            <p>title: {post.title}</p>
            <p>post body : {post.body}</p>
            <p>number of comments : {comments.length}</p>
            {
                comments.map(comment => <Comments comment={comment}></Comments>)
            }
        </div>
    );
};

export default PostDetail;