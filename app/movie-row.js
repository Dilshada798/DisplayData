import Rating from './rating.js'
import Delete from './delete';
import { useState } from 'react';

function Movierow({ movie, likes, onLike, onDislike, onDelete }) {
    // Check if image is missing or is the placeholder "image 1.png"
    const hasValidImage = movie.img && movie.img !== "image 1.png";
    const [imageError, setImageError] = useState(!hasValidImage);
    const [imageSrc, setImageSrc] = useState(hasValidImage ? `/${movie.img}` : null);

    const handleImageError = () => {
        setImageError(true);
    };

    return (
        <div className="moviesrow">
            <div className="col21">
                {!imageError && imageSrc ? (
                    <img 
                        className="display_img" 
                        src={imageSrc} 
                        alt={movie.name}
                        onError={handleImageError}
                    />
                ) : (
                    <div className="no-image-placeholder">
                        <div className="no-image-icon">🎬</div>
                        <div className="no-image-text">No Image Found</div>
                    </div>
                )}
            </div>

            <div className="col22">
                <div className="col23">
                    <h1>{movie.name}</h1>
                    <p>{movie.release_date}</p>
                    {movie.type && <p style={{ color: '#888', fontSize: '14px', marginBottom: '12px' }}>{movie.type}</p>}
                    <p>{movie.Description}</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '20px' }}>
                    <Rating
                        onLike={onLike}
                        onDislike={onDislike}
                        likes={likes || 0}
                    />
                    <Delete onDelete={onDelete} />
                </div>
            </div>
        </div>
    );
}
export default Movierow;
