import React from "react";

function PopupWithForm({isOpen, name, title, onClose, ...props}) {
  return (
    <div className={`popup popup_${name} ${isOpen && 'popup_opened'}`}>
    <div className={`popup__container popup__container_${name}`}>
      <h2 className={`popup__title popup__title_${name}`}>{title}</h2>
      <form className={`popup__form popup__form_${name}`} name="profile" noValidate>
        {props.children}
        <button className={`popup__save-btn button popup__save-btn_${name}`} disabled>Сохранить</button>
      </form>
      <button className={`popup__close-btn button popup__close-btn_${name}`} onClick={onClose} type="button"></button>
    </div>
  </div>
  )
}

export default PopupWithForm;