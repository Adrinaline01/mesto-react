function Card({card, onCardClick, name, link}) {

  function handleCardClick() {
    onCardClick(card);
  }

  return (
    <li className="cards__item">
      <button className="cards__removal button" type="button" aria-label="Удалить карточку"></button>
      <img className="cards__photo" src={link} onClick={handleCardClick} alt={name} />
      <div className="cards__depiction">
        <h2 className="cards__title">{name}</h2>
        <div className="cards__like">
          <button className="cards__like-button button" type="button" aria-label="Поставить лайк" ></button>
          <p id="number" className="cards__like-counter">{card.likes.length}</p>
        </div>
      </div>
    </li>
  )
}

export default Card;