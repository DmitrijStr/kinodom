import React from 'react';

import libraryImg from '../images/library.svg'
import personImg from '../images/person.svg'
import worldImg from '../images/world.svg'


import shoushenk from '../images/shoushenk.jpg'
import student from '../images/student2.png'
import muzhik from '../images/vodyanoi.jpg'

function Main() {
	return (
		<main className="content">

			<section className="main">
				<div className="main__description">
					<h1 className="main__title">Лучшее кино у вас дома</h1>
					<p className="main__text">В онлайн-кинотеатре собрана библиотека лучшие иностранные фильмы и сериалы. Смотрите их в дубляже или на языке оригинала с субтитрами.</p>
					<button className="button main__button">Смотреть бесплатно</button>
					<p className="main__promo">Первый месяц использования — бесплатно</p>
				</div>
				<div className="main__info">
					<div className='main__info-item'>
						<img className="main__info-img" src={libraryImg}></img>
						<p className="main__info-text">10 000 фильмов и сериалов уже в библиотеке для вас и вашей семьи</p>
					</div>
					<div className='main__info-item'>
						<img className="main__info-img" src={personImg}></img>
						<p className="main__info-text">Персонализированный список рекомендаций на основе ваших интересов</p>
					</div>
					<div className='main__info-item'>
						<img className="main__info-img" src={worldImg}></img>
						<p className="main__info-text">Кино со всего мира, включая Европу, Азию, Груцию, Турцию и Иорданию</p>
					</div>
				</div>
			</section>

			<section className="raiting">
				<div className="raiting__content">
					<h2 className='title raiting__title'>Фильмы с высоким рейтингом</h2>
					<div className='raiting__card-container'>

						<div className="raiting__card">
							<div className="raiting__card-raiting">
								<p className="raiting__raiting-count">9,1</p>
							</div>
							<div className="raiting__card-image-container">
								<img className="raiting__card-image" src={shoushenk}></img>
							</div>
							<p className="raiting__card-title">Побег из Шоушенка</p>
							<div className="raiting__card-description">
								<p className="raiting__card-info raiting__card-info_type_year">1994</p>
								<p className="raiting__card-info raiting__card-info_type_country">США</p>
							</div>
							<p className="raiting__card-info raiting__card-info_type_price">Бесплатно</p>
						</div>
						<div className="raiting__card">
							<div className="raiting__card-raiting">
								<p className="raiting__raiting-count">9,1</p>
							</div>
							<div className="raiting__card-image-container">
								<img className="raiting__card-image" src={shoushenk}></img>
							</div>
							<p className="raiting__card-title">Побег из Шоушенка</p>
							<div className="raiting__card-description">
								<p className="raiting__card-info raiting__card-info_type_year">1994</p>
								<p className="raiting__card-info raiting__card-info_type_country">США</p>
							</div>
							<p className="raiting__card-info raiting__card-info_type_price">Бесплатно</p>
						</div>
						<div className="raiting__card">
							<div className="raiting__card-raiting">
								<p className="raiting__raiting-count">9,1</p>
							</div>
							<div className="raiting__card-image-container">
								<img className="raiting__card-image" src={shoushenk}></img>
							</div>
							<p className="raiting__card-title">Побег из Шоушенка</p>
							<div className="raiting__card-description">
								<p className="raiting__card-info raiting__card-info_type_year">1994</p>
								<p className="raiting__card-info raiting__card-info_type_country">США</p>
							</div>
							<p className="raiting__card-info raiting__card-info_type_price">Бесплатно</p>
						</div>
						<div className="raiting__card">
							<div className="raiting__card-raiting">
								<p className="raiting__raiting-count">9,1</p>
							</div>
							<div className="raiting__card-image-container">
								<img className="raiting__card-image" src={shoushenk}></img>
							</div>
							<p className="raiting__card-title">Побег из Шоушенка</p>
							<div className="raiting__card-description">
								<p className="raiting__card-info raiting__card-info_type_year">1994</p>
								<p className="raiting__card-info raiting__card-info_type_country">США</p>
							</div>
							<p className="raiting__card-info raiting__card-info_type_price">Бесплатно</p>
						</div>
						<div className="raiting__card">
							<div className="raiting__card-raiting">
								<p className="raiting__raiting-count">9,1</p>
							</div>
							<div className="raiting__card-image-container">
								<img className="raiting__card-image" src={shoushenk}></img>
							</div>
							<p className="raiting__card-title">Побег из Шоушенка</p>
							<div className="raiting__card-description">
								<p className="raiting__card-info raiting__card-info_type_year">1994</p>
								<p className="raiting__card-info raiting__card-info_type_country">США</p>
							</div>
							<p className="raiting__card-info raiting__card-info_type_price">Бесплатно</p>
						</div>
					</div>
				</div>
			</section>

			<section className="sale">
				<div className="sale__descrition">
					<h2 className="title sale__title">Скидка 50%</h2>
					<p className="sale__text">За активность в аккаунте: написание рецензий, прохождение квизов, составление собственных подборок — скидка 50% на любой тариф при следующей оплате доступа к сервису</p>
					<a className="sale__link">Подробнее</a>
				</div>
			</section>

			<section className="tariff">
				<h2 className='title tariff__title'>Тарифы</h2>
				<div className='tariff__container'>
					<div className="tariff__card">
						<div className="tariff__card-container">
							<p className="tariff__card-title">Долгосрочный</p>
							<p className="tariff__description">Единовременная оплата за 2 год — 6 000 руб.</p>
							<p className="tariff__price">250 руб. / месяц</p>
							<button className="button tariff__button">выбрать</button>
						</div>
					</div>
					<div className="tariff__card">
						<div className="tariff__card-container">
							<p className="tariff__card-title">Долгосрочный</p>
							<p className="tariff__description">Единовременная оплата за 2 год — 6 000 руб.</p>
							<p className="tariff__price">250 руб. / месяц</p>
							<button className="button tariff__button">выбрать</button>
						</div>
					</div>
					<div className="tariff__card">
						<div className="tariff__card-container">
							<p className="tariff__card-title">Долгосрочный</p>
							<p className="tariff__description">Единовременная оплата за 2 год — 6 000 руб.</p>
							<p className="tariff__price">250 руб. / месяц</p>
							<button className="button tariff__button">выбрать</button>
						</div>
					</div>
				</div>
			</section>
			<section className="student-promo">
				<img className="student-promo__image" src={student}></img>
				<div className="student-promo__container">
					<h2 className="title student-promo__title">Студент?</h2>
					<p className="student-promo__text">Приложите фото действующего студенческого билета при выборе тарифа и получите скидку 50% до конца текущего года.</p>
				</div>
			</section>
			<section className="selections">
				<h2 className="title selections__title">Подборки</h2>
				<div className="selections__cards">
					<div className="selections__card">
						<img className="selections__card-image" src={muzhik}></img>
						<p className="selections__card-title">Популярное в подписках</p>
					</div>
					<div className="selections__card">
						<img className="selections__card-image" src={muzhik}></img>
						<p className="selections__card-title">Популярное в подписках</p>
					</div>
					<div className="selections__card">
						<img className="selections__card-image" src={muzhik}></img>
						<p className="selections__card-title">Популярное в подписках</p>
					</div>
					<div className="selections__card">
						<img className="selections__card-image" src={muzhik}></img>
						<p className="selections__card-title">Популярное в подписках</p>
					</div>

				</div>



			</section>


		</main>
	)
}

export default Main;