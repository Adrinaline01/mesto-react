import React from "react";
import PopupWithForm from "./PopupWithForm.js";

function EditProfilePopup({isOpen, onClose}) {
  return (
    <PopupWithForm 
      name={'editing'}
      title='Редактировать профиль'
      isOpen={isOpen}
      onClose={onClose}
      >
      <input className="popup__input popup__input_content_name" id="name-input" type="text" name="name" placeholder="Введите имя" required minLength="2" maxLength="40" />
      <span className="popup__span-input-error name-input-error" id="error-name-input"></span>
      <input className="popup__input popup__input_content_activity" id="activity-input" type="text" name="about" placeholder="Введите род деятельности" required minLength="2" maxLength="40" />
      <span className="popup__span-input-error activity-input-error" id="error-activity-input"></span>
    </PopupWithForm>
  )
}

export default EditProfilePopup;