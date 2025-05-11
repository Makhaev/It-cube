import React from 'react';
import photo from './foto.jpg';
import './MyComponent.css';

const MyComponent = () => {
  return (
    <div className="educational-institution"> {/* Главный контейнер */}
      <header className="educational-institution__header">
        <h1 className="educational-institution__title">Центр цифрового образования "IT-cube"</h1>
        <p className="educational-institution__slogan">Раскройте свой потенциал в мире IT!</p>
      </header>

      <section className="educational-institution__main-content">
        <div className="my-component__image-container">
          <img src={photo} alt="Фото Махаева Адама Махмудовича" className="my-component__image" />
          <p className="FIO">Махаев Адам Махмудович</p>
          <p className="my-component__image-description">Руководитель Центра цифрового образования "IT-cube"</p>
        </div>

        <div className="educational-institution__about">
          <h2 className="educational-institution__subtitle">О нас</h2>
          <p>
            Центр цифрового образования "IT-cube" - это инновационная площадка для обучения детей и подростков современным информационным технологиям. Мы предлагаем широкий спектр образовательных программ, направленных на развитие навыков программирования, веб-разработки, дизайна и других востребованных направлений IT.
          </p>
          <p>
            Наша цель - подготовить новое поколение IT-специалистов, способных создавать инновационные продукты и решения для цифровой экономики.
          </p>
        </div>
      </section>

      <footer className="educational-institution__footer">
        <p>&copy; 2020 Центр цифрового образования "IT-cube"</p>
      </footer>
    </div>
  );
};

export default MyComponent;