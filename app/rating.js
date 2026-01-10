import React from "react"

function Rating({ onLike, likes, onDislike }) {
    return (
        <div className="container1">
            <img
                className="like_btn"
                src="/like_btn.png"
                alt="Like"
                onClick={onLike}
            />
            <div className="displaydata">
                <span className="circle">{likes || 0}</span>
            </div>
            <img
                className="dislike_btn"
                src="/dislike.png"
                alt="Dislike"
                onClick={onDislike}
            />
        </div>
    );
}

export default Rating;


