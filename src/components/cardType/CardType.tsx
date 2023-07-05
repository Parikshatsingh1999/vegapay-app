import { useContext } from "react";
import { MainContext, IContextItems } from "../../contexts/ContextMain";
import CardBox from "../../snippets/CardBox";
import "./cardType.css";

const CardType = () => {
  console.log("render");
  const { cardType, currentCard, changeCurrentCard } = useContext(
    MainContext
  ) as IContextItems;

  return (
    <div className="header-container main-element">
      <div className="heading-bar">
        <h3> New Card Sale </h3>
        <p> Issue new card </p>
      </div>
      <div className="type-list">
        <div className="type-container">
          {cardType.map((card) => (
            <CardBox
              card={card}
              key={card.id}
              isActive={currentCard === card.id}
              changeCard={changeCurrentCard}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardType;
