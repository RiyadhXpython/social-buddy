import React from 'react';
import { useHistory } from 'react-router';

const Post = (props) => {
    const {id, title, body} = props.post;
    const history = useHistory();
    const showComments = id => {
        const url = `post/${id}`;
        history.push(url);
    }
    return (
        <div>
            <h2><strong> ID : {id}</strong>{title}</h2>
            <h5>{body}</h5>
            <button onClick={()=> showComments (id, title)}>Show Comments</button>
        </div>
    );
};

export default Post;