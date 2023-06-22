import { useState, useEffect } from 'react';
import api from '../utils/Api';
import Card from './Card';

function Main({ onEditProfile, onAddCards, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = useState();
  const [userDescription, setUserDescription] = useState();
  const [userAvatar, setUserAvatar] = useState();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.initialUsers(), api.initCardsFromServer()])
      .then(([userData, initialCards]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCards(initialCards.map((data) => ({
          likeId: data.likes,
          name: data.name,
          link: data.link,
          cardId: data._id,
        })));
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });


  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__info">
          <img
            className="profile__avatar"
            src={userAvatar}
            alt="Фотография знаменитого учёного Жака-Ив Кусто"
          />
          <button className="profile__avatar-edit" onClick={onEditAvatar} type="button">
            <img className="profile__avatar-pen" src="<%=require('./images/edit-avatar-pen.svg')%>" alt="Кнопка" />
          </button>
          <div className="profile__editable-information">
            <div className="profile__container">
              <h1 className="profile__name">{userName}</h1>
              <button className="profile__edit-button button" type="button" aria-label="Редактировать" onClick={onEditProfile} />
            </div>
            <p className="profile__activity">{userDescription}</p>
          </div>
        </div>
        <button className="profile__add-button button" onClick={onAddCards} type="button" aria-label="Добавить" />
      </section>
      <section className="cards">
        <ul className="cards__list">
          {cards.map((card) => (
            <Card 
              key={card.cardId}
              likes={card.likeId}
              name={card.name}
              link={card.link}
              onCardClick={onCardClick}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;