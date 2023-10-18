"use client";
// import React, { useState } from "react";
// import Header from "./header.js";
// import Movierow from "./movie-row.js";
// import Footer from "./footer.js";
// import { movies_data } from './data';

// function useLikes() {
//   const [likes, setLikes] = useState({});

//   const handleVote = (id, value) => {
//     setLikes((prevLikes) => ({
//       ...prevLikes,
//       [id]: (prevLikes[id] || 0) + value,
//     }));
//   };

//   return { likes, handleVote };
// }

// function Page() {
//   const [data, setData] = useState(movies_data);
//   const { likes, handleVote } = useLikes();

//   const handleDelete = (id) => {
//     const updatedMovies = data.filter((item) => item.id !== id);
//     setData(updatedMovies);
//   };

//   const sortedArray = data.sort((a, b) => {
//     let likesA = likes[a.id] || 0;
//     let likesB = likes[b.id] || 0;
//     return likesB - likesA;
//   });

//   return (
//     <div>
//       <Header />
//       <div className="movie-row">
//         {sortedArray.map((item) => (
//           <Movierow
//             key={item.id}
//             movie={item}
//             onDelete={() => handleDelete(item.id)}
//             onLike={() => handleVote(item.id, 1)}
//             onDislike={() => handleVote(item.id, -1)}
//             likes={likes[item.id]}
//           />
//         ))}
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default Page;

import React, { useState } from "react";
import Header from "./header.js";
import Movierow from "./movie-row.js";
import Footer from "./footer.js";
import { movies_data } from './data';

function useLikes() {
  const [likes, setLikes] = useState({});

  const handleVote = (id, value) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [id]: (prevLikes[id] || 0) + value,
    }));
  };

  return { likes, handleVote };
}

function Page() {
  const [data, setData] = useState(movies_data);
  const { likes, handleVote } = useLikes();

  const handleDelete = (id) => {
    const updatedMovies = data.filter((item) => item.id !== id);
    setData(updatedMovies);
  };

  return (
    <div>
      <Header />
      <div className="movie-row">
        {renderMovieRows(data, handleDelete, handleVote, likes)}
      </div>
      <Footer />
    </div>
  );
}

function renderMovieRows(data, handleDelete, handleVote, likes) {
  return data
    .sort((a, b) => {
      const likesA = likes[a.id] || 0;
      const likesB = likes[b.id] || 0;
      return likesB - likesA;
    })
    .map((item) => (
      <Movierow
        key={item.id}
        movie={item}
        onDelete={() => handleDelete(item.id)}
        onLike={() => handleVote(item.id, 1)}
        onDislike={() => handleVote(item.id, -1)}
        likes={likes[item.id]}
      />
    ));
}

export default Page;
