
import React, { useState, useEffect } from 'react';
import './Teachers.css';



const TeacherSlider = ({ teachers }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? teachers.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % teachers.length);
  };

  return (
    <div className="teacher-slider">
      <button className="teacher-slider__button teacher-slider__button--prev" onClick={goToPrevious}>
        &lt;
      </button>

      <div className="teacher-slider__slide">
        <img src={teachers[currentIndex].photo} alt={teachers[currentIndex].name} className="teacher-slider__photo" />
        <div className="teacher-slider__info">
          <h3 className="teacher-slider__name">{teachers[currentIndex].name}</h3>
          <p className="teacher-slider__position">{teachers[currentIndex].position}</p>
          <p className="teacher-slider__description">{teachers[currentIndex].description}</p>
        </div>
      </div>

      <button className="teacher-slider__button teacher-slider__button--next" onClick={goToNext}>
        &gt;
      </button>
    </div>
  );
};

export default TeacherSlider; 