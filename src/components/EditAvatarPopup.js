import React from "react";
import PopupWithForm from "./PopupWithForm.js";

function EditAvatarPopup({isOpen, onClose}) {
  return (
    <PopupWithForm 
      name={'editing-avatar'}
      title='Обновить аватар'
      isOpen={isOpen}
      onClose={onClose}
      textButton='Сохранить'
      >
      <input className="popup__input popup__input_content_avatar" id="avatar-link-input" type="url" name="avatar" required placeholder="Ссылка на картинку" />
      <span className="popup__span-input-error avatar-link-input-error" id="error-avatar-link-input"></span>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;