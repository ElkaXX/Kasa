import "./ApartmentCard.scss";

type Props = {
  title: string;
  location: string;
  cover: string;
};

const ApartmentCard = ({ title, location, cover }: Props) => {
  return (
    <div className="apartment-card">
      {cover ? (
        <img src={cover} alt="cover" className="apartment-card__cover" />
      ) : null}

      <div className="apartment-card__description">
        <div className="apartment-card__title">{title}</div>
        <div className="apartment-card__location">{location}</div>
      </div>
    </div>
  );
};

export default ApartmentCard;
