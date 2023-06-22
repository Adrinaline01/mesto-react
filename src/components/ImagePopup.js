import React from "react";

function ImagePopup({card, onClose}) {
  return (
    card &&
    <div className={`popup popup_view-picture ${card && 'popup_opened'} `}>
      <div className="popup__container-view-picture">
        <figure className="popup__place-view-picture">
          <button className="popup__close-btn button popup__close-btn_view-picture" type="button" onClick={onClose}></button>
          <img className="popup__picture" src={card.link} />
          <figcaption className="popup__signature"></figcaption>
        </figure>
      </div>
    </div>
  )
}

export default ImagePopup;