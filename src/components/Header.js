import React from 'react';
import logoPath from '../images/logo.svg';
import searchButton from '../images/search.svg'
import enterButton from '../images/enter.svg'


function Header() {
	return (
		<header className="header">
			<a href='#'><img className="header__logo" src={logoPath} alt='изображение логотипа' /></a>
			<nav className='header__nav'>
				<a className='header__nav-link'>Акции</a>
				<a className='header__nav-link'>Подборки</a>
				<a className='header__nav-link'>Тарифы</a>
				<a className='header__nav-link'>Фильмы</a>
			</nav>
			<div className='header__buttons'>
				<div className='header__button'>
					<img src={searchButton} alt=''></img>
					<p className='header__button-title'>Поиск</p>
				</div>
				<div className='header__button'>
				<img src={enterButton} alt=''></img>
				<p className='header__button-title'>Вход</p>
				</div>
			</div>
		</header>
	)
}

export default Header;