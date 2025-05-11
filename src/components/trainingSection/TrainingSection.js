import React from 'react';
import './TrainingSection.css'; // Подключите стили

const TrainingSection = () => {
  const courses = [
    {
      id: 1,
      title: 'Основы программирования на Python',
      description: 'Курс для начинающих, изучающих основы программирования на Python.',
      duration: '3 месяца',
    },
    {
      id: 2,
      title: 'Веб-разработка с React',
      description: 'Интенсивный курс по созданию современных веб-приложений с использованием React.',
      duration: '4 месяца',
    },
    {
      id: 3,
      title: 'Дизайн интерфейсов',
      description: 'Курс по созданию привлекательных и удобных пользовательских интерфейсов.',
      duration: '2 месяца',
    },
  ];

  return (
    <section className="training-section">
      <h2 className="training-section__title">Наши курсы</h2>
      <ul className="training-section__list">
        {courses.map((course) => (
          <li key={course.id} className="training-section__item">
            <h3 className="training-section__course-title">{course.title}</h3>
            <p className="training-section__course-description">{course.description}</p>
            <p className="training-section__course-duration">Длительность: {course.duration}</p>
            <button className="training-section__course-button">Подробнее</button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TrainingSection;