import PopupWithForm from "./PopupWithForm";

function AddCardsPopup({isOpen, onClose}) {
  return (
    <PopupWithForm
    name={'cards-add'}
    title='Новое место'
    isOpen={isOpen}
    onClose={onClose}
    >
      <input className="popup__input popup__input_content_appellation" id="appellation-input" type="text" name="name" required placeholder="Название" minLength="2" maxLength="30" />
      <span className="popup__span-input-error appellation-input-error" id="error-appellation-input"></span>
      <input className="popup__input popup__input_content_link" id="link-input" type="url" name="link" required placeholder="Ссылка на картинку" />
      <span className="popup__span-input-error link-input-error" id="error-link-input"></span>
    </PopupWithForm>
  )
}

export default AddCardsPopup;