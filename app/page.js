"use client";
import React, { useState } from "react";
import Header from "./header.js";
import Movierow from "./movie-row.js";
import Footer from "./footer.js";
import AddMovie from "./add_movie.js";
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
  const [isAddMovieOpen, setIsAddMovieOpen] = useState(false);
  const { likes, handleVote } = useLikes();

  const handleDelete = (id) => {
    const updatedMovies = data.filter((item) => item.id !== id);
    setData(updatedMovies);
  };

  const handleAddMovie = (movieData) => {
    // Generate new ID (find max ID and add 1)
    const maxId = data.length > 0 ? Math.max(...data.map(m => m.id)) : 0;
    const newMovie = {
      id: maxId + 1,
      ...movieData,
      // Default image if not provided
      img: movieData.img || "Brave-Movie-PNG-HD-Quality.png"
    };
    setData(prevData => [...prevData, newMovie]);
  };

  const sortedArray = [...data].sort((a, b) => {
    let likesA = likes[a.id] || 0;
    let likesB = likes[b.id] || 0;
    return likesB - likesA;
  });

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header onAddMovieClick={() => setIsAddMovieOpen(true)} />
      <main style={{ flex: 1 }}>
        <div className="movie-row">
          {sortedArray.length > 0 ? (
            sortedArray.map((item) => (
              <Movierow
                key={item.id}
                movie={item}
                onDelete={() => handleDelete(item.id)}
                onLike={() => handleVote(item.id, 1)}
                onDislike={() => handleVote(item.id, -1)}
                likes={likes[item.id]}
              />
            ))
          ) : (
            <div style={{ textAlign: 'center', color: '#fff', padding: '60px 20px', fontSize: '20px' }}>
              No movies to display. Add a movie to get started!
            </div>
          )}
        </div>
      </main>
      <Footer />
      <AddMovie 
        isOpen={isAddMovieOpen}
        onClose={() => setIsAddMovieOpen(false)}
        onAddMovie={handleAddMovie}
      />
    </div>
  );
}
export default Page;