"use client";
import React, { useState } from "react";

function AddMovie({ isOpen, onClose, onAddMovie }) {
  const [formData, setFormData] = useState({
    name: "",
    release_date: "",
    type: "",
    img: "",
    Description: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name || !formData.release_date || !formData.Description) {
      alert("Please fill in all required fields (Name, Release Date, Description)");
      return;
    }

    // Add the movie
    onAddMovie(formData);
    
    // Reset form
    setFormData({
      name: "",
      release_date: "",
      type: "",
      img: "",
      Description: ""
    });
    
    // Close modal
    onClose();
  };

  const handleClose = () => {
    setFormData({
      name: "",
      release_date: "",
      type: "",
      img: "",
      Description: ""
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Add New Movie</h2>
          <button className="modal-close-btn" onClick={handleClose}>×</button>
        </div>
        
        <form onSubmit={handleSubmit} className="movie-form">
          <div className="form-group">
            <label htmlFor="name">Movie Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g., The Matrix"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="release_date">Release Date & Duration *</label>
            <input
              type="text"
              id="release_date"
              name="release_date"
              value={formData.release_date}
              onChange={handleChange}
              placeholder="e.g., 1999 • 2h 16m"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="type">Genre/Type</label>
            <input
              type="text"
              id="type"
              name="type"
              value={formData.type}
              onChange={handleChange}
              placeholder="e.g., Action, Sci-Fi"
            />
          </div>

          <div className="form-group">
            <label htmlFor="img">Image Filename</label>
            <input
              type="text"
              id="img"
              name="img"
              value={formData.img}
              onChange={handleChange}
              placeholder="e.g., movie-poster.png (place in /public folder)"
            />
            <small>Place the image file in the /public folder</small>
          </div>

          <div className="form-group">
            <label htmlFor="Description">Description *</label>
            <textarea
              id="Description"
              name="Description"
              value={formData.Description}
              onChange={handleChange}
              placeholder="Enter movie description..."
              rows="4"
              required
            />
          </div>

          <div className="form-actions">
            <button type="button" className="btn-cancel" onClick={handleClose}>
              Cancel
            </button>
            <button type="submit" className="btn-submit">
              Add Movie
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddMovie;

