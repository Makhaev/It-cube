
import './App.css';
import Header from './components/header/Header';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './components/page/HomePage';
import NewsPage from './components/page/NewsPage';
import MyComponent from './components/page/MainPage/MyComponent';
import TeacherSlider from './components/page/Teachers';
import log from './components/page/MainPage/foto.jpg'


export const teachersData = [
  {
    id: 1,
    name: 'Иванов Иван Иванович',
    position: 'Преподаватель математики',
    description: 'Опыт работы 10 лет. Специализируется на подготовке к ЕГЭ.',
    photo: 'url-to-photo-1.jpg', // Замените на реальные URL
  },
  {
    id: 2,
    name: 'Петрова Анна Сергеевна',
    position: 'Преподаватель информатики',
    description: 'Эксперт в области веб-разработки и программирования на JavaScript.',
    photo: log, // Замените на реальные URL
  },
  
];



function App() {
  return (
   <Router>
     <div className='App'>
      <div className='bacground'></div>
    
     <Header/>
     <Routes> 
          <Route path="/" element={<MyComponent/>} />
          <Route path="/news" element={<HomePage/>} />
          <Route path="/news" element={<NewsPage/>} />
          <Route path="/teachers" element={<TeacherSlider teachers={teachersData}/>} />
          
        </Routes>
       
    </div>
   </Router>
  );
}

export default App;
