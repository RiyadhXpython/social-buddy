import React from 'react';

const Comments = (props) => {
    const {name, email} = props.comment;
    return (
        <div>
            {name}: 
            {email}
        </div>
    );
};

export default Comments;