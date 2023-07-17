import React, { useState, useEffect } from 'react';
import '../index.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer';
import EditProfilePopup from './EditProfilePopup.js';
import AddCardsPopup from './AddCardsPopup.js';
import EditAvatarPopup from './EditAvatarPopup.js'
import ImagePopup from './ImagePopup';
import CurrentUserContext from '../contexts/CurrentUserContext.js';
import api from '../utils/Api';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  



  useEffect(() => {
    api
      .initCardsFromServer()
      .then((cards) => setCards(cards))
      .catch((err) => console.log(`Ошибка ${err}`))
  }, [])

  useEffect(() => {
    api
      .initialUsers()
      .then((userInfo) => setCurrentUser(userInfo))
      .catch((err) => console.log(`Ошибка ${err}`))
  }, [])

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    if (!isLiked) {
      api.likeCards(card._id)
        .then((newCard) => {
          setCards((state) => state.map((c) => c._id === card._id ? newCard : c))
        })
        .catch((err) => console.log(`Ошибка ${err}`))
    } else {
      api.dislikeCards(card._id)
        .then((newCard) => {
          setCards((state) => state.map((c) => c._id === card._id ? newCard : c))
        })
        .catch((err) => console.log(`Ошибка ${err}`))
    }
  }

  function handleCardDelete(card) {
    api
      .deleteCardFromServer(card._id)
      .then(() => {
        setCards((cards) => cards.filter((c) => c._id !== card._id));
      })
      .catch((err) => console.log(`Ошибка ${err}`))
  }

  function handleUpdateUser(name, about) {
    api
      .loadingUserInfoOnServer(name, about)
      .then((inf) => {
        setCurrentUser(inf)
        closeAllPopups();
      })
      .catch((err) => console.log(`Ошибка ${err}`))
  }

  function handleUpdateAvatar(avatar) {
    api
      .loadigNewAvatarOnServer(avatar)
      .then((ava) => {
        setCurrentUser(ava)
        closeAllPopups();
      })
      .catch((err) => console.log(`Ошибка ${err}`))
  }

  function handleAddPlaceSubmit(name, link) {
    api
      .loadingNewCardOnServer(name, link)
      .then((newCard) => {
        setCards([newCard, ...cards])
        closeAllPopups();
      })
      .catch((err) => console.log(`Ошибка ${err}`))
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }


  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onEditAvatar={handleEditAvatarClick}
        onAddCards={handleAddPlaceClick}
        onCardClick={handleCardClick}
        onCardLike={handleCardLike}
        onCardDelete={handleCardDelete}
        cards={cards}
      />
      <Footer />

      <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        onUpdateUser={handleUpdateUser}
      />

      <EditAvatarPopup
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        onUpdateAvatar={handleUpdateAvatar}
      />

      <AddCardsPopup
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        onAddCard={handleAddPlaceSubmit}
      />

      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />
    </CurrentUserContext.Provider>

  );
}

export default App;
