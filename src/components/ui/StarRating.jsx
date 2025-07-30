import React from "react";
import { IoIosStar } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";

const StarRating = ({ rating }) => {
  const maxStars = 5;

  return (
    <div>
      {[...Array(maxStars)].map((_, index) => (
        <span key={index}>
          {index < rating ? (
            <IoIosStar color="#ffd700" size={16} />
          ) : (
            <IoIosStarOutline color="#ffd700" size={16} />
          )}
        </span>
      ))}
    </div>
  );
};

export default StarRating;
