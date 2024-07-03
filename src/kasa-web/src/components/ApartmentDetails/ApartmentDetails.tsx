import "./ApartmentDetails.scss";

type Props = {
  title: string;
  location: string;
};

const ApartmentDetails = ({ title, location }: Props) => {
  return (
    <div className="apartment-details">
      <div className="apartment-details__title">{title}</div>
      <div className="apartment-details__location">{location}</div>
    </div>
  );
};

export default ApartmentDetails;
