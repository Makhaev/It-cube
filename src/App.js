
import './App.css';
import logo from './img/logo.jpg';
import background from './img/background.jpg'
function App() {
  return (
    <div className='App'>
      <header className='header'>
        <div className='logo'>
          <img className='img-logo' src={logo}/>
        </div>
        <nav className='header-nav'>
          <ul className='menu'>
            <li className='menu-list'>Новости</li>
            <li className='menu-list'>Конкурсы</li>
            <li className='menu-list'>Документы</li>
            <li className='menu-list'>Федеральный проект</li>
          </ul>
        </nav>

      </header>
    </div>
  );
}

export default App;
