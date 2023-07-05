import usericon from "../assets/usericon.svg";
import { ICardType } from "../contexts/ContextMain";

interface CardProps {
  card: ICardType;
  isActive?: boolean;
  changeCard?: (id: number) => void;
}

const CardBox = ({ card, isActive, changeCard }: CardProps) => {
  return (
    <div
      className="card-prop"
      onClick={() => changeCard && changeCard(card.id)}
      data-active={isActive ? true : false}
    >
      <img src={usericon} />
      <label> {card.label} </label>
    </div>
  );
};

export default CardBox;
