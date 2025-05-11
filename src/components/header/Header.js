import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../img/logo.jpg'

function Header (){
    return (
        <header className='header'>
        <div className='logo'>
          <img className='img-logo' src={logo} alt="logo"/>
        </div>
        <nav className='header-nav'>
          <ul className='menu'>
            <li className='menu-list'><Link className='menu-item' to="/">Главная</Link></li>
            <li className="menu-list"><Link className='menu-item' to="/news">Обучение</Link></li>
            <li className="menu-list"><Link to="/news">Конкурсы</Link></li>
            <li className='menu-list'>Документы</li>
            <li className='menu-list'>Федеральный проект</li>
            <li className='menu-list'><Link to="/teachers">Педагоги</Link></li>
          </ul>
        </nav>
      </header>
    )
}

export default Header;
