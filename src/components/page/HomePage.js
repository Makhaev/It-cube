import React, { useState } from 'react';
import './page.css';
import Form from '../form/Form';
import TrainingSection from '../trainingSection/TrainingSection';

function HomePage() {
  const [fio, setFio] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const applicationData = {
      fio: "ФИО",
      birthDate: "Дата рождение",
    };

    try {
      const response = await fetch('/api/applications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(applicationData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Заявление успешно отправлено!');
        setFio('');
        setBirthDate('');
      } else {
        setMessage(`Ошибка отправки: ${data.message}`);
        setFio('');
        setBirthDate('');
      }
    } catch (error) {
      setMessage(`Ошибка: ${error.message}`);
      setFio('');
      setBirthDate('');
    }
  };


  return (
    <div className="home-page"> 
      <h1 className="home-page__button">Заявка</h1> 
      <h2 className="home-page__title">Пакеты документов для поступления</h2> 
      <ul className="home-page__list"> 
        <li className="home-page__list-item">Копия паспорта родителя (Главная страница и прописка)</li> 
        <li className="home-page__list-item">Копия свидетельства о рождении ребенка (До 14 лет)</li>
        <li className="home-page__list-item">Копия паспорта ребенка (14+)</li>
        <li className="home-page__list-item">Копия удостоверения многодетной семьи (при наличии)</li>
      </ul>
       <div className='components'>

       <Form fio ={fio} birthDate = {birthDate} message ={message}  setBirthDate = {setBirthDate} handleSubmit = {handleSubmit}  setFio = {setFio}/>
       </div>
       <TrainingSection/>
    </div>
  );
}

export default HomePage;