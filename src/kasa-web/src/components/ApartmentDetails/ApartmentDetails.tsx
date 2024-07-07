import classNames from "classnames";
import "./ApartmentDetails.scss";

type Props = {
  title: string;
  location: string;
  className?: string;
};

const ApartmentDetails = ({ title, location, className }: Props) => {
  return (
    <div className={classNames("apartment-details", className)}>
      <div className="apartment-details__title">{title}</div>
      <div className="apartment-details__location">{location}</div>
    </div>
  );
};

export default ApartmentDetails;
