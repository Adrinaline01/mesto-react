import React, {useState, useEffect} from 'react';
import '../index.css';
import Header from './Header.js';
import Main from './main.js';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import EditProfilePopup from './EditProfilePopup.js';
import AddCardsPopup from './AddCardsPopup.js';
import EditAvatarPopup from './EditAvatarPopup.js'
import ImagePopup from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState();


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
    setSelectedCard(false);
  }

  return (
    <div>
      <Header />
      <Main 
        onEditProfile={handleEditProfileClick}
        onEditAvatar={handleEditAvatarClick}
        onAddCards={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />
      <Footer />

      <EditProfilePopup 
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      />

      <EditAvatarPopup 
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      />
      
      <AddCardsPopup
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      />

      <ImagePopup 
        card={selectedCard}
        onClose={closeAllPopups}
      />
    </div>

  );
}

export default App;
