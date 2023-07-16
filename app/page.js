
"use client";
import React, { useState } from "react";
import Header from "./header.js";
import Movierow from "./movie-row.js";
import Footer from "./footer.js";
import { movies_data } from './data';

function Page() {
  const [data, setData] = useState(movies_data);
  const [likes, setLikes] = useState({});

  const handleDelete = (id) => {
    const updatedMovies = data.filter((item) => item.id !== id);
    setData(updatedMovies);
  };
  const handleVoteUp = (id) => {
    const updatedLikes = { ...likes };

    if (updatedLikes[id] !== undefined) {
      updatedLikes[id] += 1;
    } else {
      updatedLikes[id] = 1;
    }

    setLikes(updatedLikes);
  };
  const handleVoteDown = (id) => {
    const updatedLikes = { ...likes };

    if (updatedLikes[id] !== undefined) {
      updatedLikes[id] -= 1;
    } else {
      updatedLikes[id] = -1;
    }

    setLikes(updatedLikes);
  };
  const sortedArray = data.sort((a, b) => {
    let likesA = 0;
    let likesB = 0;

    if (likes[a.id] !== undefined) {
      likesA = likes[a.id];
    }

    if (likes[b.id] !== undefined) {
      likesB = likes[b.id];
    }

    return likesB - likesA;
  });
  return (
    <div>
      <Header />
      <div className="movie-row">
        {sortedArray.map(item => (
          <Movierow
            key={item.id}
            movie={item}
            onDelete={() => handleDelete(item.id)}
            onLike={() => handleVoteUp(item.id)}
            onDislike={() => handleVoteDown(item.id)}
            likes={likes[item.id]}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Page;

