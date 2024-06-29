import "./ApartmentCard.scss";

type Props = {
  title: string;
  location: string;
  cover: string;
};

const ApartmentCard = ({ title, location, cover }: Props) => {
  return (
    <div className="apartment-card">
      <img src={cover} alt="cover" className="apartment-card__cover" />
    </div>
  );
};

export default ApartmentCard;
