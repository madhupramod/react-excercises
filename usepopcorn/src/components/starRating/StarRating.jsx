import React, { useState } from "react";
import PropTypes from "prop-types";
import "./StarRating.css";

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "16px",
};

const starContainerStyle = {
  display: "flex",
};

StarRating.propTypes = {
  maxStars: PropTypes.number,
  color: PropTypes.string,
  size: PropTypes.number,
  defaultRating: PropTypes.number,
  onSetRating: PropTypes.func,
};

function StarRating({
  maxStars = 5,
  color = "#fcc419",
  defaultRating = 0,
  size = 48,
  onSetRating,
}) {
  const [rating, setRating] = useState(defaultRating);
  const [tempRating, setTempRating] = useState(0);

  const textStyle = {
    fontSize: `${size / 1.5}px`,
    lineHeight: "1",
    margin: "0",
    color: color,
  };

  function handleRatingChange(rating) {
    setRating(rating);
    onSetRating?.(rating);
  }

  return (
    <div style={containerStyle}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxStars }, (_, i) => {
          return (
            <Star
              key={i}
              full={tempRating ? tempRating > i : rating > i}
              color={color}
              size={size}
              onHoverIn={() => setTempRating(() => i + 1)}
              onHoverOut={() => setTempRating(() => 0)}
              onRate={() => handleRatingChange(i + 1)}
            />
          );
        })}
      </div>
      <p style={textStyle}>{rating}</p>
    </div>
  );
}

function Star({
  full,
  color,
  size,
  onHoverIn,
  onHoverOut,
  onRate,
  onSetRating,
}) {
  const starStyle = {
    width: `${size}px`,
    height: `${size}px`,
    display: "block",
    cursor: "pointer",
  };

  return (
    <>
      {full ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill={color}
          stroke={color}
          style={starStyle}
          onMouseEnter={onHoverIn}
          onMouseLeave={onHoverOut}
          onClick={onRate}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke={color}
          style={starStyle}
          viewBox="0 0 24 24"
          onMouseEnter={onHoverIn}
          onMouseLeave={onHoverOut}
          onClick={onRate}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="{2}"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      )}
    </>
  );
}

export default StarRating;
