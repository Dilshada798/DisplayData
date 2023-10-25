
// import Rating from './rating.js'
// import Delete from './delete';

// function Movierow({ movie, likes, onLike, onDislike, onDelete }) {
//     return (
//         <div className="moviesrow">
//             <div className="col21">
//                 <img className="display_img" src="Dear Zindagi.png" alt="no" />
//             </div>

//             <div className="col22">
//                 <div className="col23">
//                     <h1>{movie.name}</h1>
//                     <p>{movie.release_date}</p>
//                     <p>{movie.Description}</p>
//                 </div>
//                 <Rating
//                     onLike={onLike}
//                     onDislike={onDislike}
//                     likes={likes}
//                 />
//                 <Delete onDelete={onDelete} />
//             </div>
//             <hr />
//         </div>
//     );
// }
// export default Movierow;
import React from 'react';

function Movierow({ movie, likes, onLike, onDislike, onDelete }) {
    return (
        <div className="moviesrow">
            <div className="col21">
                <img className="display_img" src={movie.image} alt="Movie Poster" />
            </div>

            <div className="col22">
                <div className="col23">
                    <h1>{movie.name}</h1>
                    <p>{movie.release_date}</p>
                    <p>{movie.description}</p>
                </div>
                <div className="rating">
                    <button onClick={() => onLike(movie.id)}>Like</button>
                    <span>Likes: {likes}</span>
                    <button onClick={() => onDislike(movie.id)}>Dislike</button>
                </div>
                <button onClick={() => onDelete(movie.id)}>Delete</button>
            </div>
            <hr />
        </div>
    );
}

export default Movierow;

