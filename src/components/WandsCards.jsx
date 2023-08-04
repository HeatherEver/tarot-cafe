import { useState, useEffect } from "react";
import { getCards } from "../server/tarotCards";
import {Link} from "react-router-dom"

export const WandsCards = () => {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    setIsLoading(true);
    getCards().then((cardsFromAPI) => {
      const wandsCards = cardsFromAPI.filter((card) => {
        return card.suit === "Suit of Wands";
      });
      const sortedWands = wandsCards.sort((a,b ) => a.value - b.value)
      setCards(sortedWands);
      setIsLoading(false);
    });
  }, []);


  if (isLoading) return <p>...loading</p>;
  else
    return (
      <>
      <header className="suit-header-img">
        <h1 className="suit-header">Suit of Wands</h1>
      </header>

        <ul className="tarot-list-container">
          {cards.map((card, index) => {
            return (
              <li key={card.cardName} className="card" id={`card-${index}`}>
                <img src={card.img} alt={card.cardName} className="tarot-img" />
                <figcaption className="figcaption">
                  <p className="tarot-desc"><b className="tarot-titles">Card:</b> {card.cardName}</p>
                  <p className="tarot-desc">
                    <b className="tarot-titles">Represents:</b> {card.represents}
                  </p>
                  <p className="tarot-desc">
                    <b className="tarot-titles">Deck:</b> {card.deck}
                  </p>
                <Link to={`/${card.id}`}>
                    <button className="more-btn">More Information</button>
                  </Link>
                </figcaption>
              </li>
            );
          })}
        </ul>
      </>
    );
};
