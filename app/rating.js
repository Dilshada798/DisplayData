
import React, { useState } from "react"
function Rating({ onLike, likes, onDislike }) {
    return (
        <>
      <div className="container1">
      <img
        className="like_btn"
        src="like_btn.png"
        alt="no"
        onClick={onLike}
      />
      <span>
        <div className="displaydata">
          <span className="circle">{likes}</span>
        </div>
      </span>
      <img
        className="dislike_btn"
        src="dislike.png"
        alt="no"
        onClick={onDislike}
      />
    </div>
        </>
    );
};
export default Rating;


