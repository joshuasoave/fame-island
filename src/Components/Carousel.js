import React, { useState } from "react";
import "../App.css";
import { cast } from "../Constants/cast";

const Carousel = () => {
  const [currentMemberIndex, setCurrentMemberIndex] = useState(0);

  const nextMember = () => {
    setCurrentMemberIndex((prevIndex) => (prevIndex + 1) % cast.length);
  };

  const prevMember = () => {
    setCurrentMemberIndex(
      (prevIndex) => (prevIndex - 1 + cast.length) % cast.length
    );
  };

  return (
    <div className="Carousel">
      <h2>Meet the Cast</h2>
      <div className="Carousel-content">
        <div className="Cast-member">
          <div className="Cast-member-wrapper">
            <img
              src={cast[currentMemberIndex].image}
              alt={cast[currentMemberIndex].name}
            />
            <h4>{cast[currentMemberIndex].name}</h4>
            <p>{cast[currentMemberIndex].description}</p>
          </div>
          <button onClick={prevMember} className="prev">
            Prev
          </button>
          <button onClick={nextMember} className="next">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
