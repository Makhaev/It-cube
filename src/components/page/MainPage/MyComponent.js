import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram, faWhatsapp, faInstagram, faVk } from '@fortawesome/free-brands-svg-icons';
import './MyComponent.css';

function Slader() {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const response = await fetch('http://192.168.30.108:8000/api/main/slider/');
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setSlides(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSlides();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="slider">
      {slides.map((slide, index) => (
        <div className="slide" key={index}> 
          <h2>{slide.title}</h2>
          <img src={slide.image} alt={slide.title} />
          <p>{slide.description}</p>
        </div>
      ))}
    </div>
  );
}









const MyComponent = () => {
  
  return (
    <div className="educational-institution"> {/* Главный контейнер */}
      <div className="educational-institution__header">
        <h1 className="educational-institution__title">Центр цифрового образования "IT-cube"</h1>
        <p className="educational-institution__slogan">Раскройте свой потенциал в мире IT!</p>
      </div>
       
      <section className="educational-institution__main-content">
      
        <div>
        <Slader/>
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
       
        <div className='Socialmedia'> 
                <a href="https://t.me/yourtelegram" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTelegram} size="2x" />
                </a>
                <a href="https://wa.me/yourwhatsapp" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                </a>
                <a href="https://www.instagram.com/yourinstagram" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                <a href="https://vk.com/yourvk" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faVk} size="2x" />
                </a>
            </div>
       
      </footer>
    </div>
  );
};

export default MyComponent;