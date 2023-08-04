import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCards } from "../server/tarotCards";

export const MajorArcanaCardsCard = () => {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    setIsLoading(true);
    getCards().then((cardsFromAPI) => {
      const majorArcana = cardsFromAPI.filter((card) => {
        return card.deck === "Major Arcana";
      });
      setCards(majorArcana);
      setIsLoading(false);
    });
  }, []);




  if (isLoading) return <p>...loading</p>;
  else
    return (
      <>
        <header className="header-img-ma">
          <h1 className="ma-header">Major Arcana</h1>
          <p className="major-arcana-p">
            The Major Arcana cards are a significant component of the Tarot
            deck, consisting of 22 cards that hold deep symbolism and represent
            profound archetypal energies. These cards depict powerful and
            transformative experiences, encompassing both external events and
            inner spiritual journeys. Each Major Arcana card carries its own
            distinct meaning and message, reflecting universal themes such as
            life lessons, spiritual growth, and significant turning points. From
            the Fool's journey of new beginnings to the World's representation
            of fulfillment and completion, the Major Arcana cards serve as a
            profound tool for introspection, self-discovery, and guidance on
            life's profound mysteries.
          </p>
        </header>
        <div className="major-arcana-container">    
          <ul className="tarot-list-container">
            {cards.map((card, index) => {
              return (
                <li key={card.cardName} className="card" id={`card-${index}`}>
                  <img
                    src={card.img}
                    alt={card.cardName}
                    className="tarot-img"
                  />
                  <figcaption className="figcaption">
                    <p className="tarot-desc">
                      <b className="tarot-titles">Represents:</b> {card.represents}
                    </p>
                    <p className="tarot-desc">
                      <b className="tarot-titles">Deck:</b> {card.deck}
                    </p>
                    <p className="tarot-desc">
                      <b className="tarot-titles">Suit: </b>
                      {card.suit}
                    </p>
                    <Link to={`/${card.id}`}>
                      <button className="more-btn">more...</button>
                    </Link>
                  </figcaption>
                </li>
              );
            })}
          </ul>
        </div>
      </>
    );
};
