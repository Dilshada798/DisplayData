
import React, { useState } from "react"
function Rating({ onLike, likes, onDislike }) {
    return (
        <>
            <button onClick={onLike}>like</button>
            <span className="circle">{likes}</span>
            <button onClick={onDislike}>dislike</button>

        </>
    );
};

export default Rating;


